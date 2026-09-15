
namespace SpriteKind {
    export const Hero = SpriteKind.create()
    export const Solid = SpriteKind.create()
}

let hero_up = egypt.createAnimation(egypt.TOM_UP);
let hero_down = egypt.createAnimation(egypt.TOM_DOWN)
let hero_left = egypt.createAnimation(egypt.TOM_LEFT)
let hero_righ = flipH(hero_left)


tiles.setCurrentTilemap(egypt.createTilemap("map"));
image.setPalette(egypt.palette)

setup(null);

let hero: Sprite;

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

game.onUpdate(() => {
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
    for (const floorSwitch of egypt.objects.getSwitchCollectionForRoom(room)) {
        let heroSprite = sprites.create(egypt.createImage(egypt.SWITCH));
        heroSprite.left = floorSwitch.x
        heroSprite.bottom = floorSwitch.y
        heroSprite.setFlag(SpriteFlag.Ghost, true);
        heroSprite.data = floorSwitch;
    }
    for (const bomb of egypt.objects.getBombCollectionForRoom(room)) {
        let heroSprite = sprites.create(egypt.createImage(egypt.BOMB), SpriteKind.Solid);
        heroSprite.left = bomb.x
        heroSprite.bottom = bomb.y
        heroSprite.setFlag(SpriteFlag.Ghost, true);
        heroSprite.data = bomb;
    }
    for (const h of egypt.objects.getTomCollectionForRoom(room)) {
        let heroSprite = sprites.create(egypt.createImage(egypt.TOM_DOWN));
        heroSprite.left = h.x
        const tom = h as Tom;
        tom.facing = Direction.ZERO;
        heroSprite.bottom = h.y
        scene.cameraFollowSprite(heroSprite)
        hero = heroSprite;
        heroSprite.data = h;
        heroSprite.setFlag(SpriteFlag.Ghost, true);
    }
    for (const h of egypt.objects.getDoorCollectionForRoom(room)) {
        let heroSprite = sprites.create(egypt.createImage(egypt.DOOR), SpriteKind.Solid);
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