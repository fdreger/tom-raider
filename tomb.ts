// Auto-generated code. Do not edit.
interface WorldObject {
    readonly id: number;
    readonly name: string;
    readonly x: number;
    readonly y: number;
    readonly width: number;
    readonly height: number;
    readonly room: string;
    readonly type: string;
}

interface Tom extends WorldObject {
    readonly type: "Tom";
}

interface Crate extends WorldObject {
    readonly type: "Crate";
}

interface PressurePlate extends WorldObject {
    readonly type: "PressurePlate";
}

interface Pit extends WorldObject {
    readonly type: "Pit";
}

interface Switch extends WorldObject {
    readonly type: "Switch";
}

interface Spikes extends WorldObject {
    readonly type: "Spikes";
    readonly _active: boolean;
    active: boolean;
}

interface DartShooter extends WorldObject {
    readonly type: "DartShooter";
}

interface Bomb extends WorldObject {
    readonly type: "Bomb";
}

interface Door extends WorldObject {
    readonly type: "Door";
}

interface Warp extends WorldObject {
    readonly type: "Warp";
    readonly jumpTo: number;
    readonly vertical: boolean;
}

namespace tomb {
    export const TOM_DOWN = "tom_down";
    export const TOM_LEFT = "tom_left";
    export const TOM_UP = "tom_up";
    export const GOLD = "Gold";
    export const CRATE = "Crate";
    export const DARTSHOOTER = "DartShooter";
    export const PIT = "Pit";
    export const SWITCH = "Switch";
    export const SPIKES = "Spikes";
    export const PRESSUREPLATE = "PressurePlate";
    export const PRESSUREPLAATE = "PressurePlaate";
    export const BOULDER = "Boulder";
    export const BOMB = "Bomb";
    export const DOOR = "Door";

    export const palette = hex`000000cec4ab6f6e744c4b49a1998ecec3ab000000000000000000000000000000000000000000000000000000000000`;

    export function createImage(name: string): Image {
        switch(name) {
            case "tom_down": return img`
. . 3 3 . . . . . 3 3 . . . 
. . 3 2 3 4 4 4 3 2 3 . . . 
. . 3 4 2 3 3 3 2 4 3 . . . 
. . 3 4 4 4 4 4 4 4 3 . . . 
3 3 2 4 4 4 4 4 4 4 2 3 3 . 
. 3 4 4 5 4 4 4 5 4 4 3 . . 
3 3 4 5 3 5 5 5 3 5 4 3 3 . 
. 3 2 5 3 5 5 5 3 5 2 3 . . 
. . 3 4 5 5 3 5 5 4 3 . . . 
. 3 2 3 2 4 4 4 2 3 2 3 . . 
3 2 4 4 2 5 5 5 2 4 4 2 3 . 
3 4 4 3 4 4 5 4 4 3 4 4 3 . 
3 5 5 3 4 4 4 4 4 3 5 5 3 . 
. 3 3 3 4 4 4 4 4 3 3 3 . . 
. . . 3 4 4 2 4 4 3 . . . . 
. . . 3 2 2 3 2 2 3 . . . . 
. . . 3 5 5 3 5 5 3 . . . . 
. . . . . . . . . . . . . . 
`  
            case "tom_left": return img`
. . . . . . . 3 3 3 . . . . 
. . . . . . 3 2 5 3 . . . . 
. . . . 3 3 3 5 5 3 . . . . 
. . . 3 4 4 4 4 4 4 3 . . . 
. . 3 4 4 4 4 4 4 4 3 . . . 
. . 3 4 5 4 4 4 4 4 3 . . . 
. . 3 5 3 5 2 4 4 4 3 . . . 
. . 3 5 3 5 4 4 4 4 3 . . . 
. . 3 5 5 2 2 4 4 4 3 . . . 
. . . 3 2 2 4 4 2 3 . . . . 
. . . 3 4 5 2 2 3 . . . . . 
. . . 3 5 3 4 4 3 . . . . . 
. . . 3 4 3 4 4 3 . . . . . 
. . . 3 4 3 5 4 3 . . . . . 
. . . 3 4 4 3 3 . . . . . . 
. . . 3 3 2 2 3 . . . . . . 
. . . 3 3 5 5 3 . . . . . . 
. . . . . . . . . . . . . . 
`  
            case "tom_up": return img`
. . 3 3 . . . . . 3 3 . . . 
. . 3 2 3 4 4 4 3 2 3 . . . 
. . 3 4 2 3 3 3 2 4 3 . . . 
. . 3 4 4 4 4 4 4 4 3 . . . 
3 3 4 4 4 4 4 4 4 4 4 3 3 . 
. 3 4 4 4 4 4 4 4 4 4 3 . . 
3 3 4 4 4 4 4 4 4 4 4 3 3 . 
. 3 4 4 4 4 4 4 4 4 4 3 . . 
. . 3 4 4 4 4 4 4 4 3 . . . 
. 3 2 3 2 2 2 2 2 3 2 3 . . 
3 2 4 4 4 2 2 2 4 4 4 2 3 . 
3 4 4 3 4 4 4 4 4 3 4 4 3 . 
3 5 5 3 4 4 4 4 4 3 5 5 3 . 
. 3 3 3 4 4 4 4 4 3 3 3 . . 
. . . 3 4 4 2 4 4 3 . . . . 
. . . 3 2 2 3 2 2 3 . . . . 
. . . 3 5 5 3 5 5 3 . . . . 
. . . . . . . . . . . . . . 
`  
            case "Gold": return img`
. . . . 1 1 4 4 1 4 1 2 4 . . . 
. 4 4 1 4 4 1 4 4 1 4 4 2 4 4 . 
. 4 4 1 4 1 4 1 4 4 1 4 2 4 4 . 
. 4 1 4 1 4 1 1 4 1 4 2 2 2 4 . 
. 1 4 4 4 1 4 4 1 4 2 4 2 2 4 . 
. 1 4 1 1 4 1 4 2 2 4 2 4 2 4 . 
. 1 4 1 4 1 2 4 2 4 2 4 2 2 1 . 
. 1 1 4 4 2 4 2 2 2 2 2 2 4 1 . 
. 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`  
            case "Crate": return img`
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 1 1 2 1 1 2 1 1 2 1 1 2 1 1 3 
3 4 4 2 4 4 2 4 4 2 4 4 2 4 4 3 
3 4 4 2 4 4 2 4 4 2 4 4 2 4 4 3 
3 4 4 2 4 4 2 4 4 2 4 4 2 4 4 3 
3 4 4 2 4 4 2 4 4 2 4 4 2 4 4 3 
3 4 4 2 4 4 2 4 4 2 4 4 2 4 4 3 
3 4 4 2 4 4 2 4 4 2 4 4 2 4 4 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 2 3 2 3 4 4 4 4 4 4 3 2 3 2 3 
2 4 4 4 2 4 4 4 4 4 4 2 4 4 4 2 
2 4 4 4 2 2 2 2 2 2 2 2 4 4 4 2 
2 4 3 4 2 2 2 2 2 2 2 2 4 3 4 2 
3 4 4 4 3 4 4 4 4 4 4 3 4 4 4 3 
3 4 3 4 3 4 4 4 4 4 4 3 4 3 4 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
`  
            case "Crate": return img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 1 1 2 1 1 2 1 1 2 1 1 2 1 1 2 
2 4 4 2 4 4 2 4 4 2 4 4 2 4 4 2 
2 4 4 2 4 4 2 4 4 2 4 4 2 4 4 2 
2 4 4 2 4 4 2 4 4 2 4 4 2 4 4 2 
2 4 4 2 4 4 2 4 4 2 4 4 2 4 4 2 
2 4 4 2 4 4 2 4 4 2 4 4 2 4 4 2 
2 4 4 2 4 4 2 4 4 2 4 4 2 4 4 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 4 2 4 2 4 4 4 4 4 4 2 4 2 4 2 
2 4 4 4 2 4 4 4 4 4 4 2 4 4 4 2 
2 4 4 4 2 2 2 2 2 2 2 2 4 4 4 2 
2 4 2 4 2 2 2 2 2 2 2 2 4 2 4 2 
2 4 4 4 2 4 4 4 4 4 4 2 4 4 4 2 
2 4 2 4 2 4 4 4 4 4 4 2 4 2 4 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`  
            case "DartShooter": return img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 1 . . . 
. . . . . . . . . . . 1 3 1 1 1 
. . . . . . . . . . 1 3 3 3 3 3 
. . . . . . . . . . . 1 3 1 1 1 
. . . . . . . . . . . . 1 . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`  
            case "Pit": return img`
. . . . . . . . . . . . . . . . 
. . . . . 3 3 3 3 3 3 . . . . . 
. . . 3 3 2 2 2 2 2 2 3 3 . . . 
. . 3 2 2 2 2 2 2 2 2 2 2 3 . . 
. 3 2 2 2 3 3 3 3 3 3 2 2 2 3 . 
3 2 2 3 3 3 3 3 3 3 3 3 3 2 2 3 
2 2 3 3 3 3 3 3 3 3 3 3 3 3 2 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
. 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
. . . 3 3 3 3 3 3 3 3 3 3 . . . 
. . . . . 3 3 3 3 3 3 . . . . . 
. . . . . . . . . . . . . . . . 
`  
            case "DartShooter": return img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 1 . . . . . . . . . . . . 
1 1 1 3 1 . . . . . . . . . . . 
3 3 3 3 3 1 . . . . . . . . . . 
1 1 1 3 1 . . . . . . . . . . . 
. . . 1 . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`  
            case "Switch": return img`
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
2 4 4 4 4 4 4 4 4 4 4 4 4 4 4 2 
2 4 2 4 4 3 3 3 3 3 3 4 4 2 4 2 
2 4 4 4 3 1 1 1 1 1 1 3 4 4 4 2 
2 4 4 3 1 4 4 4 4 4 4 1 3 4 4 2 
2 4 3 1 4 4 4 3 4 3 4 4 1 3 4 2 
2 4 3 1 4 3 4 4 4 4 3 4 1 3 4 2 
2 4 3 1 4 4 4 3 3 4 4 4 1 3 4 2 
2 4 3 1 4 4 3 3 3 3 4 4 1 3 4 2 
2 4 3 2 1 4 4 4 4 4 4 1 2 3 4 2 
2 4 4 3 2 1 1 1 1 1 1 2 3 4 4 2 
2 4 4 4 3 2 2 2 2 2 2 3 4 4 4 2 
2 4 4 4 4 3 3 3 3 3 3 4 4 4 4 2 
2 4 2 4 4 4 4 4 4 4 4 4 4 2 4 2 
2 4 4 4 4 4 4 4 4 4 4 4 4 4 4 2 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
`  
            case "Switch": return img`
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
2 4 4 4 4 4 4 4 4 4 4 4 4 4 4 2 
2 4 2 4 4 3 3 3 3 3 3 4 4 2 4 2 
2 4 4 4 3 2 2 2 2 2 2 3 4 4 4 2 
2 4 4 3 2 4 4 4 4 4 4 2 3 4 4 2 
2 4 3 2 4 4 4 4 4 4 4 4 2 3 4 2 
2 4 3 2 4 4 4 3 4 3 4 4 2 3 4 2 
2 4 3 2 4 3 4 4 4 4 3 4 2 3 4 2 
2 4 3 2 4 4 4 3 3 4 4 4 2 3 4 2 
2 4 3 2 4 4 3 3 3 3 4 4 2 3 4 2 
2 4 4 3 2 4 4 4 4 4 4 2 3 4 4 2 
2 4 4 4 3 2 2 2 2 2 2 3 4 4 4 2 
2 4 4 4 4 3 3 3 3 3 3 4 4 4 4 2 
2 4 2 4 4 4 4 4 4 4 4 4 4 2 4 2 
2 4 4 4 4 4 4 4 4 4 4 4 4 4 4 2 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
`  
            case "Switch": return img`
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
2 4 4 4 4 4 4 4 4 4 4 4 4 4 4 2 
2 4 2 4 4 3 3 3 3 3 3 4 4 2 4 2 
2 4 4 4 3 1 1 1 1 1 1 3 4 4 4 2 
2 4 4 3 1 4 4 4 4 4 4 1 3 4 4 2 
2 4 3 1 4 4 4 4 4 4 4 4 1 3 4 2 
2 4 3 1 4 4 4 4 4 4 4 4 1 3 4 2 
2 4 3 1 4 4 4 4 4 4 4 4 1 3 4 2 
2 4 3 1 4 4 4 4 4 4 4 4 1 3 4 2 
2 4 3 2 1 4 4 4 4 4 4 1 2 3 4 2 
2 4 4 3 2 1 1 1 1 1 1 2 3 4 4 2 
2 4 4 4 3 2 2 2 2 2 2 3 4 4 4 2 
2 4 4 4 4 3 3 3 3 3 3 4 4 4 4 2 
2 4 2 4 4 4 4 4 4 4 4 4 4 2 4 2 
2 4 4 4 4 4 4 4 4 4 4 4 4 4 4 2 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
`  
            case "Switch": return img`
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
2 4 4 4 4 4 4 4 4 4 4 4 4 4 4 2 
2 4 2 4 4 3 3 3 3 3 3 4 4 2 4 2 
2 4 4 4 3 2 2 2 2 2 2 3 4 4 4 2 
2 4 4 3 2 4 4 4 4 4 4 2 3 4 4 2 
2 4 3 2 4 4 4 4 4 4 4 4 2 3 4 2 
2 4 3 2 4 4 4 4 4 4 4 4 2 3 4 2 
2 4 3 2 4 4 4 4 4 4 4 4 2 3 4 2 
2 4 3 2 4 4 4 4 4 4 4 4 2 3 4 2 
2 4 3 2 4 4 4 4 4 4 4 4 2 3 4 2 
2 4 4 3 2 4 4 4 4 4 4 2 3 4 4 2 
2 4 4 4 3 2 2 2 2 2 2 3 4 4 4 2 
2 4 4 4 4 3 3 3 3 3 3 4 4 4 4 2 
2 4 2 4 4 4 4 4 4 4 4 4 4 2 4 2 
2 4 4 4 4 4 4 4 4 4 4 4 4 4 4 2 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
`  
            case "Spikes": return img`
. . . . . . . . . . . . . . . . 
. . 2 2 . . . . . . . . 2 2 . . 
. 2 3 3 2 . . . . . . 2 3 3 2 . 
. 3 3 3 3 . . . . . . 3 3 3 3 . 
. . 3 3 . . . . . . . . 3 3 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 2 2 . . . . . . . 
. . . . . . 2 3 3 2 . . . . . . 
. . . . . . 3 3 3 3 . . . . . . 
. . . . . . . 3 3 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 2 2 . . . . . . . . 2 2 . . 
. 2 3 3 2 . . . . . . 2 3 3 2 . 
. 3 3 3 3 . . . . . . 3 3 3 3 . 
. . 3 3 . . . . . . . . 3 3 . . 
. . . . . . . . . . . . . . . . 
`  
            case "Spikes": return img`
. . 1 1 . . . . . . . . 1 1 . . 
. 1 4 4 1 . . . . . . 1 4 4 1 . 
. 2 4 4 2 . . . . . . 2 4 4 2 . 
. 3 4 4 3 . . . . . . 3 4 4 3 . 
. . 3 3 . . . . . . . . 3 3 . . 
. . . . . . . 1 1 . . . . . . . 
. . . . . . 1 4 4 1 . . . . . . 
. . . . . . 2 4 4 2 . . . . . . 
. . . . . . 3 4 4 3 . . . . . . 
. . . . . . . 3 3 . . . . . . . 
. . 1 1 . . . . . . . . 1 1 . . 
. 1 4 4 1 . . . . . . 1 4 4 1 . 
. 2 4 4 2 . . . . . . 2 4 4 2 . 
. 3 4 4 3 . . . . . . 3 4 4 3 . 
. . 3 3 . . . . . . . . 3 3 . . 
. . . . . . . . . . . . . . . . 
`  
            case "PressurePlate": return img`
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 1 1 1 1 1 1 1 1 1 1 1 1 1 2 3 
3 1 4 4 4 4 4 4 4 4 4 4 4 4 2 3 
3 1 4 4 4 4 4 4 4 4 4 4 4 4 2 3 
3 1 4 4 4 4 4 4 4 4 4 4 4 4 2 3 
3 1 4 4 4 4 4 4 4 4 4 4 4 4 2 3 
3 1 4 4 4 4 4 4 4 4 4 4 4 4 2 3 
3 1 4 4 4 4 4 4 4 4 4 4 4 4 2 3 
3 1 4 4 4 4 4 4 4 4 4 4 4 4 2 3 
3 1 4 4 4 4 4 4 4 4 4 4 4 4 2 3 
3 1 4 4 4 4 4 4 4 4 4 4 4 4 2 3 
3 1 4 4 4 4 4 4 4 4 4 4 4 4 2 3 
3 1 4 4 4 4 4 4 4 4 4 4 4 4 2 3 
3 1 4 4 4 4 4 4 4 4 4 4 4 4 2 3 
3 2 2 2 2 2 2 2 2 2 2 2 2 2 2 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
`  
            case "PressurePlaate": return img`
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 2 2 2 2 2 2 2 2 2 2 2 2 2 2 3 
3 2 4 4 4 4 4 4 4 4 4 4 4 4 1 3 
3 2 4 4 4 4 4 4 4 4 4 4 4 4 1 3 
3 2 4 4 4 4 4 4 4 4 4 4 4 4 1 3 
3 2 4 4 4 4 4 4 4 4 4 4 4 4 1 3 
3 2 4 4 4 4 4 4 4 4 4 4 4 4 1 3 
3 2 4 4 4 4 4 4 4 4 4 4 4 4 1 3 
3 2 4 4 4 4 4 4 4 4 4 4 4 4 1 3 
3 2 4 4 4 4 4 4 4 4 4 4 4 4 1 3 
3 2 4 4 4 4 4 4 4 4 4 4 4 4 1 3 
3 2 4 4 4 4 4 4 4 4 4 4 4 4 1 3 
3 2 4 4 4 4 4 4 4 4 4 4 4 4 1 3 
3 2 4 4 4 4 4 4 4 4 4 4 4 4 1 3 
3 1 1 1 1 1 1 1 1 1 1 1 1 1 1 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
`  
            case "Boulder": return img`
. . . . . . 3 3 3 3 . . . . . . 
. . . . 3 3 4 4 4 4 3 3 . . . . 
. . . 3 4 4 4 4 4 2 4 2 3 . . . 
. . 3 4 4 1 1 4 4 4 2 2 2 3 . . 
. 3 4 4 1 1 4 4 4 4 4 2 3 3 3 . 
. 3 4 1 4 4 4 4 4 4 2 2 2 2 3 . 
3 4 4 4 4 4 4 4 4 2 4 2 2 3 2 3 
3 4 4 4 4 4 4 4 4 2 4 2 2 2 3 3 
3 4 4 4 4 4 4 4 2 4 2 4 2 3 2 3 
3 4 4 4 4 4 4 2 4 2 4 2 2 2 3 3 
. 3 4 4 4 4 2 4 2 4 2 4 2 3 3 . 
. 3 4 4 4 2 4 2 4 2 4 2 3 2 3 . 
. . 3 4 2 4 2 4 2 2 2 3 2 3 . . 
. . . 3 2 2 4 2 2 2 3 2 3 . . . 
. . . . 3 3 2 2 3 2 3 3 . . . . 
. . . . . . 3 3 3 3 . . . . . . 
`  
            case "Bomb": return img`
. . 3 4 4 1 4 4 4 4 2 2 2 3 . . 
. 3 4 4 1 1 1 1 4 2 4 2 2 2 3 . 
. 3 4 1 1 4 4 4 4 4 2 2 2 2 3 . 
. 3 4 4 1 4 4 4 4 2 4 2 2 2 3 . 
. 3 4 4 4 4 4 4 2 4 2 2 2 2 3 . 
. 3 4 4 4 4 4 2 4 2 2 2 2 2 3 . 
. . 3 4 4 2 4 4 2 2 2 2 2 3 . . 
. . 3 2 4 4 2 2 2 2 2 2 2 3 . . 
. . . 3 3 2 2 2 2 2 2 3 3 . . . 
. 2 2 2 2 3 3 3 3 3 3 2 2 2 2 . 
. . . 2 2 2 2 2 2 2 2 2 2 . . . 
. . . . . 2 2 2 2 2 2 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`  
            case "Door": return img`
2 4 4 4 4 4 4 4 4 4 4 4 4 4 4 2 
2 3 4 2 3 4 2 3 4 2 3 4 2 3 1 2 
2 3 4 2 3 4 2 3 4 2 3 1 2 3 1 2 
2 3 4 2 3 4 2 3 4 2 3 1 2 3 4 2 
2 3 4 2 3 4 2 3 1 2 3 1 2 3 4 2 
2 3 4 2 3 1 2 3 1 2 3 4 2 3 4 2 
2 3 1 2 3 1 2 3 1 2 3 4 2 3 4 2 
2 3 1 2 3 1 2 3 4 2 3 4 2 3 4 2 
2 3 1 2 3 4 2 3 4 2 3 4 2 3 4 2 
2 3 4 2 3 4 2 3 4 2 3 4 2 3 4 2 
2 3 4 2 3 4 2 3 4 2 3 4 2 3 4 2 
2 3 4 2 3 4 2 3 4 2 3 4 2 3 4 2 
2 3 4 2 3 4 2 3 4 2 3 4 2 3 4 2 
2 3 4 2 3 4 2 3 4 2 3 4 2 3 4 2 
2 3 2 2 2 2 2 2 2 2 2 2 2 3 4 2 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
`  
        }
        return null;
    }

    export function createAnimation(name: string): Image[] {
        switch(name) {
            case "tom_down": return [img`
. . 3 3 . . . . . 3 3 . . . 
. . 3 2 3 4 4 4 3 2 3 . . . 
. . 3 4 2 3 3 3 2 4 3 . . . 
. . 3 4 4 4 4 4 4 4 3 . . . 
3 3 2 4 4 4 4 4 4 4 2 3 3 . 
. 3 4 4 5 4 4 4 5 4 4 3 . . 
3 3 4 5 3 5 5 5 3 5 4 3 3 . 
. 3 2 5 3 5 5 5 3 5 2 3 . . 
. . 3 4 5 5 3 5 5 4 3 . . . 
. 3 2 3 2 4 4 4 2 3 2 3 . . 
3 2 4 4 2 5 5 5 2 4 4 2 3 . 
3 4 4 3 4 4 5 4 4 3 4 4 3 . 
3 5 5 3 4 4 4 4 4 3 5 5 3 . 
. 3 3 3 4 4 4 4 4 3 3 3 . . 
. . . 3 4 4 2 4 4 3 . . . . 
. . . 3 2 2 3 2 2 3 . . . . 
. . . 3 5 5 3 5 5 3 . . . . 
. . . . . . . . . . . . . . 
` , img`
. . 3 3 . . . . . 3 3 . . . 
. . 3 2 3 4 4 4 3 2 3 . . . 
. . 3 4 2 3 3 3 2 4 3 . . . 
. . 3 4 4 4 4 4 4 4 3 . . . 
3 3 2 4 4 4 4 4 4 4 2 3 3 . 
. 3 4 4 5 4 4 4 5 4 4 3 . . 
3 3 4 5 3 5 5 5 3 5 4 3 3 . 
. 3 2 5 3 5 5 5 3 5 2 3 . . 
. . 3 4 5 5 3 5 5 4 3 . . . 
. 3 2 3 2 4 4 4 2 3 2 3 . . 
. 3 4 4 2 5 5 5 2 4 4 2 3 . 
. 3 5 3 4 4 5 4 4 3 4 4 3 . 
. . 3 3 4 4 4 4 4 3 5 4 3 . 
. . 3 3 3 3 4 4 4 3 3 3 . . 
. . . 3 2 2 3 4 4 3 . . . . 
. . . 3 5 5 3 3 3 3 . . . . 
. . . . . . 3 3 3 . . . . . 
. . . . . . . . . . . . . . 
` , img`
. . 3 3 . . . . . 3 3 . . . 
. . 3 2 3 4 4 4 3 2 3 . . . 
. . 3 4 2 3 3 3 2 4 3 . . . 
. . 3 4 4 4 4 4 4 4 3 . . . 
3 3 2 4 4 4 4 4 4 4 2 3 3 . 
. 3 4 4 5 4 4 4 5 4 4 3 . . 
3 3 4 5 3 5 5 5 3 5 4 3 3 . 
. 3 2 5 3 5 5 5 3 5 2 3 . . 
. . 3 4 5 5 3 5 5 4 3 . . . 
. 3 2 3 2 4 4 4 2 3 2 3 . . 
3 2 4 4 2 5 5 5 2 4 4 2 3 . 
3 4 4 3 4 4 5 4 4 3 4 4 3 . 
3 5 5 3 4 4 4 4 4 3 5 5 3 . 
. 3 3 3 4 4 4 4 4 3 3 3 . . 
. . . 3 4 4 2 4 4 3 . . . . 
. . . 3 2 2 3 2 2 3 . . . . 
. . . 3 5 5 3 5 5 3 . . . . 
. . . . . . . . . . . . . . 
` , img`
. . 3 3 . . . . . 3 3 . . . 
. . 3 2 3 4 4 4 3 2 3 . . . 
. . 3 4 2 3 3 3 2 4 3 . . . 
. . 3 4 4 4 4 4 4 4 3 . . . 
3 3 2 4 4 4 4 4 4 4 2 3 3 . 
. 3 4 4 5 4 4 4 5 4 4 3 . . 
3 3 4 5 3 5 5 5 3 5 4 3 3 . 
. 3 2 5 3 5 5 5 3 5 2 3 . . 
. . 3 4 5 5 3 5 5 4 3 . . . 
. 3 2 3 2 4 4 4 2 3 2 3 . . 
3 2 4 4 2 5 5 5 2 4 4 3 . . 
3 4 4 3 4 4 5 4 4 3 5 3 . . 
3 4 5 3 4 4 4 4 4 3 3 . . . 
. 3 3 3 4 4 4 3 3 3 3 . . . 
. . . 3 4 4 3 2 2 3 . . . . 
. . . 3 3 3 3 5 5 3 . . . . 
. . . . 3 3 3 . . . . . . . 
. . . . . . . . . . . . . . 
` ];
            case "tom_left": return [img`
. . . . . . . 3 3 3 . . . . 
. . . . . . 3 2 5 3 . . . . 
. . . . 3 3 3 5 5 3 . . . . 
. . . 3 4 4 4 4 4 4 3 . . . 
. . 3 4 4 4 4 4 4 4 3 . . . 
. . 3 4 5 4 4 4 4 4 3 . . . 
. . 3 5 3 5 2 4 4 4 3 . . . 
. . 3 5 3 5 4 4 4 4 3 . . . 
. . 3 5 5 2 2 4 4 4 3 . . . 
. . . 3 2 2 4 4 2 3 . . . . 
. . . 3 4 5 2 2 3 . . . . . 
. . . 3 5 3 4 4 3 . . . . . 
. . . 3 4 3 4 4 3 . . . . . 
. . . 3 4 3 5 4 3 . . . . . 
. . . 3 4 4 3 3 . . . . . . 
. . . 3 3 2 2 3 . . . . . . 
. . . 3 3 5 5 3 . . . . . . 
. . . . . . . . . . . . . . 
` , img`
. . . . . . . 3 3 3 . . . . 
. . . . . . 3 2 5 3 . . . . 
. . . . 3 3 3 5 5 3 . . . . 
. . . 3 4 4 4 4 4 4 3 . . . 
. . 3 4 4 4 4 4 4 4 3 . . . 
. . 3 4 5 4 4 4 4 4 3 . . . 
. . 3 5 3 5 2 4 4 4 3 . . . 
. . 3 5 3 5 4 4 4 4 3 . . . 
. . 3 5 5 2 2 4 4 4 3 . . . 
. . . 3 2 2 4 4 2 3 . . . . 
. . . 3 4 5 2 2 3 3 . . . . 
. . . 3 5 3 3 4 4 3 . . . . 
. . . 3 3 4 4 4 4 3 3 . . . 
. . 3 3 3 5 4 4 3 4 5 3 . . 
. . 3 5 4 3 3 3 4 4 5 3 . . 
. . . 3 5 4 3 3 3 3 3 . . . 
. . . . 3 3 . . . . . . . . 
. . . . . . . . . . . . . . 
` , img`
. . . . . . . 3 3 3 . . . . 
. . . . . . 3 2 5 3 . . . . 
. . . . 3 3 3 5 5 3 . . . . 
. . . 3 4 4 4 4 4 4 3 . . . 
. . 3 4 4 4 4 4 4 4 3 . . . 
. . 3 4 5 4 4 4 4 4 3 . . . 
. . 3 5 3 5 2 4 4 4 3 . . . 
. . 3 5 3 5 4 4 4 4 3 . . . 
. . 3 5 5 2 2 4 4 4 3 . . . 
. . . 3 2 2 4 4 2 3 . . . . 
. . . 3 4 5 2 2 3 . . . . . 
. . . 3 5 3 4 4 3 . . . . . 
. . . 3 4 3 4 4 3 . . . . . 
. . . 3 4 3 5 4 3 . . . . . 
. . . 3 4 4 3 3 . . . . . . 
. . . 3 3 2 2 3 . . . . . . 
. . . 3 3 5 5 3 . . . . . . 
. . . . . . . . . . . . . . 
` , img`
. . . . . . . 3 3 3 . . . . 
. . . . . . 3 2 5 3 . . . . 
. . . . 3 3 3 5 5 3 . . . . 
. . . 3 4 4 4 4 4 4 3 . . . 
. . 3 4 4 4 4 4 4 4 3 . . . 
. . 3 4 5 4 4 4 4 4 3 . . . 
. . 3 5 3 5 2 4 4 4 3 . . . 
. . 3 5 3 5 4 4 4 4 3 . . . 
. . 3 5 5 2 2 4 4 4 3 . . . 
. 3 3 3 2 2 4 4 2 3 . . . . 
. 3 5 3 5 5 4 4 4 4 3 . . . 
. . 3 3 5 4 4 4 2 4 4 3 . . 
. . 3 3 4 4 4 2 3 5 4 3 . . 
. . 3 3 3 4 4 2 3 3 3 . . . 
. . 3 5 4 4 4 4 3 5 3 . . . 
. . . 3 5 2 3 3 3 3 . . . . 
. . . . 3 3 . . . . . . . . 
. . . . . . . . . . . . . . 
` ];
            case "tom_up": return [img`
. . 3 3 . . . . . 3 3 . . . 
. . 3 2 3 4 4 4 3 2 3 . . . 
. . 3 4 2 3 3 3 2 4 3 . . . 
. . 3 4 4 4 4 4 4 4 3 . . . 
3 3 4 4 4 4 4 4 4 4 4 3 3 . 
. 3 4 4 4 4 4 4 4 4 4 3 . . 
3 3 4 4 4 4 4 4 4 4 4 3 3 . 
. 3 4 4 4 4 4 4 4 4 4 3 . . 
. . 3 4 4 4 4 4 4 4 3 . . . 
. 3 2 3 2 2 2 2 2 3 2 3 . . 
3 2 4 4 4 2 2 2 4 4 4 2 3 . 
3 4 4 3 4 4 4 4 4 3 4 4 3 . 
3 5 5 3 4 4 4 4 4 3 5 5 3 . 
. 3 3 3 4 4 4 4 4 3 3 3 . . 
. . . 3 4 4 2 4 4 3 . . . . 
. . . 3 2 2 3 2 2 3 . . . . 
. . . 3 5 5 3 5 5 3 . . . . 
. . . . . . . . . . . . . . 
` , img`
. . 3 3 . . . . . 3 3 . . . 
. . 3 2 3 4 4 4 3 2 3 . . . 
. . 3 4 2 3 3 3 2 4 3 . . . 
. . 3 4 4 4 4 4 4 4 3 . . . 
3 3 4 4 4 4 4 4 4 4 4 3 3 . 
. 3 4 4 4 4 4 4 4 4 4 3 . . 
3 3 4 4 4 4 4 4 4 4 4 3 3 . 
. 3 4 4 4 4 4 4 4 4 4 3 . . 
. . 3 4 4 4 4 4 4 4 3 . . . 
. 3 2 3 2 2 2 2 2 3 2 3 . . 
. 3 4 4 4 2 2 2 4 4 4 2 3 . 
. 3 5 3 4 4 4 4 4 3 4 4 3 . 
. . 3 3 4 4 4 4 4 3 5 4 3 . 
. . 3 3 3 3 4 4 4 3 3 3 . . 
. . . 3 2 2 3 4 4 3 . . . . 
. . . 3 5 5 3 3 3 3 . . . . 
. . . . . . 3 3 3 . . . . . 
. . . . . . . . . . . . . . 
` , img`
. . 3 3 . . . . . 3 3 . . . 
. . 3 2 3 4 4 4 3 2 3 . . . 
. . 3 4 2 3 3 3 2 4 3 . . . 
. . 3 4 4 4 4 4 4 4 3 . . . 
3 3 4 4 4 4 4 4 4 4 4 3 3 . 
. 3 4 4 4 4 4 4 4 4 4 3 . . 
3 3 4 4 4 4 4 4 4 4 4 3 3 . 
. 3 4 4 4 4 4 4 4 4 4 3 . . 
. . 3 4 4 4 4 4 4 4 3 . . . 
. 3 2 3 2 2 2 2 2 3 2 3 . . 
3 2 4 4 4 2 2 2 4 4 4 2 3 . 
3 4 4 3 4 4 4 4 4 3 4 4 3 . 
3 5 5 3 4 4 4 4 4 3 5 5 3 . 
. 3 3 3 4 4 4 4 4 3 3 3 . . 
. . . 3 4 4 2 4 4 3 . . . . 
. . . 3 2 2 3 2 2 3 . . . . 
. . . 3 5 5 3 5 5 3 . . . . 
. . . . . . . . . . . . . . 
` , img`
. . 3 3 . . . . . 3 3 . . . 
. . 3 2 3 4 4 4 3 2 3 . . . 
. . 3 4 2 3 3 3 2 4 3 . . . 
. . 3 4 4 4 4 4 4 4 3 . . . 
3 3 4 4 4 4 4 4 4 4 4 3 3 . 
. 3 4 4 4 4 4 4 4 4 4 3 . . 
3 3 4 4 4 4 4 4 4 4 4 3 3 . 
. 3 4 4 4 4 4 4 4 4 4 3 . . 
. . 3 4 4 4 4 4 4 4 3 . . . 
. 3 2 3 2 2 2 2 2 3 2 3 . . 
3 2 4 4 4 2 2 2 4 4 4 3 . . 
3 4 4 3 4 4 4 4 4 3 5 3 . . 
3 4 5 3 4 4 4 4 4 3 3 . . . 
. 3 3 3 4 4 4 3 3 3 3 . . . 
. . . 3 4 4 3 2 2 3 . . . . 
. . . 3 3 3 3 5 5 3 . . . . 
. . . . 3 3 3 . . . . . . . 
. . . . . . . . . . . . . . 
` ];
        }
        return null;
    }

    export const ATRIUM_NAME = "Atrium";
    export const PLEXUS_NAME = "Plexus";
    export const NEXUS_NAME = "Nexus";
    export const TRANSPARENCY16_TILE = "transparency16";
    export const TILE1_TILE = "tile1";
    export const TILE2_TILE = "tile2";
    export const TILE3_TILE = "tile3";
    export const TILE4_TILE = "tile4";
    export const TILE5_TILE = "tile5";
    export const TILE6_TILE = "tile6";
    export const TILE7_TILE = "tile7";
    export const TILE8_TILE = "tile8";
    export const TILE9_TILE = "tile9";
    export const TILE10_TILE = "tile10";
    export const TILE11_TILE = "tile11";
    export const TILE12_TILE = "tile12";
    export const TILE13_TILE = "tile13";
    export const TILE14_TILE = "tile14";
    export const TILE15_TILE = "tile15";
    export const TILE16_TILE = "tile16";
    export const TILE17_TILE = "tile17";
    export const TILE18_TILE = "tile18";
    export const TILE19_TILE = "tile19";
    export const TILE20_TILE = "tile20";
    export const TILE21_TILE = "tile21";
    export const TILE22_TILE = "tile22";
    export const TILE23_TILE = "tile23";
    export const TILE24_TILE = "tile24";
    export const TILE25_TILE = "tile25";
    export const TILE26_TILE = "tile26";
    export const TILE27_TILE = "tile27";
    export const TILE28_TILE = "tile28";
    export const TILE29_TILE = "tile29";
    export const TILE30_TILE = "tile30";
    export const TILE31_TILE = "tile31";
    export const TILE32_TILE = "tile32";
    export const TILE33_TILE = "tile33";
    export const TILE34_TILE = "tile34";
    export const TILE35_TILE = "tile35";
    export const TILE36_TILE = "tile36";
    export const TILE37_TILE = "tile37";
    export const TILE38_TILE = "tile38";
    export const TILE39_TILE = "tile39";
    export const TILE40_TILE = "tile40";
    export const TILE41_TILE = "tile41";
    export const TILE42_TILE = "tile42";
    export const TILE43_TILE = "tile43";
    export const TILE44_TILE = "tile44";
    export const TILE45_TILE = "tile45";
    export const TILE46_TILE = "tile46";
    export const TILE47_TILE = "tile47";
    export const TILE48_TILE = "tile48";
    export const TILE49_TILE = "tile49";
    export const TILE50_TILE = "tile50";
    export const TILE51_TILE = "tile51";
    export const TILE52_TILE = "tile52";
    export const TILE53_TILE = "tile53";
    export const TILE54_TILE = "tile54";
    export const TILE55_TILE = "tile55";
    export const TILE56_TILE = "tile56";
    export const TILE57_TILE = "tile57";
    export const TILE58_TILE = "tile58";
    export const TILE59_TILE = "tile59";
    export const TILE60_TILE = "tile60";
    export const TILE61_TILE = "tile61";
    export const TILE62_TILE = "tile62";
    export const TILE63_TILE = "tile63";
    export const TILE64_TILE = "tile64";
    export const TILE65_TILE = "tile65";
    export const TILE66_TILE = "tile66";
    export const TILE67_TILE = "tile67";
    export const TILE68_TILE = "tile68";
    export const TILE69_TILE = "tile69";
    export const TOM_DOWN_TILE = "tom_down";
    export const TILE70_TILE = "tile70";
    export const TILE71_TILE = "tile71";
    export const TILE72_TILE = "tile72";
    export const TILE73_TILE = "tile73";
    export const TILE74_TILE = "tile74";
    export const TILE75_TILE = "tile75";
    export const TILE76_TILE = "tile76";
    export const TILE77_TILE = "tile77";
    export const TILE78_TILE = "tile78";
    export const TILE79_TILE = "tile79";
    export const TILE80_TILE = "tile80";
    export const TILE81_TILE = "tile81";
    export const TILE82_TILE = "tile82";
    export const TILE83_TILE = "tile83";
    export const TILE84_TILE = "tile84";
    export const TILE85_TILE = "tile85";
    export const TILE86_TILE = "tile86";
    export const TILE87_TILE = "tile87";
    export const TILE88_TILE = "tile88";
    export const TILE89_TILE = "tile89";
    export const TILE90_TILE = "tile90";
    export const TILE91_TILE = "tile91";
    export const TILE92_TILE = "tile92";
    export const TILE93_TILE = "tile93";
    export const TILE94_TILE = "tile94";
    export const TILE95_TILE = "tile95";
    export const TILE96_TILE = "tile96";
    export const TILE97_TILE = "tile97";
    export const TILE98_TILE = "tile98";
    export const TILE99_TILE = "tile99";
    export const TILE100_TILE = "tile100";
    export const TILE101_TILE = "tile101";
    export const TILE102_TILE = "tile102";
    export const TILE103_TILE = "tile103";
    export const TILE104_TILE = "tile104";
    export const TILE105_TILE = "tile105";
    export const TILE106_TILE = "tile106";
    export const TILE107_TILE = "tile107";
    export const TILE108_TILE = "tile108";
    export const TILE109_TILE = "tile109";
    export const TILE110_TILE = "tile110";
    export const TILE111_TILE = "tile111";
    export const TILE112_TILE = "tile112";
    export const TILE113_TILE = "tile113";
    export const TILE114_TILE = "tile114";
    export const TILE115_TILE = "tile115";
    export const TILE116_TILE = "tile116";
    export const TILE117_TILE = "tile117";
    export const TILE118_TILE = "tile118";
    export const TILE119_TILE = "tile119";
    export const TILE120_TILE = "tile120";
    export const TILE121_TILE = "tile121";
    export const TILE122_TILE = "tile122";
    export const TILE123_TILE = "tile123";
    export const TILE124_TILE = "tile124";
    export const TILE125_TILE = "tile125";
    export const TILE126_TILE = "tile126";
    export const TILE127_TILE = "tile127";
    export const TILE128_TILE = "tile128";
    export const TILE129_TILE = "tile129";
    export const TILE130_TILE = "tile130";
    export const CRATE_TILE = "Crate";
    export const TILE131_TILE = "tile131";
    export const TILE132_TILE = "tile132";
    export const DARTSHOOTER_TILE = "DartShooter";
    export const TILE133_TILE = "tile133";
    export const TILE134_TILE = "tile134";
    export const TILE135_TILE = "tile135";
    export const TILE136_TILE = "tile136";
    export const TILE137_TILE = "tile137";
    export const TILE138_TILE = "tile138";
    export const TILE139_TILE = "tile139";
    export const TILE140_TILE = "tile140";
    export const TILE141_TILE = "tile141";
    export const TILE142_TILE = "tile142";
    export const TILE143_TILE = "tile143";
    export const TILE144_TILE = "tile144";
    export const TILE145_TILE = "tile145";
    export const TILE146_TILE = "tile146";
    export const TILE147_TILE = "tile147";
    export const PIT_TILE = "Pit";
    export const TILE148_TILE = "tile148";
    export const TILE149_TILE = "tile149";
    export const DARTSHOOTER_TILE = "DartShooter";
    export const TILE150_TILE = "tile150";
    export const TILE151_TILE = "tile151";
    export const TILE152_TILE = "tile152";
    export const TILE153_TILE = "tile153";
    export const TILE154_TILE = "tile154";
    export const TILE155_TILE = "tile155";
    export const TILE156_TILE = "tile156";
    export const TILE157_TILE = "tile157";
    export const TILE158_TILE = "tile158";
    export const TILE159_TILE = "tile159";
    export const TILE160_TILE = "tile160";
    export const TILE161_TILE = "tile161";
    export const TILE162_TILE = "tile162";
    export const TILE163_TILE = "tile163";
    export const SWITCH_TILE = "Switch";
    export const TILE164_TILE = "tile164";
    export const TILE165_TILE = "tile165";
    export const TILE166_TILE = "tile166";
    export const TILE167_TILE = "tile167";
    export const TILE168_TILE = "tile168";
    export const TILE169_TILE = "tile169";
    export const TILE170_TILE = "tile170";
    export const TILE171_TILE = "tile171";
    export const TILE172_TILE = "tile172";
    export const TILE173_TILE = "tile173";
    export const TILE174_TILE = "tile174";
    export const TILE175_TILE = "tile175";
    export const TILE176_TILE = "tile176";
    export const TILE177_TILE = "tile177";
    export const SPIKES_TILE = "Spikes";
    export const SPIKES_TILE = "Spikes";
    export const TILE178_TILE = "tile178";
    export const TILE179_TILE = "tile179";
    export const TILE180_TILE = "tile180";
    export const TILE181_TILE = "tile181";
    export const PRESSUREPLATE_TILE = "PressurePlate";
    export const TILE182_TILE = "tile182";
    export const TILE183_TILE = "tile183";
    export const TILE184_TILE = "tile184";
    export const TILE185_TILE = "tile185";
    export const TILE186_TILE = "tile186";
    export const TILE187_TILE = "tile187";
    export const TILE188_TILE = "tile188";
    export const TILE189_TILE = "tile189";
    export const TILE190_TILE = "tile190";
    export const TILE191_TILE = "tile191";
    export const TILE192_TILE = "tile192";
    export const TILE193_TILE = "tile193";
    export const TILE194_TILE = "tile194";
    export const TILE195_TILE = "tile195";
    export const TILE196_TILE = "tile196";
    export const TILE197_TILE = "tile197";
    export const TILE198_TILE = "tile198";
    export const TILE199_TILE = "tile199";
    export const TILE200_TILE = "tile200";
    export const TILE201_TILE = "tile201";
    export const TILE202_TILE = "tile202";
    export const TILE203_TILE = "tile203";
    export const BOMB_TILE = "Bomb";
    export const TILE204_TILE = "tile204";
    export const TILE205_TILE = "tile205";
    export const TILE206_TILE = "tile206";
    export const TILE207_TILE = "tile207";
    export const TILE208_TILE = "tile208";
    export const TILE209_TILE = "tile209";
    export const TILE210_TILE = "tile210";
    export const TILE211_TILE = "tile211";
    export const TILE212_TILE = "tile212";
    export const TILE213_TILE = "tile213";
    export const TILE214_TILE = "tile214";
    export const TILE215_TILE = "tile215";
    export const TILE216_TILE = "tile216";
    export const TILE217_TILE = "tile217";
    export const TILE218_TILE = "tile218";
    export const TILE219_TILE = "tile219";
    export const TILE220_TILE = "tile220";
    export const TILE221_TILE = "tile221";
    export const TILE222_TILE = "tile222";
    export const TILE223_TILE = "tile223";
    export const TILE224_TILE = "tile224";
    export const DOOR_TILE = "Door";

    export const transparency16 = image.ofBuffer(hex`87040800080000000000000000000000000000000000000000000000000000000000000000000000`);
    export const tile1 = image.ofBuffer(hex`87040800080000004224223222224432423422324332223323323333333322334332423242244432`);
    export const tile2 = image.ofBuffer(hex`87040800080000000000000000000030000000300000003000000030000000300000003000000030`);
    export const tile3 = image.ofBuffer(hex`87040800080000000000003000000030000000300000003000000030000000300000003000000030`);
    export const tile4 = image.ofBuffer(hex`87040800080000000000003000000030000000300000003000000030000000300000003000000030`);
    export const tile5 = image.ofBuffer(hex`87040800080000000000003000000030000000300000003000000030000000300000003000000000`);
    export const tile6 = image.ofBuffer(hex`87040800080000002222222222222222222222222222222222222222222222222222222222222212`);
    export const tile7 = image.ofBuffer(hex`87040800080000002222221222222232222222322222222222222222222222222222222222222222`);
    export const tile8 = image.ofBuffer(hex`87040800080000001111111111111111111111111111111111111111111141111111114411114144`);
    export const tile9 = image.ofBuffer(hex`87040800080000001111114411111144111141411111111111111111111111111111111111111111`);
    export const tile10 = image.ofBuffer(hex`87040800080000002222222242424242424442444242424242444244424442444244424442444244`);
    export const tile11 = image.ofBuffer(hex`87040800080000004244424442444244424442444244424442424242424442444242424222222222`);
    export const tile12 = image.ofBuffer(hex`87040800080000001144233211443333333333333333333333333333333333333333333333333333`);
    export const tile13 = image.ofBuffer(hex`87040800080000003333333333333333333333333333333333333333333333331144233211442332`);
    export const tile14 = image.ofBuffer(hex`87040800080000000000000000000000000000000000000000000000000000000000000000000000`);
    export const tile15 = image.ofBuffer(hex`87040800080000000000003000000043000030240000303200002132000021330000213300002133`);
    export const tile16 = image.ofBuffer(hex`87040800080000000000212300002133000021330000213200001032000040220000002100000010`);
    export const tile17 = image.ofBuffer(hex`87040800080000000000000000000000000000000000000000000000000000000000000000000000`);
    export const tile18 = image.ofBuffer(hex`87040800080000000000000000000000000000000000000033030000110300001403000044030000`);
    export const tile19 = image.ofBuffer(hex`87040800080000004403000044030000330300000300000003000000030000000300000003000000`);
    export const tile20 = image.ofBuffer(hex`87040800080000000300000003000000030000000300000003000000330300001103000014030000`);
    export const tile21 = image.ofBuffer(hex`87040800080000004403000044030000440300003303000000000000000000000000000000000000`);
    export const tile22 = image.ofBuffer(hex`87040800080000003333333313111111134444441344444413444444134444441344444413444444`);
    export const tile23 = image.ofBuffer(hex`87040800080000001344444413444444134444441344444413444444134444441322222233333333`);
    export const tile24 = image.ofBuffer(hex`87040800080000000000000000000000000040000000400000004040000044440000444400004044`);
    export const tile25 = image.ofBuffer(hex`87040800080000000000444400004444000004440000044000000000000000000000000000000000`);
    export const tile26 = image.ofBuffer(hex`87040800080000003333333311114444212222222144444421444444214444442144444424444444`);
    export const tile27 = image.ofBuffer(hex`87040800080000002444444424444444244444442444444424444444244444442144444421444444`);
    export const tile28 = image.ofBuffer(hex`87040800080000002144444421444444214444442144444421444444214444442144444421444444`);
    export const tile29 = image.ofBuffer(hex`87040800080000002144444421444444214444442144444421444444212222221122222233333333`);
    export const tile30 = image.ofBuffer(hex`87040800080000001111111111111111111111111111111111111111141411111114111144111111`);
    export const tile31 = image.ofBuffer(hex`87040800080000004414111144111111411411111111111111111111111111111111111111111111`);
    export const tile32 = image.ofBuffer(hex`87040800080000002222222242424242424442444242424242444244424442444244424442444244`);
    export const tile33 = image.ofBuffer(hex`87040800080000004244424442444244424442444244424442424242424442444242424222222222`);
    export const tile34 = image.ofBuffer(hex`87040800080000000000000000000000000000000000000000000000003033333043242243243333`);
    export const tile35 = image.ofBuffer(hex`87040800080000002433434432232222333333333333333342444444222222223333333333333333`);
    export const tile36 = image.ofBuffer(hex`87040800080000004244444422222222333333333333333323424444332222223233333322333333`);
    export const tile37 = image.ofBuffer(hex`87040800080000002122334410242222001041410000000000000000000000000000000000000000`);
    export const tile38 = image.ofBuffer(hex`87040800080000003333333311111111444444444444444444444444444444444444444444444444`);
    export const tile39 = image.ofBuffer(hex`87040800080000004444444444444444444444444444444444444444444444442222222233333333`);
    export const tile40 = image.ofBuffer(hex`87040800080000000000000000000000000004000404000044440400444400004444000044040000`);
    export const tile41 = image.ofBuffer(hex`87040800080000004444000044440400444400000004040000040000400000000000000000000000`);
    export const tile42 = image.ofBuffer(hex`87040800080000004224222322223434422443241234343342344422224333331243242212433333`);
    export const tile43 = image.ofBuffer(hex`87040800080000004223224222233333123422244234323342244322222234321224443312244432`);
    export const tile44 = image.ofBuffer(hex`87040800080000003333000014113333221222232412222324422423244224232442242324422423`);
    export const tile45 = image.ofBuffer(hex`87040800080000002442242324422423244224232442242324422423244224232442242324422423`);
    export const tile46 = image.ofBuffer(hex`87040800080000001111131131333333313123333123222231232222122322221223222231232222`);
    export const tile47 = image.ofBuffer(hex`87040800080000002442242324422423244224232442242324422423244224232442242324422423`);
    export const tile48 = image.ofBuffer(hex`87040800080000003123222231232222312222223123222212232222122322221223222231232222`);
    export const tile49 = image.ofBuffer(hex`87040800080000002442242324422423244224232432242324322433223222222232333333330000`);
    export const tile50 = image.ofBuffer(hex`87040800080000003123222231232222312322221223222212232222122222223123222231232222`);
    export const tile51 = image.ofBuffer(hex`87040800080000003123222231222222122322221223222212232222312312223123222211111112`);
    export const tile52 = image.ofBuffer(hex`87040800080000004444444444144144141111414411111114141111441111114411111144111111`);
    export const tile53 = image.ofBuffer(hex`87040800080000001414111114141111441411114411111114111111141411114411111144141111`);
    export const tile54 = image.ofBuffer(hex`87040800080000001414111114141111141411114411111144141111141411111411111144141111`);
    export const tile55 = image.ofBuffer(hex`87040800080000001411111144111111441111114411111114111111144411141441144444444444`);
    export const tile56 = image.ofBuffer(hex`87040800080000002222222242424242424442444242424242444244424442444244424442444244`);
    export const tile57 = image.ofBuffer(hex`87040800080000001111121111111211114423322322233211442332114433331144233223222332`);
    export const tile58 = image.ofBuffer(hex`87040800080000004244424442444244424442444244424442424242424442444242424222222222`);
    export const tile59 = image.ofBuffer(hex`87040800080000001144233211443333114423322322233211442332114433331144233223222332`);
    export const tile60 = image.ofBuffer(hex`87040800080000001144233211443333114423322322233211442332114433331144233223222332`);
    export const tile61 = image.ofBuffer(hex`87040800080000001144233211443333114423322322233211442332114433331114112111141121`);
    export const tile62 = image.ofBuffer(hex`87040800080000000000000000000000000000000000000000000000333333332222223333332433`);
    export const tile63 = image.ofBuffer(hex`87040800080000004434243322323232333324333333243344342433223232323333223333332433`);
    export const tile64 = image.ofBuffer(hex`87040800080000004434243322323232333324333333243344342433223232323333243333332433`);
    export const tile65 = image.ofBuffer(hex`87040800080000004444243322222233444444330000000000000000000000000000000000000000`);
    export const tile66 = image.ofBuffer(hex`87040800080000003333333311111111444444444444444444444444444444444444444444444444`);
    export const tile67 = image.ofBuffer(hex`87040800080000004444444444444444444444444444444444444444444444442222222233333333`);
    export const tile68 = image.ofBuffer(hex`870408001000000000000000000000000000000000000000000000443400000000004014313300000000141131333303000040443133000000000040340000000000000000000000`);
    export const tile69 = image.ofBuffer(hex`87040800080000000000000000000000000000000000000000000000000000000000000000000000`);
    export const tom_down = image.ofBuffer(hex`87040e0012000000000003030033030000000033333042350000333342242344350000234444553434333303304254332542442405404344554545442405404344554355443203404344554545442405304254332542442405234444553434333303333342242344350000000033333042350000000003030033030000000000000000000000`);
    export const tile70 = image.ofBuffer(hex`87040800080000000000000000000030000000130000304100003041000030410000304100003041`);
    export const tile71 = image.ofBuffer(hex`87040800080000000000304100003041000030410000304100003041000000430000003000000000`);
    export const tile72 = image.ofBuffer(hex`87040800080000000000000000000000000000000000000000000000000000000000000000000000`);
    export const tile73 = image.ofBuffer(hex`87040800080000000000003333333332222222323333233322222233444424333433243324342433`);
    export const tile74 = image.ofBuffer(hex`87040800080000002434243324342433243424332434243324342433243424332434243324342433`);
    export const tile75 = image.ofBuffer(hex`87040800080000003111111333333333333231331222222222222222222222222222222222222222`);
    export const tile76 = image.ofBuffer(hex`87040800080000002434243324342433243424332434243324342433243424332434243324342433`);
    export const tile77 = image.ofBuffer(hex`87040800080000002222222222222222222222222222222222222222222222222222222222222222`);
    export const tile78 = image.ofBuffer(hex`87040800080000002432243344442433444424332222223333332332222222323333333200000033`);
    export const tile79 = image.ofBuffer(hex`87040800080000002222222222222222222222222222222222222222222222222222222222222222`);
    export const tile80 = image.ofBuffer(hex`87040800080000002222222222222222222222222222222222222222222222212221222211121112`);
    export const tile81 = image.ofBuffer(hex`87040800080000004444444414114444144144411111111111111111111111111111111111111111`);
    export const tile82 = image.ofBuffer(hex`87040800080000001111111111111111111111111111111111111111111111111111111111111111`);
    export const tile83 = image.ofBuffer(hex`87040800080000001111111111111111111111111111111111111111111111111111111111111111`);
    export const tile84 = image.ofBuffer(hex`87040800080000001111111111111111111111111111111111111111441141441111144144144444`);
    export const tile85 = image.ofBuffer(hex`87040800080000002222222242424242424442444242424242444244424442444244424442444244`);
    export const tile86 = image.ofBuffer(hex`87040800080000001211121112111211333333333333333333333333333333333333333333333333`);
    export const tile87 = image.ofBuffer(hex`87040800080000004244424442444244424442444244424442424242424442444242424222222222`);
    export const tile88 = image.ofBuffer(hex`87040800080000003333333333333333333333333333333333333333333333333333333333333333`);
    export const tile89 = image.ofBuffer(hex`87040800080000003333333333333333333333333333333333333333333333333333333333333333`);
    export const tile90 = image.ofBuffer(hex`87040800080000003333333333333333333333333333333333333333333333331121112111211121`);
    export const tile91 = image.ofBuffer(hex`87040800080000003333333333333333333333333333333333333333333333333333333333333333`);
    export const tile92 = image.ofBuffer(hex`87040800080000003333333311212232242144322421243224214432242144322421243224214432`);
    export const tile93 = image.ofBuffer(hex`87040800080000002421443224212432242144322421443224212432242144322221223233333333`);
    export const tile94 = image.ofBuffer(hex`87040800080000000000000000000000000000000000000000000000003033330013111130111414`);
    export const tile95 = image.ofBuffer(hex`87040800080000001344444441442422443333333444224334333343432222133333333323223211`);
    export const tile96 = image.ofBuffer(hex`87040800080000003333333123223211333333332422421334333313444244434434333343141111`);
    export const tile97 = image.ofBuffer(hex`87040800080000003044141400434444003033330000000000000000000000000000000000000000`);
    export const tile98 = image.ofBuffer(hex`87040800080000001131111133333313332333132222221222222221222222222222221222222212`);
    export const tile99 = image.ofBuffer(hex`87040800080000002222221222222212222222222222121222222222222222122222221122222212`);
    export const tile100 = image.ofBuffer(hex`87040800080000002222221222221212222222122222221222222212222222212222221222222212`);
    export const tile101 = image.ofBuffer(hex`87040800080000002222221222222212222222122222222222221212222222122222221211211111`);
    export const tile102 = image.ofBuffer(hex`87040800080000001111414411114144111111441111114111111144111141411111414111114144`);
    export const tile103 = image.ofBuffer(hex`87040800080000001111414411111141111111441111414411114141111111411111414411114144`);
    export const tile104 = image.ofBuffer(hex`87040800080000002222222242424242424442444242424242444244424442444244424442444244`);
    export const tile105 = image.ofBuffer(hex`87040800080000001211121112111211333333333333333333333333333333333333333333333333`);
    export const tile106 = image.ofBuffer(hex`87040800080000004244424442444244424442444244424442424242424442444242424222222222`);
    export const tile107 = image.ofBuffer(hex`87040800080000003333333333333333333333333333333333333333333333333333333333333333`);
    export const tile108 = image.ofBuffer(hex`87040800080000003333333333333333333333333333333333333333333333333333333333333333`);
    export const tile109 = image.ofBuffer(hex`87040800080000003333333333333333333333333333333333333333333333331121112111211121`);
    export const tile110 = image.ofBuffer(hex`87040800080000003333000044343333442422224444444444444444441444444444414144141111`);
    export const tile111 = image.ofBuffer(hex`87040800080000004414111144141111441411114414111144141111442422224434333333030000`);
    export const tile112 = image.ofBuffer(hex`87040800080000000000000000000000000000003333333311111111424444214244442122244421`);
    export const tile113 = image.ofBuffer(hex`87040800080000002222422122244421424444214244442122222222000000000000000000000000`);
    export const tile114 = image.ofBuffer(hex`87040800080000000000000000000000000000000000003000003333003033320030434300304322`);
    export const tile115 = image.ofBuffer(hex`87040800080000000030414300301142000033130000003000000000000000000000000000000000`);
    export const tile116 = image.ofBuffer(hex`87040800080000000000000000000000000000000000000000000000000010110000212200104244`);
    export const tile117 = image.ofBuffer(hex`87040800080000000010424400002122000010110000000000000000000000000000000000000000`);
    export const tile118 = image.ofBuffer(hex`87040800080000000000000000000000000000000000003000000043000030420000304400003024`);
    export const tile119 = image.ofBuffer(hex`87040800080000000000302400003024000030240000302400003042000000330000000000000000`);
    export const tile120 = image.ofBuffer(hex`87040800080000000000000000000000000000000000000000003333333313111111131414141344`);
    export const tile121 = image.ofBuffer(hex`87040800080000000000000000000000000000000030000000230330302232233032232330344323`);
    export const tile122 = image.ofBuffer(hex`87040800080000004444134444221344333333332432442244323333243224224332333333332322`);
    export const tile123 = image.ofBuffer(hex`87040800080000003034432330344343304434430043033000300000000000000000000000000000`);
    export const tile124 = image.ofBuffer(hex`87040800080000001111111141444444414444444144444441444444414444444144444441444444`);
    export const tile125 = image.ofBuffer(hex`87040800080000004114333333332322433233332432224244323333243233333333131111111314`);
    export const tile126 = image.ofBuffer(hex`87040800080000004144444441444444414444444144444441444444414444444144444421222222`);
    export const tile127 = image.ofBuffer(hex`87040800080000001414134444441344333313440000333300000000000000000000000000000000`);
    export const tile128 = image.ofBuffer(hex`87040800080000000000000000000000000000000000203300000032000000300000003000000030`);
    export const tile129 = image.ofBuffer(hex`87040800080000000000003200003233002033330020330000000200000000000000000000000000`);
    export const tile130 = image.ofBuffer(hex`87040800080000000000000000000000000000000000002000000032000020330000322300003212`);
    export const Crate = image.ofBuffer(hex`87041000100000003333333333223233134444442344443413444444334443332322222223444434134444443322323313444444432442342322222243244234134444444324423413444444432442342322222243244234134444444324423413444444332232332322222223444434134444443344433313444444234444343333333333223233`);
    export const tile131 = image.ofBuffer(hex`87040800080000000000321200003223000024330000403200000024000000000000000000000000`);
    export const tile132 = image.ofBuffer(hex`87040800080000004411111114111111141411114414111114111111141111111414111144141111`);
    export const DartShooter = image.ofBuffer(hex`87041000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000031010000000000103313000000000000310100000000000031010000000000003101000000`);
    export const tile133 = image.ofBuffer(hex`87040800080000001411111144141111441111111414111114111111441111114414111114141111`);
    export const tile134 = image.ofBuffer(hex`87040800080000002222222242424242424442444242424242444244424442444244424442444244`);
    export const tile135 = image.ofBuffer(hex`87040800080000001144233211443333114413343333133411444334114422221144122423221224`);
    export const tile136 = image.ofBuffer(hex`87040800080000004244424442444244424442444244424442424242424442444242424222222222`);
    export const tile137 = image.ofBuffer(hex`87040800080000001144422411442222114412242322122411444224114422221144122423221224`);
    export const tile138 = image.ofBuffer(hex`87040800080000001144422411442222114412242322122411444224114422221144122423221224`);
    export const tile139 = image.ofBuffer(hex`87040800080000001144422411442222114443323333433211442332114433331144433211442332`);
    export const tile140 = image.ofBuffer(hex`87040800080000003334222233341211333412413334124133341244333412443334124433341224`);
    export const tile141 = image.ofBuffer(hex`87040800080000003334222233341211333412413334124133341241333412413334124433341244`);
    export const tile142 = image.ofBuffer(hex`87040800080000000000000033333333222222224444444444444444444444444141414111111111`);
    export const tile143 = image.ofBuffer(hex`87040800080000001111111111111111111111111111111111111111222222223333333300000000`);
    export const tile144 = image.ofBuffer(hex`87040800080000000000000000000000000000003333333311111111444421444444214424442144`);
    export const tile145 = image.ofBuffer(hex`87040800080000002442212424442124444421444444214422222222000000000000000000000000`);
    export const tile146 = image.ofBuffer(hex`87040800080000000000000000000000003033333333343433444343334342423443434313213333`);
    export const tile147 = image.ofBuffer(hex`87040800080000002442434344434242314442423323212100303333000000000000000000000000`);
    export const Pit = image.ofBuffer(hex`87041000100000000000303233030000000023323333000000302233333303000023323333333300002332333333330030223333333333033022333333333303302233333333330330223333333333033022333333333303302233333333330300233233333333000023323333333300003022333333030000002332333300000000303333030000`);
    export const tile148 = image.ofBuffer(hex`87040800080000000000000000000000000000000000000000111111112222222244214444442124`);
    export const tile149 = image.ofBuffer(hex`87040800080000004444214422442144112222220011111100000000000000000000000000000000`);
    export const DartShooter = image.ofBuffer(hex`87041000100000000000003101000000000000310100000000000031010000000000103313000000000000310100000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`);
    export const tile150 = image.ofBuffer(hex`87040800080000000000000000000000000000003303000022320000443303004424030033440300`);
    export const tile151 = image.ofBuffer(hex`87040800080000003324000042340300332400003344030044240300333300000000000000000000`);
    export const tile152 = image.ofBuffer(hex`87040800080000000000000000000000000000000000000033030000110300001403000044030000`);
    export const tile153 = image.ofBuffer(hex`87040800080000000000000000000000000000003333030022223200424222032424240344444403`);
    export const tile154 = image.ofBuffer(hex`87040800080000004403000044030000330300000300000003000000030000000300000003000000`);
    export const tile155 = image.ofBuffer(hex`87040800080000004444440344444403444444034444340033330300000000000000000000000000`);
    export const tile156 = image.ofBuffer(hex`87040800080000001111111144444424444444244444442444444424444444244444442444444424`);
    export const tile157 = image.ofBuffer(hex`87040800080000000300000003000000030000000300000003000000330300001103000014030000`);
    export const tile158 = image.ofBuffer(hex`87040800080000004444442444444424444444244444442444444424444444244444442422222222`);
    export const tile159 = image.ofBuffer(hex`87040800080000004403000044030000440300003303000000000000000000000000000000000000`);
    export const tile160 = image.ofBuffer(hex`87040800080000000000000000000000000000000000000003000000330000003333030033030000`);
    export const tile161 = image.ofBuffer(hex`87040800080000003333030033000000000000000000000000000000000000000000000000000000`);
    export const tile162 = image.ofBuffer(hex`87040800080000000000000000000000000000000000000003000000330000003303000032030000`);
    export const tile163 = image.ofBuffer(hex`87040800080000003203000033030000330000000300000000000000000000000000000000000000`);
    export const Switch = image.ofBuffer(hex`87041000100000002022222222222202424444444444442442423433334424244244131121434424423441441432442442134443442143244213444443214324421334344321432442134434432143244213344443214324421344434421432442344144143244244244131121434424424234333344242442444444444444242022222222222202`);
    export const tile164 = image.ofBuffer(hex`87040800080000001111111111111111111111111111141111114111111114111111111111111111`);
    export const tile165 = image.ofBuffer(hex`87040800080000001111111111111111111111111114111111411111111411111111111111111111`);
    export const tile166 = image.ofBuffer(hex`87040800080000001111111111141111114111111114111111114111111111141111411111111111`);
    export const tile167 = image.ofBuffer(hex`87040800080000001111111111111111111111111111111111111111141144414414414444444444`);
    export const tile168 = image.ofBuffer(hex`87040800080000002423322224333324221334443313242241432441412222414412244422122422`);
    export const tile169 = image.ofBuffer(hex`87040800080000004142244441222241441224442212242241422441412222414412244422122422`);
    export const tile170 = image.ofBuffer(hex`87040800080000004142244141222241441224442212242241422441412222444412244422122422`);
    export const tile171 = image.ofBuffer(hex`87040800080000004142244141222241444332443343323324233224243333242243322233233233`);
    export const tile172 = image.ofBuffer(hex`87040800080000002212444444124424441244222413242224332222241311442212412422124424`);
    export const tile173 = image.ofBuffer(hex`87040800080000002212442444124424244244222443242224332222241311442212412422134422`);
    export const tile174 = image.ofBuffer(hex`87040800080000000000333333332022222244224444442244444422444444224111442211114422`);
    export const tile175 = image.ofBuffer(hex`87040800080000001111412211114122111141221111412211114122222244223333202200003333`);
    export const tile176 = image.ofBuffer(hex`87040800080000000000000000000000000000003333330311111111442144444421444242212422`);
    export const tile177 = image.ofBuffer(hex`87040800080000002221242244212422442144424421444422222222000000000000000000000000`);
    export const Spikes = image.ofBuffer(hex`87041000100000000000000000000000003200000000320020330300002033032033030000203303003200000000320000000000000000000000002003000000000000323300000000000032330000000000002003000000000000000000000000320000000032002033030000203303203303000020330300320000000032000000000000000000`);
    export const Spikes = image.ofBuffer(hex`87041000100000000000000000000000103200000010320041440300004144034144030000414403103200000010320000000000000000000000002103000000000010443400000000001044340000000000002103000000000000000000000010320000001032004144030000414403414403000041440310320000001032000000000000000000`);
    export const tile178 = image.ofBuffer(hex`87040800080000000000000000000000333300003434333343433333424234334343342233333322`);
    export const tile179 = image.ofBuffer(hex`87040800080000004343342242423422424223242111333333330000000000000000000000000000`);
    export const tile180 = image.ofBuffer(hex`87040800080000000000000000000000000000000011111111222222221442444414422424144212`);
    export const tile181 = image.ofBuffer(hex`87040800080000002114421244144224221442441122222200111111000000000000000000000000`);
    export const PressurePlate = image.ofBuffer(hex`87041000100000003333333333333333131111111111113213444444444444321344444444444432134444444444443213444444444444321344444444444432134444444444443213444444444444321344444444444432134444444444443213444444444444321344444444444432134444444444443223222222222222323333333333333333`);
    export const tile182 = image.ofBuffer(hex`87040800080000000000000000000000000000000000000000000000000000000000000000000000`);
    export const tile183 = image.ofBuffer(hex`87040800080000000000000000000030000000130000304100003041000030410000304100003041`);
    export const tile184 = image.ofBuffer(hex`87040800080000000000304100003041000030410000304100003041000000430000003000000000`);
    export const tile185 = image.ofBuffer(hex`87040800080000000000000000000000000000000000000000000000000000000000000000000000`);
    export const tile186 = image.ofBuffer(hex`87040800080000000000000000000000000000000000000000000000000000200000322000200033`);
    export const tile187 = image.ofBuffer(hex`87040800080000000020003300003220000000200000000000000000000000000000000000000000`);
    export const tile188 = image.ofBuffer(hex`87040800080000000000000000000000000000000000000000000000000000000000202200232333`);
    export const tile189 = image.ofBuffer(hex`87040800080000000023333300200002000020000000220000000200000000000000000000000000`);
    export const tile190 = image.ofBuffer(hex`87040800080000001111111111111111111111111111411141111114111441114111111111111111`);
    export const tile191 = image.ofBuffer(hex`87040800080000001111111111114111111111141114411111411111111411111111111111111111`);
    export const tile192 = image.ofBuffer(hex`87040800080000001111111111111111114111111111141111411111111111111111111111111111`);
    export const tile193 = image.ofBuffer(hex`87040800080000004441444444114144144411411111111111111111111111111111111111111111`);
    export const tile194 = image.ofBuffer(hex`87040800080000002332333333332233433422334334223342343333223222331224443312244432`);
    export const tile195 = image.ofBuffer(hex`87040800080000004224223222224432422444321224443242242232222244321224443212244432`);
    export const tile196 = image.ofBuffer(hex`87040800080000004224223222224432122444324224443242242232222244321224443212244432`);
    export const tile197 = image.ofBuffer(hex`87040800080000004224223222224433432444334334223343343333333322334332223323322233`);
    export const tile198 = image.ofBuffer(hex`87040800080000003333333343442432434422334324223343242233432222334322323343223333`);
    export const tile199 = image.ofBuffer(hex`87040800080000003333333343444432434422324324223343242233432422334322323343223333`);
    export const tile200 = image.ofBuffer(hex`87040800080000003300000032000000320000003200000032000000320000003200000032000000`);
    export const tile201 = image.ofBuffer(hex`87040800080000003200000032000000320000003200000032000000320000003200000033000000`);
    export const tile202 = image.ofBuffer(hex`87040800080000000000000000000000000000000300000031000000340000003400000034000000`);
    export const tile203 = image.ofBuffer(hex`87040800080000003400000034000000340000003400000002000000000000000000000000000000`);
    export const Bomb = image.ofBuffer(hex`87041000100000000000000000000000303333002000000043444433200000004441442423020000141144442302000011444442322200001444442432220000144424243222000044444222322200002424242232220000424222223222000022222222230200002222222223020000232222332000000030333300200000000000000000000000`);
    export const tile204 = image.ofBuffer(hex`87040800080000000000000000000000000000000300000033000000330000003300000032000000`);
    export const tile205 = image.ofBuffer(hex`87040800080000003200000034000000340000000300000000000000000000000000000000000000`);
    export const tile206 = image.ofBuffer(hex`87040800080000000010111100212222102244441142444422222222442144444421242442214442`);
    export const tile207 = image.ofBuffer(hex`87040800080000004221242144212444442144442222222211424444102244440021222200101111`);
    export const tile208 = image.ofBuffer(hex`87040800080000000000000000000000000000000000000000000000003033330013111130111414`);
    export const tile209 = image.ofBuffer(hex`87040800080000001344444441442422443333333444222234333333432222223333333323222242`);
    export const tile210 = image.ofBuffer(hex`87040800080000003333333323222244333333332422424434333333444244244434333343141111`);
    export const tile211 = image.ofBuffer(hex`87040800080000003044141400434444003033330000000000000000000000000000000000000000`);
    export const tile212 = image.ofBuffer(hex`87040800080000000000000000000000000000000000000000000000030000000300000033330300`);
    export const tile213 = image.ofBuffer(hex`87040800080000003333030003000000030000000000000000000000000000000000000000000000`);
    export const tile214 = image.ofBuffer(hex`87040800080000000000000000000000000000003000000030000000020000020230230333230000`);
    export const tile215 = image.ofBuffer(hex`87040800080000003323000000003200000020030000000000000000000000000000000000000000`);
    export const tile216 = image.ofBuffer(hex`87040800080000004142244141422441443224442232232241122441411224444412244422422422`);
    export const tile217 = image.ofBuffer(hex`87040800080000004142244141222241442222442222222241222241412222444412244422122422`);
    export const tile218 = image.ofBuffer(hex`87040800080000004142344141423241442443443234333241232341414243444412244422122422`);
    export const tile219 = image.ofBuffer(hex`87040800080000001111000022323303441422034414220342142203241422032414220324142203`);
    export const tile220 = image.ofBuffer(hex`87040800080000002414220324142203241422034214220344142203441422032232330311010000`);
    export const tile221 = image.ofBuffer(hex`87040800080000000000000000000000000000000000000000003333333313111111131414141344`);
    export const tile222 = image.ofBuffer(hex`87040800080000004444134422221344333333334244442233333333444424223333333344442222`);
    export const tile223 = image.ofBuffer(hex`87040800080000003333333344222222333333332422224233333333222233333333131111111314`);
    export const tile224 = image.ofBuffer(hex`87040800080000001414134444441344333313440000333300000000000000000000000000000000`);
    export const Door = image.ofBuffer(hex`87041000100000002222222222222232343333333333333344444411414444322422222222222232343333333333333244441411444444322422222222222232343333333333333244441141444444322422222222222232343333333333333244114144444444322422222222222232343333333333333314414444444444342222222222222232`);

    export function createTilemap(name: string): tiles.TileMapData {
        switch(name) {
            case "Atrium": return tiles.createTilemap(hex`160012003c3b3c3c3c3c3c3c3c3c3c3c3c3c3c3c3c3c3c3c3c3c0e0f10117172906f70bfc0c1c26f708f71720e0f1011222324259394449192dadbdcdd9192449394222324253e3f4041b6b7d0b4b5e7e8e9eab4b5cfb6b73e3f404130323230d3d430d1d212131415d1d232d3d4323230325050505050505050505120214c505050505050505050505050504e4e4e4e4e51383a4c4e4e4e4e4e4e505050505050504e4e4e4e4e5156584c4e4e4e4e4e4e4e5050505050504e4e4e4e4e51696b4c4e4e4e4e4e4e50505065656464656564646566898b636565656565646465655a5a5a5a5a5a5a34358688358836375a5a5a5a5a5a5a5a5a5a5a5a5a5aca545454545454555a5a5a5a5a5a5a5a5a5a5a5a5a5aca545454aa5454555a5a5a5a5a5a5a5a5a5a5a5a5a5aca54c754545454555c5a5a5a5a5a5a5a5a5a5a5a5a5a525454545454c8ad5c5a5a5a5a5a5a5a5a5a5a5a5a5a52545454545454ad5c5a5a5a5a5a5a5a5a5a5a5a5a5a52545454545454555c5a5a5a5a5a5a5a5a5a5a5a5a5a525454c9545454ad5c5a5a5a5a5a5a`, img`\n2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 
. . . . 2 2 . 2 2 2 2 2 2 2 2 . 2 2 . . . . 
. . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 . . . . . . . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 . . . . . . 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 . . . . . . 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 . . . . . . 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 . . . . . . 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 . . . . . . 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 . . . . . . 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 . . . . . . 2 2 2 2 2 2 2 2 
`, [tomb.transparency16,tomb.tile1,tomb.tile2,tomb.tile3,tomb.tile4,tomb.tile5,tomb.tile6,tomb.tile7,tomb.tile8,tomb.tile9,tomb.tile10,tomb.tile11,tomb.tile12,tomb.tile13,tomb.tile14,tomb.tile15,tomb.tile16,tomb.tile17,tomb.tile18,tomb.tile19,tomb.tile20,tomb.tile21,tomb.tile22,tomb.tile23,tomb.tile24,tomb.tile25,tomb.tile26,tomb.tile27,tomb.tile28,tomb.tile29,tomb.tile30,tomb.tile31,tomb.tile32,tomb.tile33,tomb.tile34,tomb.tile35,tomb.tile36,tomb.tile37,tomb.tile38,tomb.tile39,tomb.tile40,tomb.tile41,tomb.tile42,tomb.tile43,tomb.tile44,tomb.tile45,tomb.tile46,tomb.tile47,tomb.tile48,tomb.tile49,tomb.tile50,tomb.tile51,tomb.tile52,tomb.tile53,tomb.tile54,tomb.tile55,tomb.tile56,tomb.tile57,tomb.tile58,tomb.tile59,tomb.tile60,tomb.tile61,tomb.tile62,tomb.tile63,tomb.tile64,tomb.tile65,tomb.tile66,tomb.tile67,tomb.tile68,tomb.tile69,tomb.tom_down,tomb.tile70,tomb.tile71,tomb.tile72,tomb.tile73,tomb.tile74,tomb.tile75,tomb.tile76,tomb.tile77,tomb.tile78,tomb.tile79,tomb.tile80,tomb.tile81,tomb.tile82,tomb.tile83,tomb.tile84,tomb.tile85,tomb.tile86,tomb.tile87,tomb.tile88,tomb.tile89,tomb.tile90,tomb.tile91,tomb.tile92,tomb.tile93,tomb.tile94,tomb.tile95,tomb.tile96,tomb.tile97,tomb.tile98,tomb.tile99,tomb.tile100,tomb.tile101,tomb.tile102,tomb.tile103,tomb.tile104,tomb.tile105,tomb.tile106,tomb.tile107,tomb.tile108,tomb.tile109,tomb.tile110,tomb.tile111,tomb.tile112,tomb.tile113,tomb.tile114,tomb.tile115,tomb.tile116,tomb.tile117,tomb.tile118,tomb.tile119,tomb.tile120,tomb.tile121,tomb.tile122,tomb.tile123,tomb.tile124,tomb.tile125,tomb.tile126,tomb.tile127,tomb.tile128,tomb.tile129,tomb.tile130,tomb.Crate,tomb.tile131,tomb.tile132,tomb.DartShooter,tomb.tile133,tomb.tile134,tomb.tile135,tomb.tile136,tomb.tile137,tomb.tile138,tomb.tile139,tomb.tile140,tomb.tile141,tomb.tile142,tomb.tile143,tomb.tile144,tomb.tile145,tomb.tile146,tomb.tile147,tomb.Pit,tomb.tile148,tomb.tile149,tomb.DartShooter,tomb.tile150,tomb.tile151,tomb.tile152,tomb.tile153,tomb.tile154,tomb.tile155,tomb.tile156,tomb.tile157,tomb.tile158,tomb.tile159,tomb.tile160,tomb.tile161,tomb.tile162,tomb.tile163,tomb.Switch,tomb.tile164,tomb.tile165,tomb.tile166,tomb.tile167,tomb.tile168,tomb.tile169,tomb.tile170,tomb.tile171,tomb.tile172,tomb.tile173,tomb.tile174,tomb.tile175,tomb.tile176,tomb.tile177,tomb.Spikes,tomb.Spikes,tomb.tile178,tomb.tile179,tomb.tile180,tomb.tile181,tomb.PressurePlate,tomb.tile182,tomb.tile183,tomb.tile184,tomb.tile185,tomb.tile186,tomb.tile187,tomb.tile188,tomb.tile189,tomb.tile190,tomb.tile191,tomb.tile192,tomb.tile193,tomb.tile194,tomb.tile195,tomb.tile196,tomb.tile197,tomb.tile198,tomb.tile199,tomb.tile200,tomb.tile201,tomb.tile202,tomb.tile203,tomb.Bomb,tomb.tile204,tomb.tile205,tomb.tile206,tomb.tile207,tomb.tile208,tomb.tile209,tomb.tile210,tomb.tile211,tomb.tile212,tomb.tile213,tomb.tile214,tomb.tile215,tomb.tile216,tomb.tile217,tomb.tile218,tomb.tile219,tomb.tile220,tomb.tile221,tomb.tile222,tomb.tile223,tomb.tile224,tomb.Door], TileScale.Eight);
            case "Plexus": return tiles.createTilemap(hex`160018005b5254c854541e35361f54531e35351f5453ac53556a5bca5453545453c8545354535453545354535453ad576e52545354535454545354c75453545354535453556a5bca545354393b3c3d53545354393b3c3d535453ad6a5bcaaa545457595a5b5354535457595a5b5354ab556a5b525454546a6c6d6e535454546a6c6d6e535453ad6a5b525454548a8c8d8e53aa54548a8c8d8e535353ad6a5bca545354aee444b153545354ae44b0b153c753ad6a5bca545354cbcccdce53545354cbcc01ce535353556a5b52545354535454545454535453535354535353556a5b5254c954535453545353535453545354535353556a5bca545354535353545354ac545354535453c753556a5bca5453545353c7545354535453545354535354556a6e52545354535353545354c85453545353535453556a0d3b3c3b3c3dca545454545454545355393b3c3b3c0c5a5a5a5a5a5b7a7c5354545354c95355575a5a5a5a5a5a5a5a5a5a6e9ea05354c853545353556a5a5a5a5a5a5a5a5a5a5a6eca541819545354c85355575a5a5a5a5a5a5a5a5a5a5b52c928295453545453556a5a5a5a5a5a5a5a5a5a5a6eca545354545354545355575a5a5a5a5a5a5a5a5a5a5b5254ac54545454c754556a5a5a5a5a5a5a5a5a5a5a6eca54535454c853547778575a5a5a5a5a5a5a5a5a5a6e52545354545453549b9c575a5a5a5a5a5a5a5a5a5a6eca53ac535353535453ad6a5a5a5a5a5a`, img`\n. 2 . . . . . . . . . . . . . . . . . . 2 . 
. 2 . . . . . . . . . . . . . . . . . . 2 . 
. 2 . . . . . . . . . . . . . . . . . . 2 . 
. 2 . . . . 2 2 . . . . . . 2 2 . . . . 2 . 
. 2 . . . . . 2 . . . . . . . 2 . . . . 2 . 
. 2 . . . . . . . . . . . . . . . . . . 2 . 
. 2 . . . . . . . . . . . . . . . . . . 2 . 
. 2 . . . . . 2 . . . . . . 2 . . . . . 2 . 
. 2 . . . . . . . . . . . . . . . . . . 2 . 
. 2 . . . . . . . . . . . . . . . . . . 2 . 
. 2 . . . . . . . . . . . . . . . . . . 2 . 
. 2 . . . . . . . . . . . . . . . . . . 2 . 
. 2 . . . . . . . . . . . . . . . . . . 2 . 
. 2 . . . . . . . . . . . . . . . . . . 2 . 
. 2 2 2 2 . 2 . . . . . . . . 2 . 2 2 2 2 . 
2 2 2 2 2 . . . . . . . . . . 2 . 2 2 2 2 2 
2 2 2 2 2 . . . . . . . . . . 2 . 2 2 2 2 2 
2 2 2 2 2 . 2 . . . . . . . . 2 . 2 2 2 2 2 
2 2 2 2 2 . 2 . . . . . . . . 2 . 2 2 2 2 2 
2 2 2 2 2 . 2 . . . . . . . . 2 . 2 2 2 2 2 
2 2 2 2 2 . 2 . . . . . . . . 2 . 2 2 2 2 2 
2 2 2 2 2 . 2 . . . . . . . . . . 2 2 2 2 2 
2 2 2 2 2 . 2 . . . . . . . . . . 2 2 2 2 2 
2 2 2 2 2 . 2 . . . . . . . . 2 . 2 2 2 2 2 
`, [tomb.transparency16,tomb.tile1,tomb.tile2,tomb.tile3,tomb.tile4,tomb.tile5,tomb.tile6,tomb.tile7,tomb.tile8,tomb.tile9,tomb.tile10,tomb.tile11,tomb.tile12,tomb.tile13,tomb.tile14,tomb.tile15,tomb.tile16,tomb.tile17,tomb.tile18,tomb.tile19,tomb.tile20,tomb.tile21,tomb.tile22,tomb.tile23,tomb.tile24,tomb.tile25,tomb.tile26,tomb.tile27,tomb.tile28,tomb.tile29,tomb.tile30,tomb.tile31,tomb.tile32,tomb.tile33,tomb.tile34,tomb.tile35,tomb.tile36,tomb.tile37,tomb.tile38,tomb.tile39,tomb.tile40,tomb.tile41,tomb.tile42,tomb.tile43,tomb.tile44,tomb.tile45,tomb.tile46,tomb.tile47,tomb.tile48,tomb.tile49,tomb.tile50,tomb.tile51,tomb.tile52,tomb.tile53,tomb.tile54,tomb.tile55,tomb.tile56,tomb.tile57,tomb.tile58,tomb.tile59,tomb.tile60,tomb.tile61,tomb.tile62,tomb.tile63,tomb.tile64,tomb.tile65,tomb.tile66,tomb.tile67,tomb.tile68,tomb.tile69,tomb.tom_down,tomb.tile70,tomb.tile71,tomb.tile72,tomb.tile73,tomb.tile74,tomb.tile75,tomb.tile76,tomb.tile77,tomb.tile78,tomb.tile79,tomb.tile80,tomb.tile81,tomb.tile82,tomb.tile83,tomb.tile84,tomb.tile85,tomb.tile86,tomb.tile87,tomb.tile88,tomb.tile89,tomb.tile90,tomb.tile91,tomb.tile92,tomb.tile93,tomb.tile94,tomb.tile95,tomb.tile96,tomb.tile97,tomb.tile98,tomb.tile99,tomb.tile100,tomb.tile101,tomb.tile102,tomb.tile103,tomb.tile104,tomb.tile105,tomb.tile106,tomb.tile107,tomb.tile108,tomb.tile109,tomb.tile110,tomb.tile111,tomb.tile112,tomb.tile113,tomb.tile114,tomb.tile115,tomb.tile116,tomb.tile117,tomb.tile118,tomb.tile119,tomb.tile120,tomb.tile121,tomb.tile122,tomb.tile123,tomb.tile124,tomb.tile125,tomb.tile126,tomb.tile127,tomb.tile128,tomb.tile129,tomb.tile130,tomb.Crate,tomb.tile131,tomb.tile132,tomb.DartShooter,tomb.tile133,tomb.tile134,tomb.tile135,tomb.tile136,tomb.tile137,tomb.tile138,tomb.tile139,tomb.tile140,tomb.tile141,tomb.tile142,tomb.tile143,tomb.tile144,tomb.tile145,tomb.tile146,tomb.tile147,tomb.Pit,tomb.tile148,tomb.tile149,tomb.DartShooter,tomb.tile150,tomb.tile151,tomb.tile152,tomb.tile153,tomb.tile154,tomb.tile155,tomb.tile156,tomb.tile157,tomb.tile158,tomb.tile159,tomb.tile160,tomb.tile161,tomb.tile162,tomb.tile163,tomb.Switch,tomb.tile164,tomb.tile165,tomb.tile166,tomb.tile167,tomb.tile168,tomb.tile169,tomb.tile170,tomb.tile171,tomb.tile172,tomb.tile173,tomb.tile174,tomb.tile175,tomb.tile176,tomb.tile177,tomb.Spikes,tomb.Spikes,tomb.tile178,tomb.tile179,tomb.tile180,tomb.tile181,tomb.PressurePlate,tomb.tile182,tomb.tile183,tomb.tile184,tomb.tile185,tomb.tile186,tomb.tile187,tomb.tile188,tomb.tile189,tomb.tile190,tomb.tile191,tomb.tile192,tomb.tile193,tomb.tile194,tomb.tile195,tomb.tile196,tomb.tile197,tomb.tile198,tomb.tile199,tomb.tile200,tomb.tile201,tomb.tile202,tomb.tile203,tomb.Bomb,tomb.tile204,tomb.tile205,tomb.tile206,tomb.tile207,tomb.tile208,tomb.tile209,tomb.tile210,tomb.tile211,tomb.tile212,tomb.tile213,tomb.tile214,tomb.tile215,tomb.tile216,tomb.tile217,tomb.tile218,tomb.tile219,tomb.tile220,tomb.tile221,tomb.tile222,tomb.tile223,tomb.tile224,tomb.Door], TileScale.Eight);
            case "Nexus": return tiles.createTilemap(hex`1e0011008d8d8d8d8d8c8d8d73748d75764547484975768d73748d8d8d8c8c8c8c8cb0b0b0b0b0e2b0b095964498995f6061629899449596b0b0b0afafafe3afcdcd2a2bcdcccdcdbabbcdbcbd797b7e80bcbdcdbabbcd017a7c2a2bcccc5453545454535453d6d753d8d99d1819a4d8d953d6d754539ea0545353535453545354c85454545454e5e654282954e5e6545454aa535353545354535453545354ac5453c85354545454ab545454545454545453535354535453545354535453545353535353c902030405535353535354535353545354535453545354535453aa535353531a1b1c1d5353c853535453545353535453545454535453545353545454542c2d2f31545454545454aa5453535354533c3b3c3b3dca545308676867684a4b4d4f68686768095453ad393b3c3b3b5a5a5a5a5bcaaa53552e3032323032323232303033ca5453ad575a5a5a5a5a5a5a5a5b525453554c5050505050505050505051525453ad575a5a5a5a5a5a5a5a5b52545355636565640750500665656466ca54ab55575a5a5a5a5a5a5a5a5bca5453ad818216174c50505116178385ca5453ad575a5a5a5a5a5a5a5a5bca545355a5a6c5c64c505051c3c4a7a852545355575a5a5a5a5a5a5a5a5bca54531e3637e0e163646566dedf34361f5453ad575a5a5a5a5a5a5a5a5b5254535454555d5e343535375d5eca5453545355575a5a5a5a`, img`\n. . . . . . . . 2 2 . 2 2 2 2 2 2 2 2 . 2 2 . . . . . . . . 
. . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . 
. . . . . . . . 2 2 . 2 2 2 2 2 2 2 2 . 2 2 . . . . . . . . 
. . . . . . . . 2 2 . 2 2 2 . . 2 2 2 . 2 2 . . . . . . . . 
. . . . . . . . . . . 2 2 . . . . 2 2 . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 2 2 2 2 . . . . . . . . . . . . . 
. . . . . . . . . . . . . 2 2 2 2 . . . . . . . . . . . . . 
. . . . . . . . . . . . . 2 2 2 2 . . . . . . . . . . . . . 
2 2 2 2 . 2 . . . . . . . 2 2 2 2 . . . . . . . 2 . 2 2 2 2 
2 2 2 2 . 2 . . 2 . . . . . . . . . . . . 2 . . 2 . 2 2 2 2 
2 2 2 2 . 2 . . 2 . . . . . . . . . . . . 2 . . 2 . 2 2 2 2 
2 2 2 2 . 2 . . 2 . . . . . . . . . . . . 2 . . 2 . 2 2 2 2 
2 2 2 2 . 2 . . 2 . . . . . . . . . . . . 2 . . 2 . 2 2 2 2 
2 2 2 2 . 2 . . 2 . . . . . . . . . . . . 2 . . 2 . 2 2 2 2 
2 2 2 2 . 2 . . . . . . . . . . . . . . . . . . 2 . 2 2 2 2 
2 2 2 2 . 2 . . . . 2 . . . . . . . . 2 . . . . 2 . 2 2 2 2 
`, [tomb.transparency16,tomb.tile1,tomb.tile2,tomb.tile3,tomb.tile4,tomb.tile5,tomb.tile6,tomb.tile7,tomb.tile8,tomb.tile9,tomb.tile10,tomb.tile11,tomb.tile12,tomb.tile13,tomb.tile14,tomb.tile15,tomb.tile16,tomb.tile17,tomb.tile18,tomb.tile19,tomb.tile20,tomb.tile21,tomb.tile22,tomb.tile23,tomb.tile24,tomb.tile25,tomb.tile26,tomb.tile27,tomb.tile28,tomb.tile29,tomb.tile30,tomb.tile31,tomb.tile32,tomb.tile33,tomb.tile34,tomb.tile35,tomb.tile36,tomb.tile37,tomb.tile38,tomb.tile39,tomb.tile40,tomb.tile41,tomb.tile42,tomb.tile43,tomb.tile44,tomb.tile45,tomb.tile46,tomb.tile47,tomb.tile48,tomb.tile49,tomb.tile50,tomb.tile51,tomb.tile52,tomb.tile53,tomb.tile54,tomb.tile55,tomb.tile56,tomb.tile57,tomb.tile58,tomb.tile59,tomb.tile60,tomb.tile61,tomb.tile62,tomb.tile63,tomb.tile64,tomb.tile65,tomb.tile66,tomb.tile67,tomb.tile68,tomb.tile69,tomb.tom_down,tomb.tile70,tomb.tile71,tomb.tile72,tomb.tile73,tomb.tile74,tomb.tile75,tomb.tile76,tomb.tile77,tomb.tile78,tomb.tile79,tomb.tile80,tomb.tile81,tomb.tile82,tomb.tile83,tomb.tile84,tomb.tile85,tomb.tile86,tomb.tile87,tomb.tile88,tomb.tile89,tomb.tile90,tomb.tile91,tomb.tile92,tomb.tile93,tomb.tile94,tomb.tile95,tomb.tile96,tomb.tile97,tomb.tile98,tomb.tile99,tomb.tile100,tomb.tile101,tomb.tile102,tomb.tile103,tomb.tile104,tomb.tile105,tomb.tile106,tomb.tile107,tomb.tile108,tomb.tile109,tomb.tile110,tomb.tile111,tomb.tile112,tomb.tile113,tomb.tile114,tomb.tile115,tomb.tile116,tomb.tile117,tomb.tile118,tomb.tile119,tomb.tile120,tomb.tile121,tomb.tile122,tomb.tile123,tomb.tile124,tomb.tile125,tomb.tile126,tomb.tile127,tomb.tile128,tomb.tile129,tomb.tile130,tomb.Crate,tomb.tile131,tomb.tile132,tomb.DartShooter,tomb.tile133,tomb.tile134,tomb.tile135,tomb.tile136,tomb.tile137,tomb.tile138,tomb.tile139,tomb.tile140,tomb.tile141,tomb.tile142,tomb.tile143,tomb.tile144,tomb.tile145,tomb.tile146,tomb.tile147,tomb.Pit,tomb.tile148,tomb.tile149,tomb.DartShooter,tomb.tile150,tomb.tile151,tomb.tile152,tomb.tile153,tomb.tile154,tomb.tile155,tomb.tile156,tomb.tile157,tomb.tile158,tomb.tile159,tomb.tile160,tomb.tile161,tomb.tile162,tomb.tile163,tomb.Switch,tomb.tile164,tomb.tile165,tomb.tile166,tomb.tile167,tomb.tile168,tomb.tile169,tomb.tile170,tomb.tile171,tomb.tile172,tomb.tile173,tomb.tile174,tomb.tile175,tomb.tile176,tomb.tile177,tomb.Spikes,tomb.Spikes,tomb.tile178,tomb.tile179,tomb.tile180,tomb.tile181,tomb.PressurePlate,tomb.tile182,tomb.tile183,tomb.tile184,tomb.tile185,tomb.tile186,tomb.tile187,tomb.tile188,tomb.tile189,tomb.tile190,tomb.tile191,tomb.tile192,tomb.tile193,tomb.tile194,tomb.tile195,tomb.tile196,tomb.tile197,tomb.tile198,tomb.tile199,tomb.tile200,tomb.tile201,tomb.tile202,tomb.tile203,tomb.Bomb,tomb.tile204,tomb.tile205,tomb.tile206,tomb.tile207,tomb.tile208,tomb.tile209,tomb.tile210,tomb.tile211,tomb.tile212,tomb.tile213,tomb.tile214,tomb.tile215,tomb.tile216,tomb.tile217,tomb.tile218,tomb.tile219,tomb.tile220,tomb.tile221,tomb.tile222,tomb.tile223,tomb.tile224,tomb.Door], TileScale.Eight);
        }
        return null;
    }

    export function createTile(name: string): Image {
        switch(name) {
            case "transparency16": return transparency16;
            case "tile1": return tile1;
            case "tile2": return tile2;
            case "tile3": return tile3;
            case "tile4": return tile4;
            case "tile5": return tile5;
            case "tile6": return tile6;
            case "tile7": return tile7;
            case "tile8": return tile8;
            case "tile9": return tile9;
            case "tile10": return tile10;
            case "tile11": return tile11;
            case "tile12": return tile12;
            case "tile13": return tile13;
            case "tile14": return tile14;
            case "tile15": return tile15;
            case "tile16": return tile16;
            case "tile17": return tile17;
            case "tile18": return tile18;
            case "tile19": return tile19;
            case "tile20": return tile20;
            case "tile21": return tile21;
            case "tile22": return tile22;
            case "tile23": return tile23;
            case "tile24": return tile24;
            case "tile25": return tile25;
            case "tile26": return tile26;
            case "tile27": return tile27;
            case "tile28": return tile28;
            case "tile29": return tile29;
            case "tile30": return tile30;
            case "tile31": return tile31;
            case "tile32": return tile32;
            case "tile33": return tile33;
            case "tile34": return tile34;
            case "tile35": return tile35;
            case "tile36": return tile36;
            case "tile37": return tile37;
            case "tile38": return tile38;
            case "tile39": return tile39;
            case "tile40": return tile40;
            case "tile41": return tile41;
            case "tile42": return tile42;
            case "tile43": return tile43;
            case "tile44": return tile44;
            case "tile45": return tile45;
            case "tile46": return tile46;
            case "tile47": return tile47;
            case "tile48": return tile48;
            case "tile49": return tile49;
            case "tile50": return tile50;
            case "tile51": return tile51;
            case "tile52": return tile52;
            case "tile53": return tile53;
            case "tile54": return tile54;
            case "tile55": return tile55;
            case "tile56": return tile56;
            case "tile57": return tile57;
            case "tile58": return tile58;
            case "tile59": return tile59;
            case "tile60": return tile60;
            case "tile61": return tile61;
            case "tile62": return tile62;
            case "tile63": return tile63;
            case "tile64": return tile64;
            case "tile65": return tile65;
            case "tile66": return tile66;
            case "tile67": return tile67;
            case "tile68": return tile68;
            case "tile69": return tile69;
            case "tom_down": return tom_down;
            case "tile70": return tile70;
            case "tile71": return tile71;
            case "tile72": return tile72;
            case "tile73": return tile73;
            case "tile74": return tile74;
            case "tile75": return tile75;
            case "tile76": return tile76;
            case "tile77": return tile77;
            case "tile78": return tile78;
            case "tile79": return tile79;
            case "tile80": return tile80;
            case "tile81": return tile81;
            case "tile82": return tile82;
            case "tile83": return tile83;
            case "tile84": return tile84;
            case "tile85": return tile85;
            case "tile86": return tile86;
            case "tile87": return tile87;
            case "tile88": return tile88;
            case "tile89": return tile89;
            case "tile90": return tile90;
            case "tile91": return tile91;
            case "tile92": return tile92;
            case "tile93": return tile93;
            case "tile94": return tile94;
            case "tile95": return tile95;
            case "tile96": return tile96;
            case "tile97": return tile97;
            case "tile98": return tile98;
            case "tile99": return tile99;
            case "tile100": return tile100;
            case "tile101": return tile101;
            case "tile102": return tile102;
            case "tile103": return tile103;
            case "tile104": return tile104;
            case "tile105": return tile105;
            case "tile106": return tile106;
            case "tile107": return tile107;
            case "tile108": return tile108;
            case "tile109": return tile109;
            case "tile110": return tile110;
            case "tile111": return tile111;
            case "tile112": return tile112;
            case "tile113": return tile113;
            case "tile114": return tile114;
            case "tile115": return tile115;
            case "tile116": return tile116;
            case "tile117": return tile117;
            case "tile118": return tile118;
            case "tile119": return tile119;
            case "tile120": return tile120;
            case "tile121": return tile121;
            case "tile122": return tile122;
            case "tile123": return tile123;
            case "tile124": return tile124;
            case "tile125": return tile125;
            case "tile126": return tile126;
            case "tile127": return tile127;
            case "tile128": return tile128;
            case "tile129": return tile129;
            case "tile130": return tile130;
            case "Crate": return Crate;
            case "tile131": return tile131;
            case "tile132": return tile132;
            case "DartShooter": return DartShooter;
            case "tile133": return tile133;
            case "tile134": return tile134;
            case "tile135": return tile135;
            case "tile136": return tile136;
            case "tile137": return tile137;
            case "tile138": return tile138;
            case "tile139": return tile139;
            case "tile140": return tile140;
            case "tile141": return tile141;
            case "tile142": return tile142;
            case "tile143": return tile143;
            case "tile144": return tile144;
            case "tile145": return tile145;
            case "tile146": return tile146;
            case "tile147": return tile147;
            case "Pit": return Pit;
            case "tile148": return tile148;
            case "tile149": return tile149;
            case "DartShooter": return DartShooter;
            case "tile150": return tile150;
            case "tile151": return tile151;
            case "tile152": return tile152;
            case "tile153": return tile153;
            case "tile154": return tile154;
            case "tile155": return tile155;
            case "tile156": return tile156;
            case "tile157": return tile157;
            case "tile158": return tile158;
            case "tile159": return tile159;
            case "tile160": return tile160;
            case "tile161": return tile161;
            case "tile162": return tile162;
            case "tile163": return tile163;
            case "Switch": return Switch;
            case "tile164": return tile164;
            case "tile165": return tile165;
            case "tile166": return tile166;
            case "tile167": return tile167;
            case "tile168": return tile168;
            case "tile169": return tile169;
            case "tile170": return tile170;
            case "tile171": return tile171;
            case "tile172": return tile172;
            case "tile173": return tile173;
            case "tile174": return tile174;
            case "tile175": return tile175;
            case "tile176": return tile176;
            case "tile177": return tile177;
            case "Spikes": return Spikes;
            case "Spikes": return Spikes;
            case "tile178": return tile178;
            case "tile179": return tile179;
            case "tile180": return tile180;
            case "tile181": return tile181;
            case "PressurePlate": return PressurePlate;
            case "tile182": return tile182;
            case "tile183": return tile183;
            case "tile184": return tile184;
            case "tile185": return tile185;
            case "tile186": return tile186;
            case "tile187": return tile187;
            case "tile188": return tile188;
            case "tile189": return tile189;
            case "tile190": return tile190;
            case "tile191": return tile191;
            case "tile192": return tile192;
            case "tile193": return tile193;
            case "tile194": return tile194;
            case "tile195": return tile195;
            case "tile196": return tile196;
            case "tile197": return tile197;
            case "tile198": return tile198;
            case "tile199": return tile199;
            case "tile200": return tile200;
            case "tile201": return tile201;
            case "tile202": return tile202;
            case "tile203": return tile203;
            case "Bomb": return Bomb;
            case "tile204": return tile204;
            case "tile205": return tile205;
            case "tile206": return tile206;
            case "tile207": return tile207;
            case "tile208": return tile208;
            case "tile209": return tile209;
            case "tile210": return tile210;
            case "tile211": return tile211;
            case "tile212": return tile212;
            case "tile213": return tile213;
            case "tile214": return tile214;
            case "tile215": return tile215;
            case "tile216": return tile216;
            case "tile217": return tile217;
            case "tile218": return tile218;
            case "tile219": return tile219;
            case "tile220": return tile220;
            case "tile221": return tile221;
            case "tile222": return tile222;
            case "tile223": return tile223;
            case "tile224": return tile224;
            case "Door": return Door;
        }
        return null;
    }

    export namespace objects {
        export const OBJECT2: Tom = { id: 2, name: "", x: 80.000000, y: 128.000000, width: 14.000000, height: 18.000000, type: "Tom", room: tomb.ATRIUM_NAME };
        export const OBJECT6: Crate = { id: 6, name: "", x: 80.000000, y: 128.000000, width: 16.000000, height: 16.000000, type: "Crate", room: tomb.PLEXUS_NAME };
        export const OBJECT7: Crate = { id: 7, name: "", x: 128.000000, y: 96.000000, width: 16.000000, height: 16.000000, type: "Crate", room: tomb.PLEXUS_NAME };
        export const OBJECT8: PressurePlate = { id: 8, name: "", x: 48.000000, y: 96.000000, width: 16.000000, height: 16.000000, type: "PressurePlate", room: tomb.PLEXUS_NAME };
        export const OBJECT9: Pit = { id: 9, name: "", x: 48.000000, y: 56.000000, width: 16.000000, height: 16.000000, type: "Pit", room: tomb.NEXUS_NAME };
        export const OBJECT10: Switch = { id: 10, name: "", x: 112.000000, y: 144.000000, width: 16.000000, height: 16.000000, type: "Switch", room: tomb.PLEXUS_NAME };
        export const OBJECT11: Spikes = { id: 11, name: "", x: 96.000000, y: 96.000000, width: 16.000000, height: 16.000000, type: "Spikes", room: tomb.PLEXUS_NAME, _active: false, active: false };
        export const OBJECT12: Spikes = { id: 12, name: "", x: 48.000000, y: 176.000000, width: 16.000000, height: 16.000000, type: "Spikes", room: tomb.PLEXUS_NAME, _active: true, active: true };
        export const OBJECT13: DartShooter = { id: 13, name: "", x: 152.000000, y: 112.000000, width: 16.000000, height: 16.000000, type: "DartShooter", room: tomb.PLEXUS_NAME };
        export const OBJECT14: DartShooter = { id: 14, name: "", x: 8.000000, y: 16.000000, width: 16.000000, height: 16.000000, type: "DartShooter", room: tomb.PLEXUS_NAME };
        export const OBJECT15: Bomb = { id: 15, name: "", x: 16.000000, y: 40.000000, width: 16.000000, height: 16.000000, type: "Bomb", room: tomb.NEXUS_NAME };
        export const OBJECT16: Door = { id: 16, name: "", x: 224.000000, y: 72.000000, width: 16.000000, height: 16.000000, type: "Door", room: tomb.NEXUS_NAME };
        export const OBJECT17: Door = { id: 17, name: "", x: 224.000000, y: 56.000000, width: 16.000000, height: 16.000000, type: "Door", room: tomb.NEXUS_NAME };
        export const OBJECT18: Door = { id: 18, name: "", x: 224.000000, y: 40.000000, width: 16.000000, height: 16.000000, type: "Door", room: tomb.NEXUS_NAME };
        export const OBJECT19: Door = { id: 19, name: "", x: 0.000000, y: 40.000000, width: 16.000000, height: 16.000000, type: "Door", room: tomb.NEXUS_NAME };
        export const OBJECT20: Door = { id: 20, name: "", x: 0.000000, y: 56.000000, width: 16.000000, height: 16.000000, type: "Door", room: tomb.NEXUS_NAME };
        export const OBJECT21: Door = { id: 21, name: "", x: 0.000000, y: 72.000000, width: 16.000000, height: 16.000000, type: "Door", room: tomb.NEXUS_NAME };
        export const OBJECT22: Warp = { id: 22, name: "", x: 4.000000, y: 0.000000, width: 168.000000, height: 8.000000, type: "Warp", room: tomb.ATRIUM_NAME, jumpTo: 23, vertical: false };
        export const OBJECT23: Warp = { id: 23, name: "", x: 4.000000, y: 184.100000, width: 168.000000, height: 8.000000, type: "Warp", room: tomb.PLEXUS_NAME, jumpTo: 22, vertical: false };
        export const OBJECT24: Warp = { id: 24, name: "", x: 4.000000, y: 0.000000, width: 168.000000, height: 8.000000, type: "Warp", room: tomb.PLEXUS_NAME, jumpTo: 25, vertical: false };
        export const OBJECT25: Warp = { id: 25, name: "", x: 36.000000, y: 128.100000, width: 168.000000, height: 8.000000, type: "Warp", room: tomb.NEXUS_NAME, jumpTo: 24, vertical: false };

        export const ALL_OBJECTS: WorldObject[] = [
            null,
            OBJECT2,
            null,
            null,
            null,
            OBJECT6,
            OBJECT7,
            OBJECT8,
            OBJECT9,
            OBJECT10,
            OBJECT11,
            OBJECT12,
            OBJECT13,
            OBJECT14,
            OBJECT15,
            OBJECT16,
            OBJECT17,
            OBJECT18,
            OBJECT19,
            OBJECT20,
            OBJECT21,
            OBJECT22,
            OBJECT23,
            OBJECT24,
            OBJECT25,
        ];

        export function getById(id: number): WorldObject {
            return ALL_OBJECTS[id - 1];
        }

        export const ALL_TOM_OBJECTS: Tom[] = [
            OBJECT2,
        ];
        export const TOM_COLLECTION_ROOM_ATRIUM: Tom[] = [
            OBJECT2,
        ];
        export const ALL_CRATE_OBJECTS: Crate[] = [
            OBJECT6,
            OBJECT7,
        ];
        export const CRATE_COLLECTION_ROOM_PLEXUS: Crate[] = [
            OBJECT6,
            OBJECT7,
        ];
        export const ALL_PRESSUREPLATE_OBJECTS: PressurePlate[] = [
            OBJECT8,
        ];
        export const PRESSUREPLATE_COLLECTION_ROOM_PLEXUS: PressurePlate[] = [
            OBJECT8,
        ];
        export const ALL_PIT_OBJECTS: Pit[] = [
            OBJECT9,
        ];
        export const PIT_COLLECTION_ROOM_NEXUS: Pit[] = [
            OBJECT9,
        ];
        export const ALL_SWITCH_OBJECTS: Switch[] = [
            OBJECT10,
        ];
        export const SWITCH_COLLECTION_ROOM_PLEXUS: Switch[] = [
            OBJECT10,
        ];
        export const ALL_SPIKES_OBJECTS: Spikes[] = [
            OBJECT11,
            OBJECT12,
        ];
        export const SPIKES_COLLECTION_ROOM_PLEXUS: Spikes[] = [
            OBJECT11,
            OBJECT12,
        ];
        export const ALL_DARTSHOOTER_OBJECTS: DartShooter[] = [
            OBJECT13,
            OBJECT14,
        ];
        export const DARTSHOOTER_COLLECTION_ROOM_PLEXUS: DartShooter[] = [
            OBJECT13,
            OBJECT14,
        ];
        export const ALL_BOMB_OBJECTS: Bomb[] = [
            OBJECT15,
        ];
        export const BOMB_COLLECTION_ROOM_NEXUS: Bomb[] = [
            OBJECT15,
        ];
        export const ALL_DOOR_OBJECTS: Door[] = [
            OBJECT16,
            OBJECT17,
            OBJECT18,
            OBJECT19,
            OBJECT20,
            OBJECT21,
        ];
        export const DOOR_COLLECTION_ROOM_NEXUS: Door[] = [
            OBJECT16,
            OBJECT17,
            OBJECT18,
            OBJECT19,
            OBJECT20,
            OBJECT21,
        ];
        export const ALL_WARP_OBJECTS: Warp[] = [
            OBJECT22,
            OBJECT23,
            OBJECT24,
            OBJECT25,
        ];
        export const WARP_COLLECTION_ROOM_ATRIUM: Warp[] = [
            OBJECT22,
        ];
        export const WARP_COLLECTION_ROOM_PLEXUS: Warp[] = [
            OBJECT23,
            OBJECT24,
        ];
        export const WARP_COLLECTION_ROOM_NEXUS: Warp[] = [
            OBJECT25,
        ];

        export function getAllTomObjects(): Tom[] {
            return ALL_TOM_OBJECTS;
        }

        export function getTomCollectionForRoom(roomName: string): Tom[] {
            if (!roomName) {
                return [];
            }
            switch(roomName) {
                case tomb.ATRIUM_NAME: return TOM_COLLECTION_ROOM_ATRIUM;
            }
            return [];
        }

        export function getAllCrateObjects(): Crate[] {
            return ALL_CRATE_OBJECTS;
        }

        export function getCrateCollectionForRoom(roomName: string): Crate[] {
            if (!roomName) {
                return [];
            }
            switch(roomName) {
                case tomb.PLEXUS_NAME: return CRATE_COLLECTION_ROOM_PLEXUS;
            }
            return [];
        }

        export function getAllPressurePlateObjects(): PressurePlate[] {
            return ALL_PRESSUREPLATE_OBJECTS;
        }

        export function getPressurePlateCollectionForRoom(roomName: string): PressurePlate[] {
            if (!roomName) {
                return [];
            }
            switch(roomName) {
                case tomb.PLEXUS_NAME: return PRESSUREPLATE_COLLECTION_ROOM_PLEXUS;
            }
            return [];
        }

        export function getAllPitObjects(): Pit[] {
            return ALL_PIT_OBJECTS;
        }

        export function getPitCollectionForRoom(roomName: string): Pit[] {
            if (!roomName) {
                return [];
            }
            switch(roomName) {
                case tomb.NEXUS_NAME: return PIT_COLLECTION_ROOM_NEXUS;
            }
            return [];
        }

        export function getAllSwitchObjects(): Switch[] {
            return ALL_SWITCH_OBJECTS;
        }

        export function getSwitchCollectionForRoom(roomName: string): Switch[] {
            if (!roomName) {
                return [];
            }
            switch(roomName) {
                case tomb.PLEXUS_NAME: return SWITCH_COLLECTION_ROOM_PLEXUS;
            }
            return [];
        }

        export function getAllSpikesObjects(): Spikes[] {
            return ALL_SPIKES_OBJECTS;
        }

        export function getSpikesCollectionForRoom(roomName: string): Spikes[] {
            if (!roomName) {
                return [];
            }
            switch(roomName) {
                case tomb.PLEXUS_NAME: return SPIKES_COLLECTION_ROOM_PLEXUS;
            }
            return [];
        }

        export function getAllDartShooterObjects(): DartShooter[] {
            return ALL_DARTSHOOTER_OBJECTS;
        }

        export function getDartShooterCollectionForRoom(roomName: string): DartShooter[] {
            if (!roomName) {
                return [];
            }
            switch(roomName) {
                case tomb.PLEXUS_NAME: return DARTSHOOTER_COLLECTION_ROOM_PLEXUS;
            }
            return [];
        }

        export function getAllBombObjects(): Bomb[] {
            return ALL_BOMB_OBJECTS;
        }

        export function getBombCollectionForRoom(roomName: string): Bomb[] {
            if (!roomName) {
                return [];
            }
            switch(roomName) {
                case tomb.NEXUS_NAME: return BOMB_COLLECTION_ROOM_NEXUS;
            }
            return [];
        }

        export function getAllDoorObjects(): Door[] {
            return ALL_DOOR_OBJECTS;
        }

        export function getDoorCollectionForRoom(roomName: string): Door[] {
            if (!roomName) {
                return [];
            }
            switch(roomName) {
                case tomb.NEXUS_NAME: return DOOR_COLLECTION_ROOM_NEXUS;
            }
            return [];
        }

        export function getAllWarpObjects(): Warp[] {
            return ALL_WARP_OBJECTS;
        }

        export function getWarpCollectionForRoom(roomName: string): Warp[] {
            if (!roomName) {
                return [];
            }
            switch(roomName) {
                case tomb.ATRIUM_NAME: return WARP_COLLECTION_ROOM_ATRIUM;
                case tomb.PLEXUS_NAME: return WARP_COLLECTION_ROOM_PLEXUS;
                case tomb.NEXUS_NAME: return WARP_COLLECTION_ROOM_NEXUS;
            }
            return [];
        }

        export function reset(obj: WorldObject) {
            switch(obj.type) {
                case "Spikes": {
                    const t = obj as Spikes;
                    t.active = t._active;
                    break;
                }
            }
        }

    }
}
// Auto-generated code. Do not edit.
