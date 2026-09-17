
namespace SpriteKind {
    export const Hero = SpriteKind.create()
    export const Solid = SpriteKind.create()
}

namespace userconfig {
    export const ARCADE_SCREEN_WIDTH = 160
    export const ARCADE_SCREEN_HEIGHT = 144
}


let hero_up = tomb.createAnimation(tomb.TOM_UP);
let hero_down = tomb.createAnimation(tomb.TOM_DOWN)
let hero_left = tomb.createAnimation(tomb.TOM_LEFT)
let hero_righ = flipH(hero_left)

let currentRoomName = tomb.ATRIUM_NAME;


tiles.setCurrentTilemap(tomb.createTilemap(currentRoomName));
image.setPalette(tomb.palette)
let lastWrap: Warp = null;
setup(currentRoomName);

let hero: Sprite;
let debug: boolean = false;

function flipH(imgs: Image[]): Image[] {
    return imgs.map(i => {
        let cloned = i.clone();
        cloned.flipX();      
        return cloned;
    })
}

interface Tom {
    facing?: Direction
}

function isAnimating(sp: Sprite) {
    let state: AnimationState = game.currentScene().data["__animation"];
    if (state == null) return false;
    for (let anim of state.animations) {
        if (anim instanceof animation.MovementAnimation && anim.sprite == sp) {
            return true;
        }
    }
    return false;
}

function getObstacleFromRelativeDirection(sp: Sprite, dir: Direction) {

    let x = sp.x + DIRECTION_DX[dir];
    let y = sp.y + DIRECTION_DY[dir];


    if (game.currentScene().tileMap.isObstacle(x / 8, y / 8)) {
        return sp;
    }
    for (const candidate of sprites.allOfKind(SpriteKind.Solid)) {
        if (Math.abs(x - candidate.x) < 8 && Math.abs(y - candidate.y) < 8) {
            return candidate;
        }
    }
    return null;
}

let cooldown = 0;

controller.A.addEventListener(ControllerButtonEvent.Pressed, () => {
        console.log(JSON.stringify({x: hero.x, y: hero.y, bottom: hero.bottom}))
})

controller.B.addEventListener(ControllerButtonEvent.Pressed, () => {
    debug = !debug;
})


game.onUpdate(() => {
    if (cooldown > 0) cooldown--;
    if (!isAnimating(hero)) {
        if (controller.left.isPressed()) {
            moveHero(Direction.W);
        } else if (controller.right.isPressed()) {
            moveHero(Direction.E);
        } else if (controller.up.isPressed()) {
            moveHero(Direction.N);
        } else if (controller.down.isPressed()) {
            moveHero(Direction.S);
        } else {
            moveHero(Direction.ZERO);
        }


    let warps = tomb.objects.getWarpCollectionForRoom(currentRoomName)
    let inAnyWarp = false;
        for (let i = 0; i < warps.length; i++) {
            let warp = warps[i]
            if (isSpriteInRect(hero, warp)) {
                inAnyWarp = true;
                if (lastWrap != warp) {
    
                    console.log("wrap id:" + warp.id + ", warp target: " + warp.jumpTo + "; current room: " + warp.room)
                    let target = tomb.objects.getById(warp.jumpTo) as Warp;
    
                    currentRoomName = target.room;
                    tiles.setCurrentTilemap(tomb.createTilemap(currentRoomName))
                    setup(currentRoomName);
                    console.log("cooldown");
                    cooldown = 60;

                    animation.stopAnimation(animation.AnimationTypes.MovementAnimation, hero);

                    if (target.vertical) {

                        console.log(JSON.stringify(target))

                        let hOffset = hero.x - warp.x;
                        hero.x = target.x + hOffset
                        hero.bottom = target.y + target.height;

                        console.log("hero x: " + hero.x);
                        console.log("hero.bottom: " + hero.bottom);


                    } else {
                        let vOffset = hero.y - warp.y
                        hero.y = target.y + vOffset;
                        hero.left = target.x;
                    }

                    lastWrap = target as Warp;
    
                    return;
                }
            }
        }
        if (!inAnyWarp) {
            lastWrap = null;
        }
    }
});

scene.createRenderable(scene.HUD_Z, (target, camera) => {
    if (debug) {
        let warps = tomb.objects.getWarpCollectionForRoom(currentRoomName);
        for (let wrap of warps) {
            target.drawRect(
                wrap.x - camera.drawOffsetX,
                wrap.y - camera.drawOffsetY,
                wrap.width,
                wrap.height,
                10 // Yellow color in default palette
            );
            target.print(
                "" + wrap.id + " " + wrap.name,
                wrap.x - camera.drawOffsetX + 2,
                wrap.y - camera.drawOffsetY + 2,
                5
            );
        }
    }
});


function isMoveable(spr: Sprite) {
    let worldObject = spr.data as WorldObject;
    return worldObject.type == "Bomb";
}

function moveHero(dir: Direction) {
    let obstacle = getObstacleFromRelativeDirection(hero, dir);

    const tom = hero.data as Tom;

    let moves: Direction = dir;
    if (obstacle == null) {
        move(hero, dir);
    } else if (obstacle.kind() == SpriteKind.Solid) {

        if (tryPush(obstacle, dir)) {
            move(hero, dir);
        } else {
            moves = Direction.ZERO;
        }
    }
    tom.facing = transitionState(hero, moves, tom.facing, TOM_WALKING);
}

function tryPush(spr: Sprite, dir: Direction) {
    if (isMoveable(spr) && getObstacleFromRelativeDirection(spr, dir) == null) {
        move(spr, dir);
        return true;
    } 
    return false;
}

function move(sp: Sprite, dir: Direction) {
    animation.runMovementAnimation(sp, DIRECTION_STRINGS[dir], 200, false);
}


function setup(room: string) {

    console.log("setting up " + room)

    game.currentScene().allSprites.forEach(spr => {
        if (spr != hero && spr instanceof Sprite) {
            spr.destroy();
        }
    })

    for (const floorSwitch of tomb.objects.getSwitchCollectionForRoom(room)) {
        let heroSprite = sprites.create(tomb.createImage(tomb.SWITCH));
        heroSprite.left = floorSwitch.x
        heroSprite.bottom = floorSwitch.y
        heroSprite.setFlag(SpriteFlag.Ghost, true);
        heroSprite.data = floorSwitch;
    }
    for (const bomb of tomb.objects.getBombCollectionForRoom(room)) {
        let heroSprite = sprites.create(tomb.createImage(tomb.BOMB), SpriteKind.Solid);
        heroSprite.left = bomb.x
        heroSprite.bottom = bomb.y
        heroSprite.setFlag(SpriteFlag.Ghost, true);
        heroSprite.data = bomb;
    }
    if (!hero) {
        for (const h of tomb.objects.getTomCollectionForRoom(room)) {
            console.log("creating a new hero")
            let heroSprite = sprites.create(tomb.createImage(tomb.TOM_DOWN));
            heroSprite.left = h.x
            const tom = h as Tom;
            tom.facing = Direction.ZERO;
            heroSprite.bottom = h.y
            scene.cameraFollowSprite(heroSprite)
            hero = heroSprite;
            heroSprite.data = h;
            heroSprite.setFlag(SpriteFlag.Ghost, true);
        }
    }
    for (const h of tomb.objects.getDoorCollectionForRoom(room)) {
        let heroSprite = sprites.create(tomb.createImage(tomb.DOOR), SpriteKind.Solid);
        heroSprite.left = h.x
        heroSprite.bottom = h.y
        heroSprite.setFlag(SpriteFlag.Ghost, true);
    }
}

enum Direction {
    ZERO,
    N,
    S,
    E,
    W,
}

const DIRECTION_DX = [
    0,
    0,
    0,
    16,
    -16
]

const DIRECTION_DY = [
    0,
    -16,
    16,
    0,
    0
]

const DIRECTION_STRINGS = [
    "",
    "v -16",
    "v 16",
    "h 16",
    "h -16"
]

const TOM_DIRECTION_ANIMATIONS = [
    hero_down,
    hero_up,
    hero_down,
    hero_righ,
    hero_left
]

const ANY_STATE: number = -1;

interface AnimationState {
    readonly animations: animation.SpriteAnimation[];
}

interface EventTransitions {
    readonly event: number,
    readonly transitions: StateTransition[]
}

interface StateTransition {
    readonly from: number,
    readonly to: number
}

interface OnEnter {
    readonly entering: number,
    readonly onEnter: (arg: any) => void;
}

interface StateMachine {
    eventTransitions: EventTransitions[],
    onEnter: OnEnter[] 
}

function transitionState(actor: any, event: number, fromState: number, stateMachine: StateMachine) {
    for (let i = 0; i < stateMachine.eventTransitions.length; i++) {
        if (stateMachine.eventTransitions[i].event == event) {
            for (let y = 0; y < stateMachine.eventTransitions[i].transitions.length; y++) {
                if (stateMachine.eventTransitions[i].transitions[y].from == ANY_STATE || stateMachine.eventTransitions[i].transitions[y].from == fromState) {
                    const targetState = stateMachine.eventTransitions[i].transitions[y].to;
                    if (targetState != fromState) {
                        for (let u = 0; u < stateMachine.onEnter.length; u++) {
                            if (stateMachine.onEnter[u].entering == targetState) {
                                stateMachine.onEnter[u].onEnter(actor);
                                break;
                            }
                        }
                    }
                    return targetState;
                }
            }
            break;
        }
    }
    return fromState;
}

const TOM_WALKING: StateMachine = {
    eventTransitions: [
        {
            event: Direction.N, transitions: [
                {from: ANY_STATE, to: Direction.N}
            ]
        },
        {
            event: Direction.S, transitions: [
                {from: ANY_STATE, to: Direction.S}
            ]
        },
        {
            event: Direction.W, transitions: [
                {from: ANY_STATE, to: Direction.W}
            ]
        },
        {
            event: Direction.E, transitions: [
                {from: ANY_STATE, to: Direction.E}
            ]
        },
        {
            event: Direction.ZERO, transitions: [
                {from: ANY_STATE, to: Direction.ZERO}
            ]
        }
        
    ],
    onEnter: [
        {
            entering: Direction.N,
            onEnter: spr => {
                animation.runImageAnimation(spr, TOM_DIRECTION_ANIMATIONS[Direction.N], 200, true);
            }
        },
        {
            entering: Direction.S,
            onEnter: spr => {
                animation.runImageAnimation(spr, TOM_DIRECTION_ANIMATIONS[Direction.S], 200, true);
            }
        },
        {
            entering: Direction.W,
            onEnter: spr => {
                animation.runImageAnimation(spr, TOM_DIRECTION_ANIMATIONS[Direction.W], 200, true);
            }
        },
        {
            entering: Direction.E,
            onEnter: spr => {
                animation.runImageAnimation(spr, TOM_DIRECTION_ANIMATIONS[Direction.E], 200, true);
            }
        },
        {
            entering: Direction.ZERO,
            onEnter: spr => {
                animation.stopAnimation(animation.AnimationTypes.ImageAnimation, spr);
            }
        },
    ]
}


function top(object: WorldObject): number {
    return object.y
}

function bottom(object: WorldObject): number {
    return object.y + object.height;
}
function left(object: WorldObject): number {
    return object.x;
}
function right(object: WorldObject): number {
    return object.x + object.width;
}


function isSpriteOverlappingRect(s: Sprite, r: WorldObject): boolean {
    return s.left < r.x + r.width &&
           s.right > r.x &&
           s.top < r.y + r.height &&
           s.bottom > r.y;
}

function isSpriteInRect(s: Sprite, r: WorldObject): boolean {
    return s.x >= r.x &&
           s.x <= r.x + r.width &&
           s.y >= r.y &&
           s.y <= r.y + r.height;
}

