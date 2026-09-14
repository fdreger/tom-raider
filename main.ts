
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
        }if (controller.up.isPressed()) {
            moveHero(Direction.N);
        }if (controller.down.isPressed()) {
            moveHero(Direction.S);
        }
    }
});


function isMoveable(spr: Sprite) {
    let worldObject = spr.data as WorldObject;
    return worldObject.type == "Bomb";
}

function moveHero(dir: Direction) {
    let obstacle = getObstacleFromRelativeDirection(hero, dir);

    if (obstacle == null) {
        animation.runImageAnimation(hero, TOM_DIRECTION_ANIMATIONS[dir], 200, true);
        move(hero, dir);
    } else if (obstacle.kind() == SpriteKind.Solid) {

        if (tryPush(obstacle, dir)) {
            move(hero, dir);
        }
    }
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
    N,
    S,
    E,
    W
}

const DIRECTION_DX = [
    0,
    0,
    16,
    -16
]

const DIRECTION_DY = [
    -16,
    16,
    0,
    0
]

const DIRECTION_STRINGS = [
    "v -16",
    "v 16",
    "h 16",
    "h -16"
]

const TOM_DIRECTION_ANIMATIONS = [
    hero_up,
    hero_down,
    hero_righ,
    hero_left
]



interface AnimationState {
    animations: animation.SpriteAnimation[];
}

