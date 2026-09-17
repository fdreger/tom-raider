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

interface Pit extends WorldObject {
    readonly type: "Pit";
}

interface Switch extends WorldObject {
    readonly type: "Switch";
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
    export const CRATE_1 = "Crate_1";
    export const DARTSHOOTER = "DartShooter";
    export const PIT = "Pit";
    export const DARTSHOOTER_1 = "DartShooter_1";
    export const SWITCH = "Switch";
    export const SWITCH_1 = "Switch_1";
    export const SWITCH_2 = "Switch_2";
    export const SWITCH_3 = "Switch_3";
    export const SPIKES = "Spikes";
    export const SPIKES_1 = "Spikes_1";
    export const PRESSUREPLATE = "PressurePlate";
    export const PRESSUREPLATE_1 = "PressurePlate_1";
    export const BOULDER = "Boulder";
    export const BOMB = "Bomb";
    export const DOOR = "Door";

    export const palette = hex`000000a1998ecec4ab4c4b496f6e74cec3abffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff`;

    export function createImage(name: string): Image {
        switch(name) {
            case "tom_down": return img`
. . 3 3 . . . . . 3 3 . . . 
. . 3 4 3 1 1 1 3 4 3 . . . 
. . 3 1 4 3 3 3 4 1 3 . . . 
. . 3 1 1 1 1 1 1 1 3 . . . 
3 3 4 1 1 1 1 1 1 1 4 3 3 . 
. 3 1 1 5 1 1 1 5 1 1 3 . . 
3 3 1 5 3 5 5 5 3 5 1 3 3 . 
. 3 4 5 3 5 5 5 3 5 4 3 . . 
. . 3 1 5 5 3 5 5 1 3 . . . 
. 3 4 3 4 1 1 1 4 3 4 3 . . 
3 4 1 1 4 5 5 5 4 1 1 4 3 . 
3 1 1 3 1 1 5 1 1 3 1 1 3 . 
3 5 5 3 1 1 1 1 1 3 5 5 3 . 
. 3 3 3 1 1 1 1 1 3 3 3 . . 
. . . 3 1 1 4 1 1 3 . . . . 
. . . 3 4 4 3 4 4 3 . . . . 
. . . 3 5 5 3 5 5 3 . . . . 
. . . . . . . . . . . . . . 
`  
            case "tom_left": return img`
. . . . . . . 3 3 3 . . . . 
. . . . . . 3 4 5 3 . . . . 
. . . . 3 3 3 5 5 3 . . . . 
. . . 3 1 1 1 1 1 1 3 . . . 
. . 3 1 1 1 1 1 1 1 3 . . . 
. . 3 1 5 1 1 1 1 1 3 . . . 
. . 3 5 3 5 4 1 1 1 3 . . . 
. . 3 5 3 5 1 1 1 1 3 . . . 
. . 3 5 5 4 4 1 1 1 3 . . . 
. . . 3 4 4 1 1 4 3 . . . . 
. . . 3 1 5 4 4 3 . . . . . 
. . . 3 5 3 1 1 3 . . . . . 
. . . 3 1 3 1 1 3 . . . . . 
. . . 3 1 3 5 1 3 . . . . . 
. . . 3 1 1 3 3 . . . . . . 
. . . 3 3 4 4 3 . . . . . . 
. . . 3 3 5 5 3 . . . . . . 
. . . . . . . . . . . . . . 
`  
            case "tom_up": return img`
. . 3 3 . . . . . 3 3 . . . 
. . 3 4 3 1 1 1 3 4 3 . . . 
. . 3 1 4 3 3 3 4 1 3 . . . 
. . 3 1 1 1 1 1 1 1 3 . . . 
3 3 1 1 1 1 1 1 1 1 1 3 3 . 
. 3 1 1 1 1 1 1 1 1 1 3 . . 
3 3 1 1 1 1 1 1 1 1 1 3 3 . 
. 3 1 1 1 1 1 1 1 1 1 3 . . 
. . 3 1 1 1 1 1 1 1 3 . . . 
. 3 4 3 4 4 4 4 4 3 4 3 . . 
3 4 1 1 1 4 4 4 1 1 1 4 3 . 
3 1 1 3 1 1 1 1 1 3 1 1 3 . 
3 5 5 3 1 1 1 1 1 3 5 5 3 . 
. 3 3 3 1 1 1 1 1 3 3 3 . . 
. . . 3 1 1 4 1 1 3 . . . . 
. . . 3 4 4 3 4 4 3 . . . . 
. . . 3 5 5 3 5 5 3 . . . . 
. . . . . . . . . . . . . . 
`  
            case "Gold": return img`
. . . . 2 2 1 1 2 1 2 4 1 . . . 
. 1 1 2 1 1 2 1 1 2 1 1 4 1 1 . 
. 1 1 2 1 2 1 2 1 1 2 1 4 1 1 . 
. 1 2 1 2 1 2 2 1 2 1 4 4 4 1 . 
. 2 1 1 1 2 1 1 2 1 4 1 4 4 1 . 
. 2 1 2 2 1 2 1 4 4 1 4 1 4 1 . 
. 2 1 2 1 2 4 1 4 1 4 1 4 4 2 . 
. 2 2 1 1 4 1 4 4 4 4 4 4 1 2 . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
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
3 2 2 4 2 2 4 2 2 4 2 2 4 2 2 3 
3 1 1 4 1 1 4 1 1 4 1 1 4 1 1 3 
3 1 1 4 1 1 4 1 1 4 1 1 4 1 1 3 
3 1 1 4 1 1 4 1 1 4 1 1 4 1 1 3 
3 1 1 4 1 1 4 1 1 4 1 1 4 1 1 3 
3 1 1 4 1 1 4 1 1 4 1 1 4 1 1 3 
3 1 1 4 1 1 4 1 1 4 1 1 4 1 1 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 4 3 4 3 1 1 1 1 1 1 3 4 3 4 3 
4 1 1 1 4 1 1 1 1 1 1 4 1 1 1 4 
4 1 1 1 4 4 4 4 4 4 4 4 1 1 1 4 
4 1 3 1 4 4 4 4 4 4 4 4 1 3 1 4 
3 1 1 1 3 1 1 1 1 1 1 3 1 1 1 3 
3 1 3 1 3 1 1 1 1 1 1 3 1 3 1 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
`  
            case "Crate_1": return img`
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 2 2 4 2 2 4 2 2 4 2 2 4 2 2 4 
4 1 1 4 1 1 4 1 1 4 1 1 4 1 1 4 
4 1 1 4 1 1 4 1 1 4 1 1 4 1 1 4 
4 1 1 4 1 1 4 1 1 4 1 1 4 1 1 4 
4 1 1 4 1 1 4 1 1 4 1 1 4 1 1 4 
4 1 1 4 1 1 4 1 1 4 1 1 4 1 1 4 
4 1 1 4 1 1 4 1 1 4 1 1 4 1 1 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 1 4 1 4 1 1 1 1 1 1 4 1 4 1 4 
4 1 1 1 4 1 1 1 1 1 1 4 1 1 1 4 
4 1 1 1 4 4 4 4 4 4 4 4 1 1 1 4 
4 1 4 1 4 4 4 4 4 4 4 4 1 4 1 4 
4 1 1 1 4 1 1 1 1 1 1 4 1 1 1 4 
4 1 4 1 4 1 1 1 1 1 1 4 1 4 1 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
`  
            case "DartShooter": return img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 2 . . . 
. . . . . . . . . . . 2 3 2 2 2 
. . . . . . . . . . 2 3 3 3 3 3 
. . . . . . . . . . . 2 3 2 2 2 
. . . . . . . . . . . . 2 . . . 
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
. . . 3 3 4 4 4 4 4 4 3 3 . . . 
. . 3 4 4 4 4 4 4 4 4 4 4 3 . . 
. 3 4 4 4 3 3 3 3 3 3 4 4 4 3 . 
3 4 4 3 3 3 3 3 3 3 3 3 3 4 4 3 
4 4 3 3 3 3 3 3 3 3 3 3 3 3 4 3 
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
            case "DartShooter_1": return img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 2 . . . . . . . . . . . . 
2 2 2 3 2 . . . . . . . . . . . 
3 3 3 3 3 2 . . . . . . . . . . 
2 2 2 3 2 . . . . . . . . . . . 
. . . 2 . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`  
            case "Switch": return img`
. 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
4 1 1 1 1 1 1 1 1 1 1 1 1 1 1 4 
4 1 4 1 1 3 3 3 3 3 3 1 1 4 1 4 
4 1 1 1 3 2 2 2 2 2 2 3 1 1 1 4 
4 1 1 3 2 1 1 1 1 1 1 2 3 1 1 4 
4 1 3 2 1 1 1 3 1 3 1 1 2 3 1 4 
4 1 3 2 1 3 1 1 1 1 3 1 2 3 1 4 
4 1 3 2 1 1 1 3 3 1 1 1 2 3 1 4 
4 1 3 2 1 1 3 3 3 3 1 1 2 3 1 4 
4 1 3 4 2 1 1 1 1 1 1 2 4 3 1 4 
4 1 1 3 4 2 2 2 2 2 2 4 3 1 1 4 
4 1 1 1 3 4 4 4 4 4 4 3 1 1 1 4 
4 1 1 1 1 3 3 3 3 3 3 1 1 1 1 4 
4 1 4 1 1 1 1 1 1 1 1 1 1 4 1 4 
4 1 1 1 1 1 1 1 1 1 1 1 1 1 1 4 
. 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
`  
            case "Switch_1": return img`
. 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
4 1 1 1 1 1 1 1 1 1 1 1 1 1 1 4 
4 1 4 1 1 3 3 3 3 3 3 1 1 4 1 4 
4 1 1 1 3 4 4 4 4 4 4 3 1 1 1 4 
4 1 1 3 4 1 1 1 1 1 1 4 3 1 1 4 
4 1 3 4 1 1 1 1 1 1 1 1 4 3 1 4 
4 1 3 4 1 1 1 3 1 3 1 1 4 3 1 4 
4 1 3 4 1 3 1 1 1 1 3 1 4 3 1 4 
4 1 3 4 1 1 1 3 3 1 1 1 4 3 1 4 
4 1 3 4 1 1 3 3 3 3 1 1 4 3 1 4 
4 1 1 3 4 1 1 1 1 1 1 4 3 1 1 4 
4 1 1 1 3 4 4 4 4 4 4 3 1 1 1 4 
4 1 1 1 1 3 3 3 3 3 3 1 1 1 1 4 
4 1 4 1 1 1 1 1 1 1 1 1 1 4 1 4 
4 1 1 1 1 1 1 1 1 1 1 1 1 1 1 4 
. 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
`  
            case "Switch_2": return img`
. 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
4 1 1 1 1 1 1 1 1 1 1 1 1 1 1 4 
4 1 4 1 1 3 3 3 3 3 3 1 1 4 1 4 
4 1 1 1 3 2 2 2 2 2 2 3 1 1 1 4 
4 1 1 3 2 1 1 1 1 1 1 2 3 1 1 4 
4 1 3 2 1 1 1 1 1 1 1 1 2 3 1 4 
4 1 3 2 1 1 1 1 1 1 1 1 2 3 1 4 
4 1 3 2 1 1 1 1 1 1 1 1 2 3 1 4 
4 1 3 2 1 1 1 1 1 1 1 1 2 3 1 4 
4 1 3 4 2 1 1 1 1 1 1 2 4 3 1 4 
4 1 1 3 4 2 2 2 2 2 2 4 3 1 1 4 
4 1 1 1 3 4 4 4 4 4 4 3 1 1 1 4 
4 1 1 1 1 3 3 3 3 3 3 1 1 1 1 4 
4 1 4 1 1 1 1 1 1 1 1 1 1 4 1 4 
4 1 1 1 1 1 1 1 1 1 1 1 1 1 1 4 
. 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
`  
            case "Switch_3": return img`
. 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
4 1 1 1 1 1 1 1 1 1 1 1 1 1 1 4 
4 1 4 1 1 3 3 3 3 3 3 1 1 4 1 4 
4 1 1 1 3 4 4 4 4 4 4 3 1 1 1 4 
4 1 1 3 4 1 1 1 1 1 1 4 3 1 1 4 
4 1 3 4 1 1 1 1 1 1 1 1 4 3 1 4 
4 1 3 4 1 1 1 1 1 1 1 1 4 3 1 4 
4 1 3 4 1 1 1 1 1 1 1 1 4 3 1 4 
4 1 3 4 1 1 1 1 1 1 1 1 4 3 1 4 
4 1 3 4 1 1 1 1 1 1 1 1 4 3 1 4 
4 1 1 3 4 1 1 1 1 1 1 4 3 1 1 4 
4 1 1 1 3 4 4 4 4 4 4 3 1 1 1 4 
4 1 1 1 1 3 3 3 3 3 3 1 1 1 1 4 
4 1 4 1 1 1 1 1 1 1 1 1 1 4 1 4 
4 1 1 1 1 1 1 1 1 1 1 1 1 1 1 4 
. 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
`  
            case "Spikes": return img`
. . . . . . . . . . . . . . . . 
. . 4 4 . . . . . . . . 4 4 . . 
. 4 3 3 4 . . . . . . 4 3 3 4 . 
. 3 3 3 3 . . . . . . 3 3 3 3 . 
. . 3 3 . . . . . . . . 3 3 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 4 4 . . . . . . . 
. . . . . . 4 3 3 4 . . . . . . 
. . . . . . 3 3 3 3 . . . . . . 
. . . . . . . 3 3 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 4 4 . . . . . . . . 4 4 . . 
. 4 3 3 4 . . . . . . 4 3 3 4 . 
. 3 3 3 3 . . . . . . 3 3 3 3 . 
. . 3 3 . . . . . . . . 3 3 . . 
. . . . . . . . . . . . . . . . 
`  
            case "Spikes_1": return img`
. . 2 2 . . . . . . . . 2 2 . . 
. 2 1 1 2 . . . . . . 2 1 1 2 . 
. 4 1 1 4 . . . . . . 4 1 1 4 . 
. 3 1 1 3 . . . . . . 3 1 1 3 . 
. . 3 3 . . . . . . . . 3 3 . . 
. . . . . . . 2 2 . . . . . . . 
. . . . . . 2 1 1 2 . . . . . . 
. . . . . . 4 1 1 4 . . . . . . 
. . . . . . 3 1 1 3 . . . . . . 
. . . . . . . 3 3 . . . . . . . 
. . 2 2 . . . . . . . . 2 2 . . 
. 2 1 1 2 . . . . . . 2 1 1 2 . 
. 4 1 1 4 . . . . . . 4 1 1 4 . 
. 3 1 1 3 . . . . . . 3 1 1 3 . 
. . 3 3 . . . . . . . . 3 3 . . 
. . . . . . . . . . . . . . . . 
`  
            case "PressurePlate": return img`
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 2 2 2 2 2 2 2 2 2 2 2 2 2 4 3 
3 2 1 1 1 1 1 1 1 1 1 1 1 1 4 3 
3 2 1 1 1 1 1 1 1 1 1 1 1 1 4 3 
3 2 1 1 1 1 1 1 1 1 1 1 1 1 4 3 
3 2 1 1 1 1 1 1 1 1 1 1 1 1 4 3 
3 2 1 1 1 1 1 1 1 1 1 1 1 1 4 3 
3 2 1 1 1 1 1 1 1 1 1 1 1 1 4 3 
3 2 1 1 1 1 1 1 1 1 1 1 1 1 4 3 
3 2 1 1 1 1 1 1 1 1 1 1 1 1 4 3 
3 2 1 1 1 1 1 1 1 1 1 1 1 1 4 3 
3 2 1 1 1 1 1 1 1 1 1 1 1 1 4 3 
3 2 1 1 1 1 1 1 1 1 1 1 1 1 4 3 
3 2 1 1 1 1 1 1 1 1 1 1 1 1 4 3 
3 4 4 4 4 4 4 4 4 4 4 4 4 4 4 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
`  
            case "PressurePlate_1": return img`
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 4 4 4 4 4 4 4 4 4 4 4 4 4 4 3 
3 4 1 1 1 1 1 1 1 1 1 1 1 1 2 3 
3 4 1 1 1 1 1 1 1 1 1 1 1 1 2 3 
3 4 1 1 1 1 1 1 1 1 1 1 1 1 2 3 
3 4 1 1 1 1 1 1 1 1 1 1 1 1 2 3 
3 4 1 1 1 1 1 1 1 1 1 1 1 1 2 3 
3 4 1 1 1 1 1 1 1 1 1 1 1 1 2 3 
3 4 1 1 1 1 1 1 1 1 1 1 1 1 2 3 
3 4 1 1 1 1 1 1 1 1 1 1 1 1 2 3 
3 4 1 1 1 1 1 1 1 1 1 1 1 1 2 3 
3 4 1 1 1 1 1 1 1 1 1 1 1 1 2 3 
3 4 1 1 1 1 1 1 1 1 1 1 1 1 2 3 
3 4 1 1 1 1 1 1 1 1 1 1 1 1 2 3 
3 2 2 2 2 2 2 2 2 2 2 2 2 2 2 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
`  
            case "Boulder": return img`
. . . . . . 3 3 3 3 . . . . . . 
. . . . 3 3 1 1 1 1 3 3 . . . . 
. . . 3 1 1 1 1 1 4 1 4 3 . . . 
. . 3 1 1 2 2 1 1 1 4 4 4 3 . . 
. 3 1 1 2 2 1 1 1 1 1 4 3 3 3 . 
. 3 1 2 1 1 1 1 1 1 4 4 4 4 3 . 
3 1 1 1 1 1 1 1 1 4 1 4 4 3 4 3 
3 1 1 1 1 1 1 1 1 4 1 4 4 4 3 3 
3 1 1 1 1 1 1 1 4 1 4 1 4 3 4 3 
3 1 1 1 1 1 1 4 1 4 1 4 4 4 3 3 
. 3 1 1 1 1 4 1 4 1 4 1 4 3 3 . 
. 3 1 1 1 4 1 4 1 4 1 4 3 4 3 . 
. . 3 1 4 1 4 1 4 4 4 3 4 3 . . 
. . . 3 4 4 1 4 4 4 3 4 3 . . . 
. . . . 3 3 4 4 3 4 3 3 . . . . 
. . . . . . 3 3 3 3 . . . . . . 
`  
            case "Bomb": return img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`  
            case "Door": return img`
4 1 1 1 1 1 1 1 1 1 1 1 1 1 1 4 
4 3 1 4 3 1 4 3 1 4 3 1 4 3 2 4 
4 3 1 4 3 1 4 3 1 4 3 2 4 3 2 4 
4 3 1 4 3 1 4 3 1 4 3 2 4 3 1 4 
4 3 1 4 3 1 4 3 2 4 3 2 4 3 1 4 
4 3 1 4 3 2 4 3 2 4 3 1 4 3 1 4 
4 3 2 4 3 2 4 3 2 4 3 1 4 3 1 4 
4 3 2 4 3 2 4 3 1 4 3 1 4 3 1 4 
4 3 2 4 3 1 4 3 1 4 3 1 4 3 1 4 
4 3 1 4 3 1 4 3 1 4 3 1 4 3 1 4 
4 3 1 4 3 1 4 3 1 4 3 1 4 3 1 4 
4 3 1 4 3 1 4 3 1 4 3 1 4 3 1 4 
4 3 1 4 3 1 4 3 1 4 3 1 4 3 1 4 
4 3 1 4 3 1 4 3 1 4 3 1 4 3 1 4 
4 3 4 4 4 4 4 4 4 4 4 4 4 3 1 4 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
`  
        }
        return null;
    }

    export function createAnimation(name: string): Image[] {
        switch(name) {
            case "tom_down": return [img`
. . 3 3 . . . . . 3 3 . . . 
. . 3 4 3 1 1 1 3 4 3 . . . 
. . 3 1 4 3 3 3 4 1 3 . . . 
. . 3 1 1 1 1 1 1 1 3 . . . 
3 3 4 1 1 1 1 1 1 1 4 3 3 . 
. 3 1 1 5 1 1 1 5 1 1 3 . . 
3 3 1 5 3 5 5 5 3 5 1 3 3 . 
. 3 4 5 3 5 5 5 3 5 4 3 . . 
. . 3 1 5 5 3 5 5 1 3 . . . 
. 3 4 3 4 1 1 1 4 3 4 3 . . 
3 4 1 1 4 5 5 5 4 1 1 4 3 . 
3 1 1 3 1 1 5 1 1 3 1 1 3 . 
3 5 5 3 1 1 1 1 1 3 5 5 3 . 
. 3 3 3 1 1 1 1 1 3 3 3 . . 
. . . 3 1 1 4 1 1 3 . . . . 
. . . 3 4 4 3 4 4 3 . . . . 
. . . 3 5 5 3 5 5 3 . . . . 
. . . . . . . . . . . . . . 
` , img`
. . 3 3 . . . . . 3 3 . . . 
. . 3 4 3 1 1 1 3 4 3 . . . 
. . 3 1 4 3 3 3 4 1 3 . . . 
. . 3 1 1 1 1 1 1 1 3 . . . 
3 3 4 1 1 1 1 1 1 1 4 3 3 . 
. 3 1 1 5 1 1 1 5 1 1 3 . . 
3 3 1 5 3 5 5 5 3 5 1 3 3 . 
. 3 4 5 3 5 5 5 3 5 4 3 . . 
. . 3 1 5 5 3 5 5 1 3 . . . 
. 3 4 3 4 1 1 1 4 3 4 3 . . 
. 3 1 1 4 5 5 5 4 1 1 4 3 . 
. 3 5 3 1 1 5 1 1 3 1 1 3 . 
. . 3 3 1 1 1 1 1 3 5 1 3 . 
. . 3 3 3 3 1 1 1 3 3 3 . . 
. . . 3 4 4 3 1 1 3 . . . . 
. . . 3 5 5 3 3 3 3 . . . . 
. . . . . . 3 3 3 . . . . . 
. . . . . . . . . . . . . . 
` , img`
. . 3 3 . . . . . 3 3 . . . 
. . 3 4 3 1 1 1 3 4 3 . . . 
. . 3 1 4 3 3 3 4 1 3 . . . 
. . 3 1 1 1 1 1 1 1 3 . . . 
3 3 4 1 1 1 1 1 1 1 4 3 3 . 
. 3 1 1 5 1 1 1 5 1 1 3 . . 
3 3 1 5 3 5 5 5 3 5 1 3 3 . 
. 3 4 5 3 5 5 5 3 5 4 3 . . 
. . 3 1 5 5 3 5 5 1 3 . . . 
. 3 4 3 4 1 1 1 4 3 4 3 . . 
3 4 1 1 4 5 5 5 4 1 1 4 3 . 
3 1 1 3 1 1 5 1 1 3 1 1 3 . 
3 5 5 3 1 1 1 1 1 3 5 5 3 . 
. 3 3 3 1 1 1 1 1 3 3 3 . . 
. . . 3 1 1 4 1 1 3 . . . . 
. . . 3 4 4 3 4 4 3 . . . . 
. . . 3 5 5 3 5 5 3 . . . . 
. . . . . . . . . . . . . . 
` , img`
. . 3 3 . . . . . 3 3 . . . 
. . 3 4 3 1 1 1 3 4 3 . . . 
. . 3 1 4 3 3 3 4 1 3 . . . 
. . 3 1 1 1 1 1 1 1 3 . . . 
3 3 4 1 1 1 1 1 1 1 4 3 3 . 
. 3 1 1 5 1 1 1 5 1 1 3 . . 
3 3 1 5 3 5 5 5 3 5 1 3 3 . 
. 3 4 5 3 5 5 5 3 5 4 3 . . 
. . 3 1 5 5 3 5 5 1 3 . . . 
. 3 4 3 4 1 1 1 4 3 4 3 . . 
3 4 1 1 4 5 5 5 4 1 1 3 . . 
3 1 1 3 1 1 5 1 1 3 5 3 . . 
3 1 5 3 1 1 1 1 1 3 3 . . . 
. 3 3 3 1 1 1 3 3 3 3 . . . 
. . . 3 1 1 3 4 4 3 . . . . 
. . . 3 3 3 3 5 5 3 . . . . 
. . . . 3 3 3 . . . . . . . 
. . . . . . . . . . . . . . 
` ];
            case "tom_left": return [img`
. . . . . . . 3 3 3 . . . . 
. . . . . . 3 4 5 3 . . . . 
. . . . 3 3 3 5 5 3 . . . . 
. . . 3 1 1 1 1 1 1 3 . . . 
. . 3 1 1 1 1 1 1 1 3 . . . 
. . 3 1 5 1 1 1 1 1 3 . . . 
. . 3 5 3 5 4 1 1 1 3 . . . 
. . 3 5 3 5 1 1 1 1 3 . . . 
. . 3 5 5 4 4 1 1 1 3 . . . 
. . . 3 4 4 1 1 4 3 . . . . 
. . . 3 1 5 4 4 3 . . . . . 
. . . 3 5 3 1 1 3 . . . . . 
. . . 3 1 3 1 1 3 . . . . . 
. . . 3 1 3 5 1 3 . . . . . 
. . . 3 1 1 3 3 . . . . . . 
. . . 3 3 4 4 3 . . . . . . 
. . . 3 3 5 5 3 . . . . . . 
. . . . . . . . . . . . . . 
` , img`
. . . . . . . 3 3 3 . . . . 
. . . . . . 3 4 5 3 . . . . 
. . . . 3 3 3 5 5 3 . . . . 
. . . 3 1 1 1 1 1 1 3 . . . 
. . 3 1 1 1 1 1 1 1 3 . . . 
. . 3 1 5 1 1 1 1 1 3 . . . 
. . 3 5 3 5 4 1 1 1 3 . . . 
. . 3 5 3 5 1 1 1 1 3 . . . 
. . 3 5 5 4 4 1 1 1 3 . . . 
. . . 3 4 4 1 1 4 3 . . . . 
. . . 3 1 5 4 4 3 3 . . . . 
. . . 3 5 3 3 1 1 3 . . . . 
. . . 3 3 1 1 1 1 3 3 . . . 
. . 3 3 3 5 1 1 3 1 5 3 . . 
. . 3 5 1 3 3 3 1 1 5 3 . . 
. . . 3 5 1 3 3 3 3 3 . . . 
. . . . 3 3 . . . . . . . . 
. . . . . . . . . . . . . . 
` , img`
. . . . . . . 3 3 3 . . . . 
. . . . . . 3 4 5 3 . . . . 
. . . . 3 3 3 5 5 3 . . . . 
. . . 3 1 1 1 1 1 1 3 . . . 
. . 3 1 1 1 1 1 1 1 3 . . . 
. . 3 1 5 1 1 1 1 1 3 . . . 
. . 3 5 3 5 4 1 1 1 3 . . . 
. . 3 5 3 5 1 1 1 1 3 . . . 
. . 3 5 5 4 4 1 1 1 3 . . . 
. . . 3 4 4 1 1 4 3 . . . . 
. . . 3 1 5 4 4 3 . . . . . 
. . . 3 5 3 1 1 3 . . . . . 
. . . 3 1 3 1 1 3 . . . . . 
. . . 3 1 3 5 1 3 . . . . . 
. . . 3 1 1 3 3 . . . . . . 
. . . 3 3 4 4 3 . . . . . . 
. . . 3 3 5 5 3 . . . . . . 
. . . . . . . . . . . . . . 
` , img`
. . . . . . . 3 3 3 . . . . 
. . . . . . 3 4 5 3 . . . . 
. . . . 3 3 3 5 5 3 . . . . 
. . . 3 1 1 1 1 1 1 3 . . . 
. . 3 1 1 1 1 1 1 1 3 . . . 
. . 3 1 5 1 1 1 1 1 3 . . . 
. . 3 5 3 5 4 1 1 1 3 . . . 
. . 3 5 3 5 1 1 1 1 3 . . . 
. . 3 5 5 4 4 1 1 1 3 . . . 
. 3 3 3 4 4 1 1 4 3 . . . . 
. 3 5 3 5 5 1 1 1 1 3 . . . 
. . 3 3 5 1 1 1 4 1 1 3 . . 
. . 3 3 1 1 1 4 3 5 1 3 . . 
. . 3 3 3 1 1 4 3 3 3 . . . 
. . 3 5 1 1 1 1 3 5 3 . . . 
. . . 3 5 4 3 3 3 3 . . . . 
. . . . 3 3 . . . . . . . . 
. . . . . . . . . . . . . . 
` ];
            case "tom_up": return [img`
. . 3 3 . . . . . 3 3 . . . 
. . 3 4 3 1 1 1 3 4 3 . . . 
. . 3 1 4 3 3 3 4 1 3 . . . 
. . 3 1 1 1 1 1 1 1 3 . . . 
3 3 1 1 1 1 1 1 1 1 1 3 3 . 
. 3 1 1 1 1 1 1 1 1 1 3 . . 
3 3 1 1 1 1 1 1 1 1 1 3 3 . 
. 3 1 1 1 1 1 1 1 1 1 3 . . 
. . 3 1 1 1 1 1 1 1 3 . . . 
. 3 4 3 4 4 4 4 4 3 4 3 . . 
3 4 1 1 1 4 4 4 1 1 1 4 3 . 
3 1 1 3 1 1 1 1 1 3 1 1 3 . 
3 5 5 3 1 1 1 1 1 3 5 5 3 . 
. 3 3 3 1 1 1 1 1 3 3 3 . . 
. . . 3 1 1 4 1 1 3 . . . . 
. . . 3 4 4 3 4 4 3 . . . . 
. . . 3 5 5 3 5 5 3 . . . . 
. . . . . . . . . . . . . . 
` , img`
. . 3 3 . . . . . 3 3 . . . 
. . 3 4 3 1 1 1 3 4 3 . . . 
. . 3 1 4 3 3 3 4 1 3 . . . 
. . 3 1 1 1 1 1 1 1 3 . . . 
3 3 1 1 1 1 1 1 1 1 1 3 3 . 
. 3 1 1 1 1 1 1 1 1 1 3 . . 
3 3 1 1 1 1 1 1 1 1 1 3 3 . 
. 3 1 1 1 1 1 1 1 1 1 3 . . 
. . 3 1 1 1 1 1 1 1 3 . . . 
. 3 4 3 4 4 4 4 4 3 4 3 . . 
. 3 1 1 1 4 4 4 1 1 1 4 3 . 
. 3 5 3 1 1 1 1 1 3 1 1 3 . 
. . 3 3 1 1 1 1 1 3 5 1 3 . 
. . 3 3 3 3 1 1 1 3 3 3 . . 
. . . 3 4 4 3 1 1 3 . . . . 
. . . 3 5 5 3 3 3 3 . . . . 
. . . . . . 3 3 3 . . . . . 
. . . . . . . . . . . . . . 
` , img`
. . 3 3 . . . . . 3 3 . . . 
. . 3 4 3 1 1 1 3 4 3 . . . 
. . 3 1 4 3 3 3 4 1 3 . . . 
. . 3 1 1 1 1 1 1 1 3 . . . 
3 3 1 1 1 1 1 1 1 1 1 3 3 . 
. 3 1 1 1 1 1 1 1 1 1 3 . . 
3 3 1 1 1 1 1 1 1 1 1 3 3 . 
. 3 1 1 1 1 1 1 1 1 1 3 . . 
. . 3 1 1 1 1 1 1 1 3 . . . 
. 3 4 3 4 4 4 4 4 3 4 3 . . 
3 4 1 1 1 4 4 4 1 1 1 4 3 . 
3 1 1 3 1 1 1 1 1 3 1 1 3 . 
3 5 5 3 1 1 1 1 1 3 5 5 3 . 
. 3 3 3 1 1 1 1 1 3 3 3 . . 
. . . 3 1 1 4 1 1 3 . . . . 
. . . 3 4 4 3 4 4 3 . . . . 
. . . 3 5 5 3 5 5 3 . . . . 
. . . . . . . . . . . . . . 
` , img`
. . 3 3 . . . . . 3 3 . . . 
. . 3 4 3 1 1 1 3 4 3 . . . 
. . 3 1 4 3 3 3 4 1 3 . . . 
. . 3 1 1 1 1 1 1 1 3 . . . 
3 3 1 1 1 1 1 1 1 1 1 3 3 . 
. 3 1 1 1 1 1 1 1 1 1 3 . . 
3 3 1 1 1 1 1 1 1 1 1 3 3 . 
. 3 1 1 1 1 1 1 1 1 1 3 . . 
. . 3 1 1 1 1 1 1 1 3 . . . 
. 3 4 3 4 4 4 4 4 3 4 3 . . 
3 4 1 1 1 4 4 4 1 1 1 3 . . 
3 1 1 3 1 1 1 1 1 3 5 3 . . 
3 1 5 3 1 1 1 1 1 3 3 . . . 
. 3 3 3 1 1 1 3 3 3 3 . . . 
. . . 3 1 1 3 4 4 3 . . . . 
. . . 3 3 3 3 5 5 3 . . . . 
. . . . 3 3 3 . . . . . . . 
. . . . . . . . . . . . . . 
` ];
        }
        return null;
    }

    export const ATRIUM_NAME = "Atrium";
    export const NEXUS_NAME = "Nexus";
    export const CORRIDOR_NAME = "Corridor";
    export const STORAGE_NAME = "Storage";
    export const LIBRARY_NAME = "Library";
    export const OBELISK_NAME = "Obelisk";
    export const GYM_NAME = "Gym";
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
    export const TOM_DOWN_TILE = "tom_down";
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
    export const TILE131_TILE = "tile131";
    export const TILE132_TILE = "tile132";
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
    export const TILE148_TILE = "tile148";
    export const TILE149_TILE = "tile149";
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
    export const TILE178_TILE = "tile178";
    export const TILE179_TILE = "tile179";
    export const TILE180_TILE = "tile180";
    export const TILE181_TILE = "tile181";
    export const TILE182_TILE = "tile182";
    export const TILE183_TILE = "tile183";
    export const TILE184_TILE = "tile184";
    export const TILE185_TILE = "tile185";
    export const TILE186_TILE = "tile186";
    export const TILE187_TILE = "tile187";
    export const TILE188_TILE = "tile188";
    export const CRATE_TILE = "Crate";
    export const TILE189_TILE = "tile189";
    export const TILE190_TILE = "tile190";
    export const TILE191_TILE = "tile191";
    export const TILE192_TILE = "tile192";
    export const DARTSHOOTER_TILE = "DartShooter";
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
    export const PIT_TILE = "Pit";
    export const TILE215_TILE = "tile215";
    export const TILE216_TILE = "tile216";
    export const DARTSHOOTER_1_TILE = "DartShooter_1";
    export const TILE217_TILE = "tile217";
    export const TILE218_TILE = "tile218";
    export const TILE219_TILE = "tile219";
    export const TILE220_TILE = "tile220";
    export const TILE221_TILE = "tile221";
    export const TILE222_TILE = "tile222";
    export const TILE223_TILE = "tile223";
    export const TILE224_TILE = "tile224";
    export const TILE225_TILE = "tile225";
    export const TILE226_TILE = "tile226";
    export const TILE227_TILE = "tile227";
    export const TILE228_TILE = "tile228";
    export const TILE229_TILE = "tile229";
    export const TILE230_TILE = "tile230";
    export const TILE231_TILE = "tile231";
    export const TILE232_TILE = "tile232";
    export const TILE233_TILE = "tile233";
    export const TILE234_TILE = "tile234";
    export const SWITCH_TILE = "Switch";
    export const TILE235_TILE = "tile235";
    export const TILE236_TILE = "tile236";
    export const TILE237_TILE = "tile237";
    export const TILE238_TILE = "tile238";
    export const TILE239_TILE = "tile239";
    export const TILE240_TILE = "tile240";
    export const TILE241_TILE = "tile241";
    export const TILE242_TILE = "tile242";
    export const TILE243_TILE = "tile243";
    export const TILE244_TILE = "tile244";
    export const TILE245_TILE = "tile245";
    export const TILE246_TILE = "tile246";
    export const TILE247_TILE = "tile247";
    export const TILE248_TILE = "tile248";
    export const TILE249_TILE = "tile249";
    export const TILE250_TILE = "tile250";
    export const TILE251_TILE = "tile251";
    export const TILE252_TILE = "tile252";
    export const SPIKES_TILE = "Spikes";
    export const TILE253_TILE = "tile253";
    export const SPIKES_1_TILE = "Spikes_1";
    export const TILE254_TILE = "tile254";
    export const TILE255_TILE = "tile255";
    export const TILE256_TILE = "tile256";
    export const TILE257_TILE = "tile257";
    export const TILE258_TILE = "tile258";
    export const TILE259_TILE = "tile259";
    export const TILE260_TILE = "tile260";
    export const PRESSUREPLATE_TILE = "PressurePlate";
    export const TILE261_TILE = "tile261";
    export const TILE262_TILE = "tile262";
    export const TILE263_TILE = "tile263";
    export const TILE264_TILE = "tile264";
    export const TILE265_TILE = "tile265";
    export const TILE266_TILE = "tile266";
    export const TILE267_TILE = "tile267";
    export const TILE268_TILE = "tile268";
    export const TILE269_TILE = "tile269";
    export const TILE270_TILE = "tile270";
    export const TILE271_TILE = "tile271";
    export const TILE272_TILE = "tile272";
    export const TILE273_TILE = "tile273";
    export const TILE274_TILE = "tile274";
    export const TILE275_TILE = "tile275";
    export const TILE276_TILE = "tile276";
    export const TILE277_TILE = "tile277";
    export const TILE278_TILE = "tile278";
    export const TILE279_TILE = "tile279";
    export const TILE280_TILE = "tile280";
    export const TILE281_TILE = "tile281";
    export const TILE282_TILE = "tile282";
    export const TILE283_TILE = "tile283";
    export const TILE284_TILE = "tile284";
    export const TILE285_TILE = "tile285";
    export const TILE286_TILE = "tile286";
    export const TILE287_TILE = "tile287";
    export const TILE288_TILE = "tile288";
    export const TILE289_TILE = "tile289";
    export const TILE290_TILE = "tile290";
    export const BOMB_TILE = "Bomb";
    export const TILE291_TILE = "tile291";
    export const TILE292_TILE = "tile292";
    export const TILE293_TILE = "tile293";
    export const TILE294_TILE = "tile294";
    export const TILE295_TILE = "tile295";
    export const TILE296_TILE = "tile296";
    export const TILE297_TILE = "tile297";
    export const TILE298_TILE = "tile298";
    export const TILE299_TILE = "tile299";
    export const TILE300_TILE = "tile300";
    export const TILE301_TILE = "tile301";
    export const TILE302_TILE = "tile302";
    export const TILE303_TILE = "tile303";
    export const TILE304_TILE = "tile304";
    export const TILE305_TILE = "tile305";
    export const TILE306_TILE = "tile306";
    export const TILE307_TILE = "tile307";
    export const TILE308_TILE = "tile308";
    export const TILE309_TILE = "tile309";
    export const TILE310_TILE = "tile310";
    export const DOOR_TILE = "Door";
    export const MERGED191_TILE = "merged191";
    export const MERGED192_TILE = "merged192";
    export const MERGED193_TILE = "merged193";
    export const MERGED194_TILE = "merged194";
    export const MERGED195_TILE = "merged195";
    export const MERGED196_TILE = "merged196";
    export const MERGED197_TILE = "merged197";
    export const MERGED198_TILE = "merged198";
    export const MERGED199_TILE = "merged199";
    export const MERGED200_TILE = "merged200";
    export const MERGED201_TILE = "merged201";
    export const MERGED202_TILE = "merged202";
    export const MERGED204_TILE = "merged204";
    export const MERGED205_TILE = "merged205";
    export const MERGED206_TILE = "merged206";
    export const MERGED207_TILE = "merged207";
    export const MERGED203_TILE = "merged203";
    export const MERGED208_TILE = "merged208";
    export const MERGED209_TILE = "merged209";
    export const MERGED210_TILE = "merged210";
    export const MERGED63_TILE = "merged63";
    export const MERGED211_TILE = "merged211";
    export const MERGED212_TILE = "merged212";
    export const MERGED213_TILE = "merged213";
    export const MERGED214_TILE = "merged214";
    export const MERGED215_TILE = "merged215";
    export const MERGED216_TILE = "merged216";
    export const MERGED217_TILE = "merged217";
    export const MERGED218_TILE = "merged218";
    export const MERGED219_TILE = "merged219";
    export const MERGED220_TILE = "merged220";
    export const MERGED221_TILE = "merged221";
    export const MERGED222_TILE = "merged222";
    export const MERGED223_TILE = "merged223";
    export const MERGED224_TILE = "merged224";
    export const MERGED225_TILE = "merged225";
    export const MERGED226_TILE = "merged226";
    export const MERGED227_TILE = "merged227";
    export const MERGED228_TILE = "merged228";
    export const MERGED229_TILE = "merged229";
    export const MERGED230_TILE = "merged230";
    export const MERGED231_TILE = "merged231";
    export const MERGED232_TILE = "merged232";
    export const MERGED233_TILE = "merged233";
    export const MERGED234_TILE = "merged234";
    export const MERGED235_TILE = "merged235";
    export const MERGED236_TILE = "merged236";
    export const MERGED237_TILE = "merged237";
    export const MERGED71_TILE = "merged71";
    export const MERGED72_TILE = "merged72";
    export const MERGED73_TILE = "merged73";
    export const MERGED74_TILE = "merged74";
    export const MERGED75_TILE = "merged75";
    export const MERGED76_TILE = "merged76";
    export const MERGED77_TILE = "merged77";
    export const MERGED84_TILE = "merged84";
    export const MERGED85_TILE = "merged85";
    export const MERGED86_TILE = "merged86";
    export const MERGED87_TILE = "merged87";
    export const MERGED88_TILE = "merged88";
    export const MERGED89_TILE = "merged89";
    export const MERGED90_TILE = "merged90";
    export const MERGED100_TILE = "merged100";
    export const MERGED101_TILE = "merged101";
    export const MERGED102_TILE = "merged102";
    export const MERGED103_TILE = "merged103";
    export const MERGED104_TILE = "merged104";
    export const MERGED53_TILE = "merged53";
    export const MERGED60_TILE = "merged60";
    export const MERGED105_TILE = "merged105";
    export const MERGED110_TILE = "merged110";
    export const MERGED111_TILE = "merged111";
    export const MERGED112_TILE = "merged112";
    export const MERGED113_TILE = "merged113";
    export const MERGED114_TILE = "merged114";
    export const MERGED115_TILE = "merged115";
    export const MERGED116_TILE = "merged116";
    export const MERGED117_TILE = "merged117";
    export const MERGED118_TILE = "merged118";
    export const MERGED69_TILE = "merged69";
    export const MERGED119_TILE = "merged119";
    export const MERGED122_TILE = "merged122";
    export const MERGED123_TILE = "merged123";
    export const MERGED35_TILE = "merged35";
    export const MERGED36_TILE = "merged36";
    export const MERGED126_TILE = "merged126";
    export const MERGED127_TILE = "merged127";
    export const MERGED128_TILE = "merged128";
    export const MERGED133_TILE = "merged133";
    export const MERGED134_TILE = "merged134";
    export const MERGED141_TILE = "merged141";
    export const MERGED142_TILE = "merged142";
    export const MERGED163_TILE = "merged163";
    export const MERGED164_TILE = "merged164";
    export const MERGED165_TILE = "merged165";
    export const MERGED166_TILE = "merged166";
    export const MERGED171_TILE = "merged171";
    export const MERGED172_TILE = "merged172";
    export const MERGED173_TILE = "merged173";
    export const MERGED174_TILE = "merged174";
    export const MERGED175_TILE = "merged175";
    export const MERGED176_TILE = "merged176";
    export const MERGED177_TILE = "merged177";
    export const MERGED178_TILE = "merged178";
    export const MERGED179_TILE = "merged179";
    export const MERGED180_TILE = "merged180";
    export const MERGED181_TILE = "merged181";
    export const MERGED182_TILE = "merged182";
    export const MERGED25_TILE = "merged25";
    export const MERGED26_TILE = "merged26";
    export const MERGED27_TILE = "merged27";
    export const MERGED28_TILE = "merged28";
    export const MERGED183_TILE = "merged183";
    export const MERGED184_TILE = "merged184";
    export const MERGED185_TILE = "merged185";
    export const MERGED186_TILE = "merged186";
    export const MERGED187_TILE = "merged187";
    export const MERGED33_TILE = "merged33";
    export const MERGED34_TILE = "merged34";
    export const MERGED159_TILE = "merged159";
    export const MERGED188_TILE = "merged188";
    export const MERGED189_TILE = "merged189";
    export const MERGED190_TILE = "merged190";
    export const MERGED96_TILE = "merged96";
    export const MERGED97_TILE = "merged97";
    export const MERGED98_TILE = "merged98";
    export const MERGED99_TILE = "merged99";
    export const MERGED106_TILE = "merged106";
    export const MERGED107_TILE = "merged107";
    export const MERGED108_TILE = "merged108";
    export const MERGED109_TILE = "merged109";
    export const MERGED3_TILE = "merged3";
    export const MERGED4_TILE = "merged4";
    export const MERGED5_TILE = "merged5";
    export const MERGED6_TILE = "merged6";
    export const MERGED7_TILE = "merged7";
    export const MERGED8_TILE = "merged8";
    export const MERGED9_TILE = "merged9";
    export const MERGED10_TILE = "merged10";
    export const MERGED11_TILE = "merged11";
    export const MERGED12_TILE = "merged12";
    export const MERGED13_TILE = "merged13";
    export const MERGED14_TILE = "merged14";
    export const MERGED15_TILE = "merged15";
    export const MERGED16_TILE = "merged16";
    export const MERGED17_TILE = "merged17";
    export const MERGED18_TILE = "merged18";
    export const MERGED19_TILE = "merged19";
    export const MERGED20_TILE = "merged20";
    export const MERGED21_TILE = "merged21";
    export const MERGED22_TILE = "merged22";
    export const MERGED23_TILE = "merged23";
    export const MERGED24_TILE = "merged24";
    export const MERGED29_TILE = "merged29";
    export const MERGED30_TILE = "merged30";
    export const MERGED31_TILE = "merged31";
    export const MERGED32_TILE = "merged32";
    export const MERGED37_TILE = "merged37";
    export const MERGED38_TILE = "merged38";
    export const MERGED39_TILE = "merged39";
    export const MERGED40_TILE = "merged40";
    export const MERGED41_TILE = "merged41";
    export const MERGED42_TILE = "merged42";
    export const MERGED43_TILE = "merged43";
    export const MERGED44_TILE = "merged44";
    export const MERGED45_TILE = "merged45";
    export const MERGED46_TILE = "merged46";
    export const MERGED47_TILE = "merged47";
    export const MERGED48_TILE = "merged48";
    export const MERGED49_TILE = "merged49";
    export const MERGED50_TILE = "merged50";
    export const MERGED51_TILE = "merged51";
    export const MERGED52_TILE = "merged52";
    export const MERGED54_TILE = "merged54";
    export const MERGED55_TILE = "merged55";
    export const MERGED56_TILE = "merged56";
    export const MERGED57_TILE = "merged57";
    export const MERGED58_TILE = "merged58";
    export const MERGED59_TILE = "merged59";
    export const MERGED61_TILE = "merged61";
    export const MERGED62_TILE = "merged62";
    export const MERGED64_TILE = "merged64";
    export const MERGED65_TILE = "merged65";
    export const MERGED66_TILE = "merged66";
    export const MERGED67_TILE = "merged67";
    export const MERGED68_TILE = "merged68";
    export const MERGED70_TILE = "merged70";
    export const MERGED80_TILE = "merged80";
    export const MERGED81_TILE = "merged81";
    export const MERGED82_TILE = "merged82";
    export const MERGED83_TILE = "merged83";
    export const MERGED92_TILE = "merged92";
    export const MERGED93_TILE = "merged93";
    export const MERGED94_TILE = "merged94";
    export const MERGED95_TILE = "merged95";
    export const MERGED137_TILE = "merged137";
    export const MERGED138_TILE = "merged138";
    export const MERGED139_TILE = "merged139";
    export const MERGED140_TILE = "merged140";
    export const MERGED145_TILE = "merged145";
    export const MERGED146_TILE = "merged146";
    export const MERGED147_TILE = "merged147";
    export const MERGED148_TILE = "merged148";
    export const MERGED151_TILE = "merged151";
    export const MERGED152_TILE = "merged152";
    export const MERGED155_TILE = "merged155";
    export const MERGED156_TILE = "merged156";
    export const MERGED160_TILE = "merged160";
    export const MERGED161_TILE = "merged161";
    export const MERGED162_TILE = "merged162";
    export const MERGED167_TILE = "merged167";
    export const MERGED168_TILE = "merged168";
    export const MERGED169_TILE = "merged169";
    export const MERGED170_TILE = "merged170";
    export const MERGED91_TILE = "merged91";
    export const MERGED120_TILE = "merged120";
    export const MERGED121_TILE = "merged121";
    export const MERGED124_TILE = "merged124";
    export const MERGED125_TILE = "merged125";
    export const MERGED129_TILE = "merged129";
    export const MERGED130_TILE = "merged130";
    export const MERGED131_TILE = "merged131";
    export const MERGED132_TILE = "merged132";
    export const MERGED135_TILE = "merged135";
    export const MERGED136_TILE = "merged136";
    export const MERGED143_TILE = "merged143";
    export const MERGED144_TILE = "merged144";
    export const MERGED149_TILE = "merged149";
    export const MERGED150_TILE = "merged150";
    export const MERGED153_TILE = "merged153";
    export const MERGED154_TILE = "merged154";
    export const MERGED157_TILE = "merged157";
    export const MERGED158_TILE = "merged158";
    export const MERGED1_TILE = "merged1";
    export const MERGED2_TILE = "merged2";
    export const MERGED78_TILE = "merged78";
    export const MERGED79_TILE = "merged79";

    export const transparency16 = image.ofBuffer(hex`87040800080000000000000000000000000000000000000000000000000000000000000000000000`);
    export const tile1 = image.ofBuffer(hex`87040800080000001441443424421134222111341221113422214234244211342441113424411134`);
    export const tile2 = image.ofBuffer(hex`87040800080000001441443444441134143144341334443343343333333344331334143414411134`);
    export const tile3 = image.ofBuffer(hex`87040800080000000000000000000030000000300000003000000030000000300000003000000030`);
    export const tile4 = image.ofBuffer(hex`87040800080000000000003000000030000000300000003000000030000000300000003000000030`);
    export const tile5 = image.ofBuffer(hex`87040800080000000000003000000030000000300000003000000030000000300000003000000030`);
    export const tile6 = image.ofBuffer(hex`87040800080000000000003000000030000000300000003000000030000000300000003000000000`);
    export const tile7 = image.ofBuffer(hex`87040800080000004444444444444444444444444444444444444444444444444444444444444424`);
    export const tile8 = image.ofBuffer(hex`87040800080000004444442444444434444444344444444444444444444444444444444444444444`);
    export const tile9 = image.ofBuffer(hex`87040800080000004444333344343333443333334433333344333333443333334433333344343333`);
    export const tile10 = image.ofBuffer(hex`87040800080000004444333344443333443433334433333344333333443333334434333344443333`);
    export const tile11 = image.ofBuffer(hex`87040800080000002222222222222222222222222222222222222222222212222222221122221211`);
    export const tile12 = image.ofBuffer(hex`87040800080000004433333344333333443333334433333344333333443333334433333344333333`);
    export const tile13 = image.ofBuffer(hex`87040800080000002222221122222211222212122222222222222222222222222222222222222222`);
    export const tile14 = image.ofBuffer(hex`87040800080000004433333344333333443333334433333344333333443333334433333344333333`);
    export const tile15 = image.ofBuffer(hex`87040800080000004444444414141414141114111414141414111411141114111411141114111411`);
    export const tile16 = image.ofBuffer(hex`87040800080000002222242222222422221143344344433422114334221133332211433443444334`);
    export const tile17 = image.ofBuffer(hex`87040800080000001411141114111411141114111411141114141414141114111414141444444444`);
    export const tile18 = image.ofBuffer(hex`87040800080000002211433422113333221143344344433422114334221133332221224222212242`);
    export const tile19 = image.ofBuffer(hex`87040800080000002211433422113333333333333333333333333333333333333333333333333333`);
    export const tile20 = image.ofBuffer(hex`87040800080000003333333333333333333333333333333333333333333333332211433422114334`);
    export const tile21 = image.ofBuffer(hex`87040800080000003333333344444434111444334141343314444333413434334444333343343433`);
    export const tile22 = image.ofBuffer(hex`87040800080000003414433341433134341414334141413414143434114141334444443433333333`);
    export const tile23 = image.ofBuffer(hex`87040800080000000000000000000000000000000000000000000000000000000000000000000000`);
    export const tile24 = image.ofBuffer(hex`87040800080000000000003000000013000030410000303400004234000042330000423300004233`);
    export const tile25 = image.ofBuffer(hex`87040800080000000000424300004233000042330000423400002034000010440000004200000020`);
    export const tile26 = image.ofBuffer(hex`87040800080000000000000000000000000000000000000000000000000000000000000000000000`);
    export const tile27 = image.ofBuffer(hex`87040800080000000000000000000000000000000033330030444403431144031441430311114403`);
    export const tile28 = image.ofBuffer(hex`87040800080000001111430311413303111434031141340343443400303303000000000000000000`);
    export const tile29 = image.ofBuffer(hex`87041000100000004444333333333333443433333333333344333333333333334433333333333333443333333333333344333333333333334433333333333333443433333333333344443333333333334444333333333333443433333333333344333333333333334433333333333333443333333333333344343333333333334444333333333333`);
    export const tile30 = image.ofBuffer(hex`87041000100000004433333333333333443333333333333344333333333333334433333333333333443333333333333344333333333333334433333333333333443333333333333344333333333333334433333333333333443333333333333344333333333333334433333333333333443333333333333344333333333333334433333333333333`);
    export const tile31 = image.ofBuffer(hex`87040800080000003333333323222222231111112311111123111111231111112311111123111111`);
    export const tile32 = image.ofBuffer(hex`87040800080000002311111123111111231111112311111123111111231111112344444433333333`);
    export const tile33 = image.ofBuffer(hex`87040800080000000000000000000000000010000000100000001010000011110000111100001011`);
    export const tile34 = image.ofBuffer(hex`87040800080000000000111100001111000001110000011000000000000000000000000000000000`);
    export const tile35 = image.ofBuffer(hex`87040800080000000000000000000000000000000010000000000100000011100000104100001044`);
    export const tile36 = image.ofBuffer(hex`87040800080000000000101400001101000010000000010000100000000000000000000000000000`);
    export const tile37 = image.ofBuffer(hex`87040800080000001134433131444431311443334414434431344331314444334414433333444444`);
    export const tile38 = image.ofBuffer(hex`87040800080000003333333322221111424444444211111142111111421111114211111141111111`);
    export const tile39 = image.ofBuffer(hex`87040800080000004111111141111111411111114111111141111111411111114211111142111111`);
    export const tile40 = image.ofBuffer(hex`87040800080000004211111142111111421111114211111142111111421111114211111142111111`);
    export const tile41 = image.ofBuffer(hex`87040800080000004211111142111111421111114211111142111111424444442244444433333333`);
    export const tile42 = image.ofBuffer(hex`87040800080000003243444433434444334444444444444444444444444444444444444444444444`);
    export const tile43 = image.ofBuffer(hex`87040800080000003333333333333333333333333333333333333333333333333333333333333333`);
    export const tile44 = image.ofBuffer(hex`87040800080000003333333333333333333333333333333333333333333333333333333333333333`);
    export const tile45 = image.ofBuffer(hex`87040800080000002222222222222222222222222222222222222222212122222221222211222222`);
    export const tile46 = image.ofBuffer(hex`87040800080000003333333333333333333333333333333333333333333333333333333333333333`);
    export const tile47 = image.ofBuffer(hex`87040800080000001121222211222222122122222222222222222222222222222222222222222222`);
    export const tile48 = image.ofBuffer(hex`87040800080000003333333333333333333333333333333333333333333333333333333333333333`);
    export const tile49 = image.ofBuffer(hex`87040800080000004444444414141414141114111414141414111411141114111411141114111411`);
    export const tile50 = image.ofBuffer(hex`87040800080000002211433422113333221143344344433422114334221133332211433443444334`);
    export const tile51 = image.ofBuffer(hex`87040800080000001411141114111411141114111411141114141414141114111414141444444444`);
    export const tile52 = image.ofBuffer(hex`87040800080000002211433422113333221143344344433422114334221133332211433422114334`);
    export const tile53 = image.ofBuffer(hex`87040800080000002211242222112422333333333333333333333333333333333333333333333333`);
    export const tile54 = image.ofBuffer(hex`87040800080000003333333333333333333333333333333333333333333333332241224222412242`);
    export const tile55 = image.ofBuffer(hex`87040800080000000000000000000000000000000000000000000000000001000010120000212401`);
    export const tile56 = image.ofBuffer(hex`87040800080000003033220130332301000030120000002300011130101223312132231221224222`);
    export const tile57 = image.ofBuffer(hex`87040800080000000000000000000000000000000000000000000000003033333013414413413333`);
    export const tile58 = image.ofBuffer(hex`87040800080000002122221221123421101133311011113300333333000000200000001230332331`);
    export const tile59 = image.ofBuffer(hex`87040800080000004133131134434444333333333333333314111111444444443333333333333333`);
    export const tile60 = image.ofBuffer(hex`87040800080000003023123300323100002131000030330000000000000000000000000000000000`);
    export const tile61 = image.ofBuffer(hex`87041000100000000000000000301234000000000030123400000000003012340000000000301234000000000030123400000000003012340000000000301234000000000030123400000000003012340000000000301234000000000030123400000000003012340000000000301234000000000030123400000000003012340000000000301234`);
    export const tile62 = image.ofBuffer(hex`87040800080000001411111144444444333333333333333343141111334444443433333344333333`);
    export const tile63 = image.ofBuffer(hex`87040800080000004244331120414444002012120000000000000000000000000000000000000000`);
    export const tile64 = image.ofBuffer(hex`87041000100000000000000022311234000000002231123400000000223112340000000043341234000000002231123400000000223112340000000022311234000000004334123400000000223112340000000022311234000000002231123400000000433412340000000022311234000000002231123400000000223112340000000043341234`);
    export const tile65 = image.ofBuffer(hex`87041000100000001411111111111141444111111111144414111111111111414444444444444444141111111111114144411111111114441411111111111141444444444444444414111111111111414441111111111444141111111111114144444444444444441411111111111141444111111111144414111111111111414444444444444444`);
    export const tile66 = image.ofBuffer(hex`87040800080000003333333322222222111111111111111111111111111111111111111111111111`);
    export const tile67 = image.ofBuffer(hex`87040800080000001111111111111111111111111111111111111111111111114444444433333333`);
    export const tile68 = image.ofBuffer(hex`87040800080000000000000000000000000001000101000011110100111100001111000011010000`);
    export const tile69 = image.ofBuffer(hex`87040800080000001111000011110100111100000001010000010000100000000000000000000000`);
    export const tile70 = image.ofBuffer(hex`87040800080000000000000000000000000100000001000010000000010000000000000001000000`);
    export const tile71 = image.ofBuffer(hex`87040800080000000100000011000000100000000001000000010000000000000000000000000000`);
    export const tile72 = image.ofBuffer(hex`87040800080000001441444344443131144113412431313314311144441333332413414424133333`);
    export const tile73 = image.ofBuffer(hex`87041000100000003333333333333333431111112212113133444444444444343333333333333333431111212211113133444444444444343333333333333333431121221111113133444444444444343333333333333333431122121111113133444444444444343333333333333333432122111111113133444444444444343333333333333333`);
    export const tile74 = image.ofBuffer(hex`87040800080000001443441444433333243144411431343314411344444431342441113324411134`);
    export const tile75 = image.ofBuffer(hex`87040800080000003333333333441133431433314331441343314413431433313344113333333333`);
    export const tile76 = image.ofBuffer(hex`87041000100000003333331144333333431131114113113133443411444344343333331241333333431131124413113133443333414344343333233233333333431123231132113133442323313244343333233233333333431133334113113133443412444344343333331241333333432132114413113133443411414344343333331144333333`);
    export const tile77 = image.ofBuffer(hex`87040800080000003333000021223333442444434124444341144143411441434114414341144143`);
    export const tile78 = image.ofBuffer(hex`87040800080000004114414341144143411441434114414341144143411441434114414341144143`);
    export const tile79 = image.ofBuffer(hex`87040800080000002222232232333333323243333243444432434444244344442443444432434444`);
    export const tile80 = image.ofBuffer(hex`87040800080000004114414341144143411441434114414341144143411441434114414341144143`);
    export const tile81 = image.ofBuffer(hex`87040800080000003243444432434444324444443243444424434444244344442443444432434444`);
    export const tile82 = image.ofBuffer(hex`87040800080000004114414341144143411441434134414341344133443444444434333333330000`);
    export const tile83 = image.ofBuffer(hex`87040800080000003243444432434444324344442443444424434444244444443243444432434444`);
    export const tile84 = image.ofBuffer(hex`87040800080000003243444432444444244344442443444424434444324324443243444422222224`);
    export const tile85 = image.ofBuffer(hex`87040800080000001111111111211211212222121122222221212222112222221122222211222222`);
    export const tile86 = image.ofBuffer(hex`87040800080000002121222221212222112122221122222221222222212122221122222211212222`);
    export const tile87 = image.ofBuffer(hex`87040800080000002121222221212222212122221122222211212222212122222122222211212222`);
    export const tile88 = image.ofBuffer(hex`87040800080000002122222211222222112222221122222221222222211122212112211111111111`);
    export const tile89 = image.ofBuffer(hex`87040800080000002222242222222422221143344344433422114334221133332211433443444334`);
    export const tile90 = image.ofBuffer(hex`87040800080000004444444414141414141114111414141414111411141114111411141114111411`);
    export const tile91 = image.ofBuffer(hex`87040800080000002211433422113333221143344344433422114334221133332211433443444334`);
    export const tile92 = image.ofBuffer(hex`87040800080000001411141114111411141114111411141114141414141114111414141444444444`);
    export const tile93 = image.ofBuffer(hex`87040800080000002211433422113333221143344344433422114334221133332211433443444334`);
    export const tile94 = image.ofBuffer(hex`87040800080000002211433422113333221143344344433422114334221133332221224222212242`);
    export const tile95 = image.ofBuffer(hex`87040800080000000000000000000000000000000000000000000000000000000000000000000000`);
    export const tile96 = image.ofBuffer(hex`87040800080000000000000000000000000000000100000012100101232112122321232323212323`);
    export const tile97 = image.ofBuffer(hex`87040800080000000000000000000000000000000000000000000000333333334444443333334133`);
    export const tile98 = image.ofBuffer(hex`87040800080000001122222213212323132313131313313132333303310000000300000003000000`);
    export const tile99 = image.ofBuffer(hex`87040800080000001131413344343434333341333333413311314133443434343333443333334133`);
    export const tile100 = image.ofBuffer(hex`87040800080000000000000000000000000000000000000000000000000000000000000000000000`);
    export const tile101 = image.ofBuffer(hex`87040800080000001131413344343434333341333333413311314133443434343333413333334133`);
    export const tile102 = image.ofBuffer(hex`87040800080000001111413344444433111111330000000000000000000000000000000000000000`);
    export const tile103 = image.ofBuffer(hex`87040800080000003333333322222222111111111111111111111111111111111111111111111111`);
    export const tile104 = image.ofBuffer(hex`87040800080000001111111111111111111111111111111111111111111111114444444433333333`);
    export const tile105 = image.ofBuffer(hex`870408001000000000000000000000000000000000000000000000113100000000001021323300000000212232333303000010113233000000000010310000000000000000000000`);
    export const tile106 = image.ofBuffer(hex`87040800080000000000000000000000000000000000000000000000000000000000000000000000`);
    export const tom_down = image.ofBuffer(hex`87040e0012000000000003030033030000000033333014350000333314414311350000431111553131333303301451334514114105101311551515114105101311551355113403101311551515114105301451334514114105431111553131333303333314414311350000000033333014350000000003030033030000000000000000000000`);
    export const tile107 = image.ofBuffer(hex`87040800080000000000000000000000000000000000000000000000000000000000000000000000`);
    export const tile108 = image.ofBuffer(hex`87040800080000000000003333333334444444343333433344444433111141333133413341314133`);
    export const tile109 = image.ofBuffer(hex`87040800080000004131413341314133413141334131413341314133413141334131413341314133`);
    export const tile110 = image.ofBuffer(hex`87041000100000001111111111111111010000000000000001000000000000000100000000000000010000000000000001000000000000000100000000000000010000000000000001000000000000000100000000000000010000000000000001000000000000000100000000000000010000000000000001000000000000000100000000000000`);
    export const tile111 = image.ofBuffer(hex`87040800080000003222222333333333333432332444444444444444444444444444444444444444`);
    export const tile112 = image.ofBuffer(hex`87040800080000004131413341314133413141334131413341314133413141334131413341314133`);
    export const tile113 = image.ofBuffer(hex`87040800080000004444444444444444444444444444444444444444444444444444444444444444`);
    export const tile114 = image.ofBuffer(hex`87040800080000004134413311114133111141334444443333334334444444343333333400000033`);
    export const tile115 = image.ofBuffer(hex`87041000100000002211433443442441221133333331444422114334333124224344433433312412221143343331241222113333333124112211433433312411434443343331241122114334333124412211333333314444221143343331242243444334333124122211433433312412221133333331241222114334333124124344433433312411`);
    export const tile116 = image.ofBuffer(hex`87040800080000004444444444444444444444444444444444444444444444444444444444444444`);
    export const tile117 = image.ofBuffer(hex`87040800080000004444444444444444444444444444444444444444444444424442444422242224`);
    export const tile118 = image.ofBuffer(hex`87040800080000001111111121221111211211122222222222222222222222222222222222222222`);
    export const tile119 = image.ofBuffer(hex`87040800080000002222222222222222222222222222222222222222222222222222222222222222`);
    export const tile120 = image.ofBuffer(hex`87040800080000002222222222222222222222222222222222222222222222222222222222222222`);
    export const tile121 = image.ofBuffer(hex`87040800080000002222222222222222222222222222222222222222112212112222211211211111`);
    export const tile122 = image.ofBuffer(hex`87040800080000002422242224222422333333333333333333333333333333333333333333333333`);
    export const tile123 = image.ofBuffer(hex`87040800080000004444444414141414141114111414141414111411141114111411141114111411`);
    export const tile124 = image.ofBuffer(hex`87040800080000001411141114111411141114111411141114141414141114111414141444444444`);
    export const tile125 = image.ofBuffer(hex`87040800080000003333333333333333333333333333333333333333333333333333333333333333`);
    export const tile126 = image.ofBuffer(hex`87040800080000003333333333333333333333333333333333333333333333333333333333333333`);
    export const tile127 = image.ofBuffer(hex`87040800080000003333333333333333333333333333333333333333333333332242224222422242`);
    export const tile128 = image.ofBuffer(hex`87040800080000003333333333333333333333333333333333333333333333333333333333333333`);
    export const tile129 = image.ofBuffer(hex`87040800080000003333333333333333333333333333333333333333333333333333333333333333`);
    export const tile130 = image.ofBuffer(hex`87040800080000003333333333333333333333333333333333333333333333331111111133333333`);
    export const tile131 = image.ofBuffer(hex`87040800080000000000000000000000000000000000001000001021111121222222333311334444`);
    export const tile132 = image.ofBuffer(hex`87040800080000003111144111222112123333233300002300000030000000000000000000000000`);
    export const tile133 = image.ofBuffer(hex`87040800080000000000000000000000000000000000000000000000000000000000000000000000`);
    export const tile134 = image.ofBuffer(hex`87040800080000000000000000000000000000000000003000000020000000200000002000000020`);
    export const tile135 = image.ofBuffer(hex`87040800080000000000002000000020000000200000002000000000000000000000000000000000`);
    export const tile136 = image.ofBuffer(hex`87042000200000000000000000000000000000000000000000000000000000000000003333030000000000000000000000003311113103000000000000000000003011211111340000000000000000000030112212113100000000000000000000132112114141030000000000000000001311121111440300000000000000003013111211144403000000000000000033131111414144030000000000000030301314141444440300000000000000300043414141444403000000000000000003304444444434000000000000000000003044444444340000000000000000000000334444340300000000000000000000000033330300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`);
    export const tile137 = image.ofBuffer(hex`87040800080000000000000000000000003033330030123400301234003012340030123400301234`);
    export const tile138 = image.ofBuffer(hex`87040800080000000030123400301234003012340030123400301234003012340030123400301234`);
    export const tile139 = image.ofBuffer(hex`87040800080000000030123400301234003012340030123400301234003012340030123400301234`);
    export const tile140 = image.ofBuffer(hex`87040800080000000030123400301234003012340030123400301234003033330000000000000000`);
    export const tile141 = image.ofBuffer(hex`87040800080000000000000000000000000000000000003000000023000030120000303100003031`);
    export const tile142 = image.ofBuffer(hex`87040800080000000000303100003034000030440000004300000030000000000000000000000000`);
    export const tile143 = image.ofBuffer(hex`87040800080000003333333322424434414211344142413441421134414211344142413441421134`);
    export const tile144 = image.ofBuffer(hex`87040800080000004142113441424134414211344142113441424134414211344442443433333333`);
    export const tile145 = image.ofBuffer(hex`87040800080000002232222233333323334333234444442444444442444444444444442444444424`);
    export const tile146 = image.ofBuffer(hex`87040800080000004444442444444424444444444444242444444444444444244444442244444424`);
    export const tile147 = image.ofBuffer(hex`87040800080000004444442444442424444444244444442444444424444444424444442444444424`);
    export const tile148 = image.ofBuffer(hex`87040800080000004444442444444424444444244444444444442424444444244444442422422222`);
    export const tile149 = image.ofBuffer(hex`87040800080000002222121122221211222222112222221222222211222212122222121222221211`);
    export const tile150 = image.ofBuffer(hex`87040800080000002222121122222212222222112222121122221212222222122222121122221211`);
    export const tile151 = image.ofBuffer(hex`87040800080000002422242224222422333333333333333333333333333333333333333333333333`);
    export const tile152 = image.ofBuffer(hex`87040800080000004444444414141414141114111414141414111411141114111411141114111411`);
    export const tile153 = image.ofBuffer(hex`87040800080000001411141114111411141114111411141114141414141114111414141444444444`);
    export const tile154 = image.ofBuffer(hex`87040800080000003333333333333333333333333333333333333333333333333333333333333333`);
    export const tile155 = image.ofBuffer(hex`87040800080000003333333333333333333333333333333333333333333333333333333333333333`);
    export const tile156 = image.ofBuffer(hex`87040800080000003333333333333333333333333333333333333333333333332242224222422242`);
    export const tile157 = image.ofBuffer(hex`87040800080000003333333333333333333333333333333333333333333333333333333333333333`);
    export const tile158 = image.ofBuffer(hex`87040800080000003333333333333333333333333333333333333333333333333333333333333333`);
    export const tile159 = image.ofBuffer(hex`87040800080000003333333333333333333333333333333333333333333333331111111133333333`);
    export const tile160 = image.ofBuffer(hex`87040800080000003333000011313333114144441111111111111111112111111111121211212222`);
    export const tile161 = image.ofBuffer(hex`87040800080000001121222211212222112122221121222211212222114144441131333333030000`);
    export const tile162 = image.ofBuffer(hex`87040800080000000000000000000000000000003333333322222222141111421411114244411142`);
    export const tile163 = image.ofBuffer(hex`87040800080000004444144244411142141111421411114244444444000000000000000000000000`);
    export const tile164 = image.ofBuffer(hex`87040800080000000000000000000000000000003333333321222222242121211411111143444444`);
    export const tile165 = image.ofBuffer(hex`87040800080000000000000000000000000000000000000000000000000000000000000000000000`);
    export const tile166 = image.ofBuffer(hex`87040800080000000000000000000000000000000000003000003333003033340030131300301344`);
    export const tile167 = image.ofBuffer(hex`87040800080000000000000000000000000000000000000000000000000000000000000000000000`);
    export const tile168 = image.ofBuffer(hex`87040800080000000030121300302214000033230000003000000000000000000000000000000000`);
    export const tile169 = image.ofBuffer(hex`87040800080000004344444421222222242121211411111133333333000000000000000000000000`);
    export const tile170 = image.ofBuffer(hex`87040800080000000000000000000000000000000000000000000000000020220000424400201411`);
    export const tile171 = image.ofBuffer(hex`87040800080000000020141100004244000020220000000000000000000000000000000000000000`);
    export const tile172 = image.ofBuffer(hex`87040800080000000000000000000000000000000000000033000000310300002303000013030000`);
    export const tile173 = image.ofBuffer(hex`87040800080000001303000043030000340300003300000000000000000000000000000000000000`);
    export const tile174 = image.ofBuffer(hex`87040800080000000000444400002422000024110000244100002411000024410000241100002411`);
    export const tile175 = image.ofBuffer(hex`87040800080000000000241100002441000024110000241100002441000024110000244100002411`);
    export const tile176 = image.ofBuffer(hex`87040800080000000000241100002411000024410000241100002441000024110000241100002441`);
    export const tile177 = image.ofBuffer(hex`87040800080000000000244100002411000024110000241100002441000024110000241100004444`);
    export const tile178 = image.ofBuffer(hex`87040800080000000000000000000000000000000000003000000013000030140000301100003041`);
    export const tile179 = image.ofBuffer(hex`87040800080000000000304100003041000030410000304100003014000000330000000000000000`);
    export const tile180 = image.ofBuffer(hex`87040800080000000000000000000000000000000030000000430330304434433034434330311343`);
    export const tile181 = image.ofBuffer(hex`87040800080000003031134330311313301131130013033000300000000000000000000000000000`);
    export const tile182 = image.ofBuffer(hex`87040800080000002222222212111111121111111211111112111111121111111211111112111111`);
    export const tile183 = image.ofBuffer(hex`87040800080000001211111112111111121111111211111112111111121111111211111142444444`);
    export const tile184 = image.ofBuffer(hex`87040800080000003333333323222222231111112311111123111111231111112311111123111111`);
    export const tile185 = image.ofBuffer(hex`87040800080000002311111123111111231111112311111123111111231111114344444433333333`);
    export const tile186 = image.ofBuffer(hex`87040800080000000000000000000000000000000000403300000034000000300000003000000030`);
    export const tile187 = image.ofBuffer(hex`87040800080000000000003400003433004033330040330000000400000000000000000000000000`);
    export const tile188 = image.ofBuffer(hex`87040800080000000000000000000000000000000000004000000034000040330000344300003424`);
    export const Crate = image.ofBuffer(hex`87041000100000003333333333443433231111114311113123111111331113334344444443111131231111113344343323111111134114314344444413411431231111111341143123111111134114314344444413411431231111111341143123111111334434334344444443111131231111113311133323111111431111313333333333443433`);
    export const tile189 = image.ofBuffer(hex`87040800080000000000342400003443000041330000103400000041000000000000000000000000`);
    export const tile190 = image.ofBuffer(hex`87041000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003033032000000000301422320200000030343333230000003014223202000000303303200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`);
    export const tile191 = image.ofBuffer(hex`87040800080000001122222221222222212122221121222221222222212222222121222211212222`);
    export const tile192 = image.ofBuffer(hex`87041000100000000000003333000000000033111133000000301111111103000013211111113100301112111111440330211211114141031321111111141434131111114141413413111111141444331314114441414434304141111414340330444444414143030043434444343400003043434343030000003334343300000000003333000000`);
    export const DartShooter = image.ofBuffer(hex`87041000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000032020000000000203323000000000000320200000000000032020000000000003202000000`);
    export const tile193 = image.ofBuffer(hex`87040800080000002122222211212222112222222121222221222222112222221121222221212222`);
    export const tile194 = image.ofBuffer(hex`87040800080000004444444414141414141114111414141414111411141114111411141114111411`);
    export const tile195 = image.ofBuffer(hex`87040800080000002211433422113333221123313333233122111331221144442211244143442441`);
    export const tile196 = image.ofBuffer(hex`870410002000000000000000000000000000000000000000000000003303000000003333330000000000000033333333333322223200000000000030433412222222114131000000000000304444234111144141310000000000001011442341141441413100000000000011224223111111111131000000000010222242234144444444030000000000002122422341444444440300000000000011214223212222222232000000000000301144231114414141310000000000003044442311141441413100000000000030433412111111414131000000000000003333333333331111310000000000000033030000000033333300000000000000000000000000000000000000`);
    export const tile197 = image.ofBuffer(hex`87040800080000001411141114111411141114111411141114141414141114111414141444444444`);
    export const tile198 = image.ofBuffer(hex`87040800080000002211144122114444221124414344244122111441221144442211244143442441`);
    export const tile199 = image.ofBuffer(hex`87040800080000002211144122114444221124414344244122111441221144442211244143442441`);
    export const tile200 = image.ofBuffer(hex`87040800080000002211144122114444221113343333133422114334221133332211133422114334`);
    export const tile201 = image.ofBuffer(hex`87040800080000003333333311313333333143313331444133311444333124113331241133312441`);
    export const tile202 = image.ofBuffer(hex`87040800080000003331444433312422333124123331241233312411333124113331241133312441`);
    export const tile203 = image.ofBuffer(hex`87040800080000003331444433312422333124123331241233312412333124123331241133312411`);
    export const tile204 = image.ofBuffer(hex`87040800080000003331444433312422333124123331141133311441333143441131333433333333`);
    export const tile205 = image.ofBuffer(hex`87040800080000000000000033333333444444441111111111111111111111111212121222222222`);
    export const tile206 = image.ofBuffer(hex`87040800080000002222222222222222222222222222222222222222444444443333333300000000`);
    export const tile207 = image.ofBuffer(hex`87040800080000000000000000000000000000003333333322222222111142111111421141114211`);
    export const tile208 = image.ofBuffer(hex`87040800080000004114424141114241111142111111421144444444000000000000000000000000`);
    export const tile209 = image.ofBuffer(hex`87040800080000000000000000303333003022223333121222311211213412111134121144333333`);
    export const tile210 = image.ofBuffer(hex`87040800080000000000000000000000000000000000000000000000000000000000000000000000`);
    export const tile211 = image.ofBuffer(hex`87040800080000000000000000000000003033333333313133111313331314143113131323423333`);
    export const tile212 = image.ofBuffer(hex`87040800080000000000000000000000000000000000000000000000000000000000000000000000`);
    export const tile213 = image.ofBuffer(hex`87040800080000004114131311131414321114143343424200303333000000000000000000000000`);
    export const tile214 = image.ofBuffer(hex`87040800080000004433333322312222213412121134121133331211003012110030333300000000`);
    export const Pit = image.ofBuffer(hex`87041000100000000000303433030000000043343333000000304433333303000043343333333300004334333333330030443333333333033044333333333303304433333333330330443333333333033044333333333303304433333333330300433433333333000043343333333300003044333333030000004334333300000000303333030000`);
    export const tile215 = image.ofBuffer(hex`87040800080000000000000000000000000000000000000000222222224444444411421111114241`);
    export const tile216 = image.ofBuffer(hex`87040800080000001111421144114211224444440022222200000000000000000000000000000000`);
    export const DartShooter_1 = image.ofBuffer(hex`87041000100000000000003202000000000000320200000000000032020000000000203323000000000000320200000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`);
    export const tile217 = image.ofBuffer(hex`87040800080000004444444422222222111121141414211441412114111121141111211444412114`);
    export const tile218 = image.ofBuffer(hex`87040800080000001441211414142114111121141111211441442114111121144141211414112114`);
    export const tile219 = image.ofBuffer(hex`87040800080000001111211411442114144121141111211444142114114121141111211414142114`);
    export const tile220 = image.ofBuffer(hex`87040800080000001411211414112114111421144111211441112114111124141111211444444444`);
    export const tile221 = image.ofBuffer(hex`87040800080000000000000000000000000000003303000044340000113303001141030033110300`);
    export const tile222 = image.ofBuffer(hex`87040800080000003341000014310300334100003311030011410300333300000000000000000000`);
    export const tile223 = image.ofBuffer(hex`87040800080000000000000000000000000000003333030044443400141444034141410311111103`);
    export const tile224 = image.ofBuffer(hex`87040800080000001111110311111103111111031111310033330300000000000000000000000000`);
    export const tile225 = image.ofBuffer(hex`87040800080000002222222211111141111111411111114111111141111111411111114111111141`);
    export const tile226 = image.ofBuffer(hex`87040800080000001111114111111141111111411111114111111141111111411111114144444444`);
    export const tile227 = image.ofBuffer(hex`87040800080000003333333322222234111111341111113411111134111111341111113411111134`);
    export const tile228 = image.ofBuffer(hex`87040800080000001111113411111134111111341111113411111134111111344444443433333333`);
    export const tile229 = image.ofBuffer(hex`87040800080000000000000000000000000000000000000003000000330000003333030033030000`);
    export const tile230 = image.ofBuffer(hex`87040800080000003333030033000000000000000000000000000000000000000000000000000000`);
    export const tile231 = image.ofBuffer(hex`87040800080000000000000000000000000000000000000003000000330000003303000034030000`);
    export const tile232 = image.ofBuffer(hex`87040800080000003403000033030000330000000300000000000000000000000000000000000000`);
    export const tile233 = image.ofBuffer(hex`87040800080000001111111111111111112411111111111111111111111111111111112411111111`);
    export const tile234 = image.ofBuffer(hex`87040800080000001111111111111111111111111111111111211111114112111111111111111111`);
    export const Switch = image.ofBuffer(hex`87041000100000004044444444444404141111111111114114143133331141411411232242131141143112112134114114231113114213411423111113421341142331311342134114231131134213411423311113421341142311131142134114311211213411411411232242131141141431333311414114111111111111414044444444444404`);
    export const tile235 = image.ofBuffer(hex`87040800080000001111111111111111111111241111111211241111111111111111111111111111`);
    export const tile236 = image.ofBuffer(hex`87040800080000001111111111111111111111111111111111111111111111111111111111111111`);
    export const tile237 = image.ofBuffer(hex`87040800080000002222222222222222222222222222212222221222222221222222222222222222`);
    export const tile238 = image.ofBuffer(hex`87040800080000002222222222222222222222222221222222122222222122222222222222222222`);
    export const tile239 = image.ofBuffer(hex`87040800080000002222222222212222221222222221222222221222222222212222122222222222`);
    export const tile240 = image.ofBuffer(hex`87040800080000002222222222222222222222222222222222222222212211121121121111111111`);
    export const tile241 = image.ofBuffer(hex`87040800080000004143344441333341442331113323414412134112124444121124411144244144`);
    export const tile242 = image.ofBuffer(hex`87040800080000001214411112444412112441114424414412144112124444121124411144244144`);
    export const tile243 = image.ofBuffer(hex`87040800080000001214411212444412112441114424414412144112124444111124411144244144`);
    export const tile244 = image.ofBuffer(hex`87040800080000001214411212444412111334113313343341433441413333414413344433433433`);
    export const tile245 = image.ofBuffer(hex`87040800080000003333333333333333331344333113443441434444412322114424124144241141`);
    export const tile246 = image.ofBuffer(hex`87040800080000004424111111241141112411444123414441334444412322114424124144241141`);
    export const tile247 = image.ofBuffer(hex`87040800080000004424114111241141411411444113414441334444412322114424124144231144`);
    export const tile248 = image.ofBuffer(hex`87040800080000004424114111241141411411444113114444334444344311343333343333333333`);
    export const tile249 = image.ofBuffer(hex`87040800080000000000333333334044444411441111114411111144111111441222114422221144`);
    export const tile250 = image.ofBuffer(hex`87040800080000002222124422221244222212442222124422221244444411443333404400003333`);
    export const tile251 = image.ofBuffer(hex`87040800080000000000000000000000000000003333330322222222114211111142111414424144`);
    export const tile252 = image.ofBuffer(hex`87040800080000004442414411424144114211141142111144444444000000000000000000000000`);
    export const Spikes = image.ofBuffer(hex`87041000100000000000000000000000003400000000340040330300004033034033030000403303003400000000340000000000000000000000004003000000000000343300000000000034330000000000004003000000000000000000000000340000000034004033030000403303403303000040330300340000000034000000000000000000`);
    export const tile253 = image.ofBuffer(hex`87040800080000000000000033000000320000003200000031000000310000003100000033000000`);
    export const Spikes_1 = image.ofBuffer(hex`87041000100000000000000000000000203400000020340012110300001211031211030000121103203400000020340000000000000000000000004203000000000020113100000000002011310000000000004203000000000000000000000020340000002034001211030000121103121103000012110320340000002034000000000000000000`);
    export const tile254 = image.ofBuffer(hex`87040800080000000000000000000000000000000000000000000000000000000000000000000000`);
    export const tile255 = image.ofBuffer(hex`87040800080000000000000000000000333300003131333313133333141431331313314433333344`);
    export const tile256 = image.ofBuffer(hex`87040800080000000000000000000000000000000000000000000000000000000000000000000000`);
    export const tile257 = image.ofBuffer(hex`87040800080000001313314414143144141443414222333333330000000000000000000000000000`);
    export const tile258 = image.ofBuffer(hex`87040800080000003300000032000000320000003100000031000000310000003300000000000000`);
    export const tile259 = image.ofBuffer(hex`87040800080000000000000000000000000000000022222222444444442114111121144141211424`);
    export const tile260 = image.ofBuffer(hex`87040800080000004221142411211441442114112244444400222222000000000000000000000000`);
    export const PressurePlate = image.ofBuffer(hex`87041000100000003333333333333333232222222222223423111111111111342311111111111134231111111111113423111111111111342311111111111134231111111111113423111111111111342311111111111134231111111111113423111111111111342311111111111134231111111111113443444444444444343333333333333333`);
    export const tile261 = image.ofBuffer(hex`87040800080000004444440422222204111111044144110411111404411411041111110414111104`);
    export const tile262 = image.ofBuffer(hex`87040800080000004444140414441104111111041111110444441404144111044111110411111104`);
    export const tile263 = image.ofBuffer(hex`87040800080000001111110444441404414111041141110411111104441111044114140414411104`);
    export const tile264 = image.ofBuffer(hex`87040800080000001111110411111104441114041111110414141404444114041111110444444404`);
    export const tile265 = image.ofBuffer(hex`87040800080000000000000000000000000000000000000000000000000000000000000000000000`);
    export const tile266 = image.ofBuffer(hex`87040800080000000000000000000000000000000000000000000000000000000000000000000000`);
    export const tile267 = image.ofBuffer(hex`87040800080000000000000000000000000000000000000000000000000000400000344000400033`);
    export const tile268 = image.ofBuffer(hex`87040800080000000040003300003440000000400000000000000000000000000000000000000000`);
    export const tile269 = image.ofBuffer(hex`87040800080000000000000000000000000000000000000000000000000000000000404400434333`);
    export const tile270 = image.ofBuffer(hex`87040800080000000043333300400004000040000000440000000400000000000000000000000000`);
    export const tile271 = image.ofBuffer(hex`87040800080000001111111111211411111122111111411111441111211111111111111111111111`);
    export const tile272 = image.ofBuffer(hex`87040800080000001111111111111111111111111111241111111111111124111111111111111111`);
    export const tile273 = image.ofBuffer(hex`87040800080000001111111111111111111111111111241111111211111111111111111111111111`);
    export const tile274 = image.ofBuffer(hex`87040800080000001111111111121111112112111111141111211211111214111111111111111111`);
    export const tile275 = image.ofBuffer(hex`87040800080000002222222222222222222222222222122212222221222112221222222222222222`);
    export const tile276 = image.ofBuffer(hex`87040800080000002222222222221222222222212221122222122222222122222222222222222222`);
    export const tile277 = image.ofBuffer(hex`87040800080000002222222222222222221222222222212222122222222222222222222222222222`);
    export const tile278 = image.ofBuffer(hex`87040800080000001112111111221211211122122222222222222222222222222222222222222222`);
    export const tile279 = image.ofBuffer(hex`87040800080000004334333333334433133144331331443314313333443444332441113324411134`);
    export const tile280 = image.ofBuffer(hex`87040800080000001441443444441134144111342441113414414434444411342441113424411134`);
    export const tile281 = image.ofBuffer(hex`87040800080000001441443444441134244111341441113414414434444411342441113424411134`);
    export const tile282 = image.ofBuffer(hex`87040800080000001441443444441133134111331331443313313333333344331334443343344433`);
    export const tile283 = image.ofBuffer(hex`87040800080000003333333333333333434433334344343313414433134444331344343313443333`);
    export const tile284 = image.ofBuffer(hex`87040800080000003333333313114134131144331341443313414433134444331344343313443333`);
    export const tile285 = image.ofBuffer(hex`87040800080000003333333313111134131144341341443313414433134144331344343313443333`);
    export const tile286 = image.ofBuffer(hex`87040800080000003333333313111134131144341341443343444433434433333333333333333333`);
    export const tile287 = image.ofBuffer(hex`87040800080000003300000034000000340000003400000034000000340000003400000034000000`);
    export const tile288 = image.ofBuffer(hex`87040800080000003400000034000000340000003400000034000000340000003400000033000000`);
    export const tile289 = image.ofBuffer(hex`87040800080000000000000000000000000000000300000032000000310000003100000031000000`);
    export const tile290 = image.ofBuffer(hex`87040800080000003100000031000000310000003100000004000000000000000000000000000000`);
    export const Bomb = image.ofBuffer(hex`87041000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`);
    export const tile291 = image.ofBuffer(hex`87040800080000000000000000000000000000000300000033000000330000003300000034000000`);
    export const tile292 = image.ofBuffer(hex`87040800080000003400000031000000310000000300000000000000000000000000000000000000`);
    export const tile293 = image.ofBuffer(hex`87040800080000000020222200424444204411112214111144444444114211111142414114421114`);
    export const tile294 = image.ofBuffer(hex`87040800080000001442414211424111114211114444444422141111204411110042444400202222`);
    export const tile295 = image.ofBuffer(hex`87040800080000003333333344444444242222222422121424224141241214132421411124121111`);
    export const tile296 = image.ofBuffer(hex`87040800080000002411111114111111141121241411114214111111141111114444444433333333`);
    export const tile297 = image.ofBuffer(hex`87040800080000000000000000000000000000000000000000000000030000000300000033330300`);
    export const tile298 = image.ofBuffer(hex`87040800080000003333030003000000030000000000000000000000000000000000000000000000`);
    export const tile299 = image.ofBuffer(hex`87040800080000000000000000000000000000003000000030000000040000040430430333430000`);
    export const tile300 = image.ofBuffer(hex`87040800080000003343000000003400000040030000000000000000000000000000000000000000`);
    export const tile301 = image.ofBuffer(hex`87040800080000001214411212144112113441114434434412244112122441111124411144144144`);
    export const tile302 = image.ofBuffer(hex`87040800080000001214411212444412114444114444444412444412124444111124411144244144`);
    export const tile303 = image.ofBuffer(hex`87040800080000001214311212143412114113113431333412434312121413111124411144244144`);
    export const tile304 = image.ofBuffer(hex`87040800080000001214411212444412112441114424414412144112124444111124411144244144`);
    export const tile305 = image.ofBuffer(hex`87040800080000002222000044343303112144031121440314214403412144034121440341214403`);
    export const tile306 = image.ofBuffer(hex`87040800080000004121440341214403412144031421440311214403112144034434330322020000`);
    export const tile307 = image.ofBuffer(hex`87040800080000003333333344444444212111111412111141111111111111411111113411114141`);
    export const tile308 = image.ofBuffer(hex`87040800080000001111113441111141144411114211114111111111111111114444444433333333`);
    export const tile309 = image.ofBuffer(hex`87040800080000000000000000000000000000000000000000000000000040040000103400003443`);
    export const tile310 = image.ofBuffer(hex`87040800080000000000443400000043000000430000003000000000000000000000000000000000`);
    export const Door = image.ofBuffer(hex`87041000100000004444444444444434313333333333333311111122121111344144444444444434313333333333333411112122111111344144444444444434313333333333333411112212111111344144444444444434313333333333333411221211111111344144444444444434313333333333333321121111111111314444444444444434`);
    export const merged191 = image.ofBuffer(hex`87040800080000003331444433312422333124123331241233312412333124123331241133312411`);
    export const merged192 = image.ofBuffer(hex`87040800080000003331443433312413333134413331343433314234333142333331423333314233`);
    export const merged193 = image.ofBuffer(hex`87040800080000003331424333314233333142333331423433312434333114443331244233312421`);
    export const merged194 = image.ofBuffer(hex`87040800080000003331444433312422333124123333333322222222141111421411114244411142`);
    export const merged195 = image.ofBuffer(hex`87040800080000004444144244411142141111421411114244444444333124123331241133312411`);
    export const merged196 = image.ofBuffer(hex`87040800080000003333444411313333114144441111111111111111112111111111121211212222`);
    export const merged197 = image.ofBuffer(hex`87040800080000001121222211212222112122221121222211212222114144441131333333332441`);
    export const merged198 = image.ofBuffer(hex`87040800080000003331444433312422333133333331123433311234333112343331123433311234`);
    export const merged199 = image.ofBuffer(hex`87040800080000002232123422321234223212342232123422321234223212342232123422321234`);
    export const merged200 = image.ofBuffer(hex`87040800080000003331123433311234333112343331123433311234333133333331241133312441`);
    export const merged201 = image.ofBuffer(hex`87040800080000004444144244411142141111421411114244444444333124113331241133312441`);
    export const merged202 = image.ofBuffer(hex`87040800080000003331444433312422333124123331241233312411333124113331241133312441`);
    export const merged204 = image.ofBuffer(hex`87040800080000004424114111241141411411444113414441334444413333333413414413413333`);
    export const merged205 = image.ofBuffer(hex`87040800080000004244331121414444412412124113414441334444412322114424124144231144`);
    export const merged206 = image.ofBuffer(hex`87040800080000004424111111241141112411443333333322222222111142111111421141114211`);
    export const merged207 = image.ofBuffer(hex`87040800080000004114424141114241111142111111421144444444412322114424124144231144`);
    export const merged203 = image.ofBuffer(hex`87040800080000004424114111241141411411114113112141332122412312114424121144231144`);
    export const merged208 = image.ofBuffer(hex`87040800080000004424114133333333444444441111111111111111111111111212121222222222`);
    export const merged209 = image.ofBuffer(hex`87040800080000002222222222222222222222222222222222222222444444443333333344241141`);
    export const merged210 = image.ofBuffer(hex`87040800080000004424114111241141411411443333333321222222242121211411111143444444`);
    export const merged63 = image.ofBuffer(hex`87040800080000002222222222222222222222222222222222222222222222222222222222222222`);
    export const merged211 = image.ofBuffer(hex`87040800080000004344444421222222242121211411111133333333412322114424124144241141`);
    export const merged212 = image.ofBuffer(hex`87040800080000004424111111241141112411114123112141332122412312114424121144241141`);
    export const merged213 = image.ofBuffer(hex`87040800080000004114424141114241111142111111421144444444412322114424124144241141`);
    export const merged214 = image.ofBuffer(hex`87040800080000004424111111241141112411444123414441334444413333333413414413413333`);
    export const merged215 = image.ofBuffer(hex`87040800080000004244331121414444112412124123414441334444412322114424124144241141`);
    export const merged216 = image.ofBuffer(hex`87040800080000003333333313111134131144341341443313414433333333334444443333334133`);
    export const merged217 = image.ofBuffer(hex`87040800080000001111413344444433111111331341443313414433134144331344343313443333`);
    export const merged218 = image.ofBuffer(hex`87040800080000003333333313114134131144333333333322222222114211111142111414424144`);
    export const merged219 = image.ofBuffer(hex`87040800080000004442414411424144114211141142111144444444134144331344343313443333`);
    export const merged220 = image.ofBuffer(hex`87040800080000003333333333334144444411441111114411111144111111441222114422221144`);
    export const merged221 = image.ofBuffer(hex`87040800080000002222124422221244222212442222124422221244444411443333444413443333`);
    export const merged222 = image.ofBuffer(hex`87040800080000003333333313313333133122223333121222311211213412111134121144333333`);
    export const merged223 = image.ofBuffer(hex`87040800080000004433333322312222213412121134121133331211133412111334333313443333`);
    export const merged224 = image.ofBuffer(hex`87040800080000004442414411424144114211141142111144444444134444331344343313443333`);
    export const merged225 = image.ofBuffer(hex`87040800080000003333333313114134131144331341443313414433333333334444443333334133`);
    export const merged226 = image.ofBuffer(hex`87040800080000001111413344444433111111331341443313414433134444331344343313443333`);
    export const merged227 = image.ofBuffer(hex`87040800080000003243444432434444324444443343444432434444314344443143444431434444`);
    export const merged228 = image.ofBuffer(hex`87040800080000003143444431434444314444443143444424434444244344442443444432434444`);
    export const merged229 = image.ofBuffer(hex`87040800080000003343444434434444344344443443444434434444344444443443444434434444`);
    export const merged230 = image.ofBuffer(hex`87040800080000003443444434434444344444443443444434434444344344443443444433434444`);
    export const merged231 = image.ofBuffer(hex`87040800080000003243444433444444324344443243444431434444314324443143444433222224`);
    export const merged232 = image.ofBuffer(hex`87040800080000004444444414141414141114111414141414111411141114111411141114111411`);
    export const merged233 = image.ofBuffer(hex`87040800080000001411141114111411141114111411141114141414141114111414141444444444`);
    export const merged234 = image.ofBuffer(hex`87040800080000003322232232333333323243333143444431434444314344443343444432434444`);
    export const merged235 = image.ofBuffer(hex`87040800080000003343444434434444344444443443444434434444344344443443444434434444`);
    export const merged236 = image.ofBuffer(hex`87040800080000003443444434434444344344443443444434434444344444443443444433434444`);
    export const merged237 = image.ofBuffer(hex`87040800080000003143444431434444314344443143444424434444244444443243444432434444`);
    export const merged71 = image.ofBuffer(hex`87040800080000002211144122114444221124414344243122113333223133342231131343341344`);
    export const merged72 = image.ofBuffer(hex`87040800080000002231121322312214221133234344243122111441221144442211244143442441`);
    export const merged73 = image.ofBuffer(hex`87040800080000002211144122114444221124414344244122111441221124222211424443241411`);
    export const merged74 = image.ofBuffer(hex`87040800080000002221141122114244221124224344244122111441221144442211244143442441`);
    export const merged75 = image.ofBuffer(hex`87040800080000002211144122114444223133334334123422311234223112342231123443341234`);
    export const merged76 = image.ofBuffer(hex`87040800080000000030123400301234003012340030123400301234003012340030123400301234`);
    export const merged77 = image.ofBuffer(hex`87040800080000002231123422311234223112344334123422311234223133332211244143442441`);
    export const merged84 = image.ofBuffer(hex`87040800080000001214411212444412113433333333313133111313331314143113131323423333`);
    export const merged85 = image.ofBuffer(hex`87040800080000004114131311131414321114143343424212343333124444111124411144244144`);
    export const merged86 = image.ofBuffer(hex`87040800080000001214411212444412112441114424112112142122124414111124411144244144`);
    export const merged87 = image.ofBuffer(hex`87040800080000001214411212444412112441114424414412222222224444444411421111114241`);
    export const merged88 = image.ofBuffer(hex`87040800080000001111421144114211224444444422222212144112124444111124411144244144`);
    export const merged89 = image.ofBuffer(hex`87040800080000001214411212444412112441113333333321222222242121211411111143444444`);
    export const merged90 = image.ofBuffer(hex`87040800080000004344444421222222242121211411111133333333124444111124411144244144`);
    export const merged100 = image.ofBuffer(hex`87040800080000001441443444441134333311343131333313133333141431331313314433333344`);
    export const merged101 = image.ofBuffer(hex`87040800080000001313314414143144141443414222333333334434444411342441113424411134`);
    export const merged102 = image.ofBuffer(hex`87040800080000001441443444441134244111341422222222444444442114111121144141211424`);
    export const merged103 = image.ofBuffer(hex`87040800080000004221142411211441442114112244444414222222444411342441113424411134`);
    export const merged104 = image.ofBuffer(hex`87040800080000001441443444343333243122223333121222311211213412111134121144333333`);
    export const merged53 = image.ofBuffer(hex`87040800080000004433333322312222213412121134121133331211443412112431333324411134`);
    export const merged60 = image.ofBuffer(hex`87040800080000001441443444441134244111341431113414434334344434433434434334311343`);
    export const merged105 = image.ofBuffer(hex`87040800080000003431134334311313341131132413133414314434444411342441113424411134`);
    export const merged110 = image.ofBuffer(hex`87040800080000001122222221222222212122221321222233222222332222223321222234212222`);
    export const merged111 = image.ofBuffer(hex`87040800080000003422222231212222312222222321222221222222112222221121222221212222`);
    export const merged112 = image.ofBuffer(hex`87040800080000001122222221424444214411112214111144444444114211111142414114421114`);
    export const merged113 = image.ofBuffer(hex`87040800080000001442414211424111114211114444444422141111214411112142444411212222`);
    export const merged114 = image.ofBuffer(hex`87040800080000002121222221212222212112221122122211211212212111112122111111211211`);
    export const merged115 = image.ofBuffer(hex`87040800080000001122111121221111212121111121211221222222212222222121222211212222`);
    export const merged116 = image.ofBuffer(hex`87040800080000002121222221424444214411112214111144444444114211111142414114421114`);
    export const merged117 = image.ofBuffer(hex`87040800080000001442414211424111114211114444444422141111214411111142444421212222`);
    export const merged118 = image.ofBuffer(hex`87040800080000002122222211212222112222222321222233222222332222223321222234212222`);
    export const merged69 = image.ofBuffer(hex`87040800080000002121222221212222112122223333232244443422141444234141412311111123`);
    export const merged119 = image.ofBuffer(hex`87040800080000001111112311111123111111231111312233332322212122221122222211212222`);
    export const merged122 = image.ofBuffer(hex`87040800080000002222222244343323112144231121442314214423412144234121442341214423`);
    export const merged123 = image.ofBuffer(hex`87040800080000004121442341214423412144231421442311214423112144234434332322222222`);
    export const merged35 = image.ofBuffer(hex`87040800080000002222222222222222222221222121222211112122111122221111222211212222`);
    export const merged36 = image.ofBuffer(hex`87040800080000001111222211112122111122222221212222212222122222222222222222222222`);
    export const merged126 = image.ofBuffer(hex`87040800080000002222222222222232222222322222223222222232222222322222223222222232`);
    export const merged127 = image.ofBuffer(hex`87040800080000002222223222222232222222322222223222222232222222322222223222222232`);
    export const merged128 = image.ofBuffer(hex`87040800080000002222223222222232222222322222223222222232222222322222223222222222`);
    export const merged133 = image.ofBuffer(hex`87040800080000003333222221223333442444434124444341144143411441434114414341144143`);
    export const merged134 = image.ofBuffer(hex`87040800080000004114414341144143411441434134414341344133443444444434333333332222`);
    export const merged141 = image.ofBuffer(hex`87040800080000002222223333333334444444343333433344444433111141333133413341314133`);
    export const merged142 = image.ofBuffer(hex`87040800080000004134413311114133111141334444443333334334444444343333333422222233`);
    export const merged163 = image.ofBuffer(hex`87040800080000002222222212111111121111111211413312111134121111311211113112111131`);
    export const merged164 = image.ofBuffer(hex`87040800080000001211113412113433124133331241331112111411121111111211111142444444`);
    export const merged165 = image.ofBuffer(hex`87040800080000002222222212111111121111111211114112111134121141331211344312113424`);
    export const merged166 = image.ofBuffer(hex`87040800080000001211342412113443121141331211113412111141121111111211111142444444`);
    export const merged171 = image.ofBuffer(hex`87040800080000002222222211111141111111411111114113111141331111413333134133131141`);
    export const merged172 = image.ofBuffer(hex`87040800080000003333134133111141111111411111114111111141111111411111114144444444`);
    export const merged173 = image.ofBuffer(hex`87040800080000003333333322222222111111111111111111111111111111111111414411434333`);
    export const merged174 = image.ofBuffer(hex`87040800080000001143333311411114111141111111441111111411111111114444444433333333`);
    export const merged175 = image.ofBuffer(hex`87040800080000003333333322222222111111111111111111111111111111411111344111411133`);
    export const merged176 = image.ofBuffer(hex`87040800080000001141113311113441111111411111111111111111111111114444444433333333`);
    export const merged177 = image.ofBuffer(hex`87040800080000002222222211111141111111411111114113111141331111413313114134131141`);
    export const merged178 = image.ofBuffer(hex`87040800080000003413114133131141331111411311114111111141111111411111114144444444`);
    export const merged179 = image.ofBuffer(hex`87040800080000003333333322222222111111113111111131111111141111141431431333431111`);
    export const merged180 = image.ofBuffer(hex`87040800080000003343111111113411111141131111111111111111111111114444444433333333`);
    export const merged181 = image.ofBuffer(hex`87040800080000003333333322222222111111111111111111111111131111111311111133331311`);
    export const merged182 = image.ofBuffer(hex`87040800080000003333131113111111131111111111111111111111111111114444444433333333`);
    export const merged25 = image.ofBuffer(hex`87040800080000002222222222222222222222222212222222222122222211122222124122221244`);
    export const merged26 = image.ofBuffer(hex`87040800080000002222121422221121222212222222212222122222222222222222222222222222`);
    export const merged27 = image.ofBuffer(hex`87040800080000002222222222222222222122222221222212222222212222222222222221222222`);
    export const merged28 = image.ofBuffer(hex`87040800080000002122222211222222122222222221222222212222222222222222222222222222`);
    export const merged183 = image.ofBuffer(hex`87040800080000001214411112444412112441114424112112142122124414111124411144244144`);
    export const merged184 = image.ofBuffer(hex`87040800080000001112111111221211211122122232222222432332324434433234434332311343`);
    export const merged185 = image.ofBuffer(hex`87040800080000003231134332311313321131132213233222322222222222222222222222222222`);
    export const merged186 = image.ofBuffer(hex`87040800080000001112111111221211211122123333232244443422141444234141412311111123`);
    export const merged187 = image.ofBuffer(hex`87040800080000001111112311111123111111231111312233332322222222222222222222222222`);
    export const merged33 = image.ofBuffer(hex`87040800080000002222222222222222222212222222122222221212222211112222111122221211`);
    export const merged34 = image.ofBuffer(hex`87040800080000002222111122221111222221112222211222222222222222222222222222222222`);
    export const merged159 = image.ofBuffer(hex`87040800080000002222222222222222222222222222223222222213222232142222321122223241`);
    export const merged188 = image.ofBuffer(hex`87040800080000002222324122223241222232412222324122223214212211331121121111111111`);
    export const merged189 = image.ofBuffer(hex`87040800080000002222222222222222222222223323122244342221113313221141232233112322`);
    export const merged190 = image.ofBuffer(hex`87040800080000003341222214312322334122223311232211412322333312112222211211211111`);
    export const merged96 = image.ofBuffer(hex`87040800080000001441443444441134144111342431113414434334344434433434434334311343`);
    export const merged97 = image.ofBuffer(hex`87040800080000003431134334311313341131131413133414314434444411342441113424411134`);
    export const merged98 = image.ofBuffer(hex`87040800080000001441443444441134144111342441113414414413444431142441311124413141`);
    export const merged99 = image.ofBuffer(hex`87040800080000001441344144443141244131411441314114413414444411332441113424411134`);
    export const merged106 = image.ofBuffer(hex`87040800080000002121222221212222212122223333232244443422141444234141412311111123`);
    export const merged107 = image.ofBuffer(hex`87040800080000001111112311111123111111231111312233332322212122222122222211212222`);
    export const merged108 = image.ofBuffer(hex`87040800080000002122222211212222112222223323222244342222113323221141232233112322`);
    export const merged109 = image.ofBuffer(hex`87040800080000003341222214312322334122223311232211412322333322222122222211212222`);
    export const merged3 = image.ofBuffer(hex`87040800080000002211144122114444221124414344244122111441221141442211124143212441`);
    export const merged4 = image.ofBuffer(hex`87040800080000003233224132332341221134124344242322111131121223312132231221224222`);
    export const merged5 = image.ofBuffer(hex`87040800080000002122221221123421121133311311113322333333221144242211241233332331`);
    export const merged6 = image.ofBuffer(hex`87040800080000002211144122114444221124414344244122111441221144442211244143442441`);
    export const merged7 = image.ofBuffer(hex`87040800080000002211143122114413221134414344343422114234221142332211423343444233`);
    export const merged8 = image.ofBuffer(hex`87040800080000002211424322114233221142334344423422112434221114442211244243442421`);
    export const merged9 = image.ofBuffer(hex`87040800080000003223123322323144222131414334334122111441221144442211244143442441`);
    export const merged10 = image.ofBuffer(hex`87040800080000001214411112444412112441114424414412144112124444121124411144244144`);
    export const merged11 = image.ofBuffer(hex`87040800080000001214411112444412112441114124414412144111232112122321232323212323`);
    export const merged12 = image.ofBuffer(hex`87040800080000001122222213212323132313131313313132333313314444121324411143244144`);
    export const merged13 = image.ofBuffer(hex`87040800080000001214411112444412112441114424414412144112123433333113414413413333`);
    export const merged14 = image.ofBuffer(hex`87040800080000004244331122414444112412124424414412144112124444121124411144244144`);
    export const merged15 = image.ofBuffer(hex`87040800080000001214411212444412112441114424414412144112124444111124411144244144`);
    export const merged16 = image.ofBuffer(hex`87040800080000001441443444441134144111342441111414411421111121222222333311334444`);
    export const merged17 = image.ofBuffer(hex`87040800080000003111144111222112123333233341112314414434444411342441113424411134`);
    export const merged18 = image.ofBuffer(hex`87040800080000001441443444441134144111342441113414414434333333334444443333334133`);
    export const merged19 = image.ofBuffer(hex`87040800080000001111413344444433111111332441113414414434444411342441113424411134`);
    export const merged20 = image.ofBuffer(hex`87040800080000001441443444441134244111341441113414414434444411342441113424411134`);
    export const merged21 = image.ofBuffer(hex`87040800080000001441443444441134144111342441113414414434444441342441113424413443`);
    export const merged22 = image.ofBuffer(hex`87040800080000001441443444441143144111432441113414414434444411342441113424411134`);
    export const merged23 = image.ofBuffer(hex`87040800080000002121222221212222212122221133332231444423431144231441432311114423`);
    export const merged24 = image.ofBuffer(hex`87040800080000001111432311413323111434231141342343443422313323222121222211212222`);
    export const merged29 = image.ofBuffer(hex`87040800080000002222222222222222222222222222223222222223222232122222323122223231`);
    export const merged30 = image.ofBuffer(hex`87040800080000002222323122223234222232442222224322222232112212112222211211211111`);
    export const merged31 = image.ofBuffer(hex`87040800080000002222222222222222222222222222222233222222312322222323222213232222`);
    export const merged32 = image.ofBuffer(hex`87040800080000001323222243232222342322223322222222222222212211121121121111111111`);
    export const merged37 = image.ofBuffer(hex`87040800080000002211433422113333221143344344433422114324221133232211432443444324`);
    export const merged38 = image.ofBuffer(hex`87040800080000002211432422113323221143244344432422114334221133332211433443444334`);
    export const merged39 = image.ofBuffer(hex`87040800080000002211433422113333223133334334123422311234223112342231123422311234`);
    export const merged40 = image.ofBuffer(hex`87040800080000002231123422311234223112344334123422311234223133332211433443444334`);
    export const merged41 = image.ofBuffer(hex`87040800080000002211144122114444221124413333333322222222141111421411114244411142`);
    export const merged42 = image.ofBuffer(hex`87040800080000004444144244411142141111421411114244444444221144442211244143442441`);
    export const merged43 = image.ofBuffer(hex`87040800080000002211444422112422221124114344244122112411221124412211241143442411`);
    export const merged44 = image.ofBuffer(hex`87040800080000002211241122112441221124114344241122112441221124112211244143442411`);
    export const merged45 = image.ofBuffer(hex`87040800080000002211241122112411221124414344241122112441221124112211241143442441`);
    export const merged46 = image.ofBuffer(hex`87040800080000002211244122112411221124114344241122112441221124112211241143444444`);
    export const merged47 = image.ofBuffer(hex`87040800080000001214411212444412111334113333333321222222242121211411111143444444`);
    export const merged48 = image.ofBuffer(hex`87040800080000004344444421222222242121211411111133333333124444121124411144244144`);
    export const merged49 = image.ofBuffer(hex`87040800080000001214411212444412112441113333333322222222111142111111421141114211`);
    export const merged50 = image.ofBuffer(hex`87040800080000004114424141114241111142111111421144444444124444111124411144244144`);
    export const merged51 = image.ofBuffer(hex`87040800080000004114424141114241111142111111421144444444124444121124411144244144`);
    export const merged52 = image.ofBuffer(hex`87040800080000001441443444343333133122223333121222311211213412111134121144333333`);
    export const merged54 = image.ofBuffer(hex`87040800080000001441443444441134244111343333333322222222114211111142111414424144`);
    export const merged55 = image.ofBuffer(hex`87040800080000004442414411424144114211141142111144444444444411342441113424411134`);
    export const merged56 = image.ofBuffer(hex`87040800080000004444443422222234111111344144113411111434411411341111113414111134`);
    export const merged57 = image.ofBuffer(hex`87040800080000004444143414441134111111341111113444441434144111344111113411111134`);
    export const merged58 = image.ofBuffer(hex`87040800080000001111113444441434414111341141113411111134441111344114143414411134`);
    export const merged59 = image.ofBuffer(hex`87040800080000001111113411111134441114341111113414141434444114341111113444444434`);
    export const merged61 = image.ofBuffer(hex`87040800080000003431134334311313331131131313433313313333333344331334443343344433`);
    export const merged62 = image.ofBuffer(hex`87040800080000001122222233222222322122223221222231222222312222223121222233212222`);
    export const merged64 = image.ofBuffer(hex`87040800080000003321222232212222322122223122222231222222312122223322222211212222`);
    export const merged65 = image.ofBuffer(hex`87040800080000001122222221222222212122221321222232222222312222223121222231212222`);
    export const merged66 = image.ofBuffer(hex`87040800080000003121222231212222312122223122222214212222212122222122222211212222`);
    export const merged67 = image.ofBuffer(hex`87040800080000002122222211212222112222222321222232222222312222223121222231212222`);
    export const merged68 = image.ofBuffer(hex`87040800080000003122222231212222312222223121222224222222112222221121222221212222`);
    export const merged70 = image.ofBuffer(hex`87040800080000001111112311111123111111231111312233332322211122212112211111111111`);
    export const merged80 = image.ofBuffer(hex`87040800080000003333333323222222231111112311413323111134231111312311113123111131`);
    export const merged81 = image.ofBuffer(hex`87040800080000002311113423113433234133332341331123111411231111114344444433333333`);
    export const merged82 = image.ofBuffer(hex`87040800080000003333333323222222231111112311111123111111231111412311344123411133`);
    export const merged83 = image.ofBuffer(hex`87040800080000002341113323113441231111412311111123111111231111114344444433333333`);
    export const merged92 = image.ofBuffer(hex`87040800080000003333333322222234111111341111113413111134331111343333133433131134`);
    export const merged93 = image.ofBuffer(hex`87040800080000003333133433111134111111341111113411111134111111344444443433333333`);
    export const merged94 = image.ofBuffer(hex`87040800080000003333333322222234111111341111113411111134131111341311113433331334`);
    export const merged95 = image.ofBuffer(hex`87040800080000003333133413111134131111341111113411111134111111344444443433333333`);
    export const merged137 = image.ofBuffer(hex`87040800080000003333333323222222231111112311114123111134231141332311344323113424`);
    export const merged138 = image.ofBuffer(hex`87040800080000002311342423113443231141332311113423111141231111114344444433333333`);
    export const merged139 = image.ofBuffer(hex`87040800080000003333333323222222231111112311111123111111231111112311414423434333`);
    export const merged140 = image.ofBuffer(hex`87040800080000002343333323411114231141112311441123111411231111114344444433333333`);
    export const merged145 = image.ofBuffer(hex`87040800080000003333333322222234111111341111113413111134331111343313113434131134`);
    export const merged146 = image.ofBuffer(hex`87040800080000003413113433131134331111341311113411111134111111344444443433333333`);
    export const merged147 = image.ofBuffer(hex`87040800080000003333333322222234111111343111113431111134141111341431433333431134`);
    export const merged148 = image.ofBuffer(hex`87040800080000003343113411113434111141331111113411111134111111344444443433333333`);
    export const merged151 = image.ofBuffer(hex`87040800080000002222222222222222222222222222222222222222222242242222123422223443`);
    export const merged152 = image.ofBuffer(hex`87040800080000002222443422222243222222432222223222222222212211121121121111111111`);
    export const merged155 = image.ofBuffer(hex`87040800080000002222222222222222222222222233332232444423431144231441432311114423`);
    export const merged156 = image.ofBuffer(hex`87040800080000001111432311413323111434231141342343443422313313112222211211211111`);
    export const merged160 = image.ofBuffer(hex`87040800080000002222324122223241222232412222324122223214222222332222222222222222`);
    export const merged161 = image.ofBuffer(hex`87040800080000002222222222222222222222222232222222432332324434433234434332311343`);
    export const merged162 = image.ofBuffer(hex`87040800080000003231134332311313321131132213233222322222112212112222211211211111`);
    export const merged167 = image.ofBuffer(hex`87040800080000002222222222222222222222223323222244342222113323221141232233112322`);
    export const merged168 = image.ofBuffer(hex`87040800080000003341222214312322334122223311232211412322333322222222222222222222`);
    export const merged169 = image.ofBuffer(hex`87040800080000002222222222222222222222223333232244443422141444234141412311111123`);
    export const merged170 = image.ofBuffer(hex`87040800080000001111112311111123111111231111312233332322112212112222211211211111`);
    export const merged91 = image.ofBuffer(hex`87040800080000001111111111111111111111111111111111111111111111111111111111111111`);
    export const merged120 = image.ofBuffer(hex`87040800080000002121222221212222212122221122222211212222212122222122222211212222`);
    export const merged121 = image.ofBuffer(hex`87040800080000003322222232212222322222223121222231222222312222223321222221212222`);
    export const merged124 = image.ofBuffer(hex`87040800080000002222222222222222222222222222223222223333223233342232131322321344`);
    export const merged125 = image.ofBuffer(hex`87040800080000002232121322322214222233232222223222222222222222222222222222222222`);
    export const merged129 = image.ofBuffer(hex`87040800080000002222222222222222223233333333313133111313331314143113131323423333`);
    export const merged130 = image.ofBuffer(hex`87040800080000004114131311131414321114143343424222323333222222222222222222222222`);
    export const merged131 = image.ofBuffer(hex`87040800080000002222222222222222333322223131333313133333141431331313314433333344`);
    export const merged132 = image.ofBuffer(hex`87040800080000001313314414143144141443414222333333332222222222222222222222222222`);
    export const merged135 = image.ofBuffer(hex`87040800080000002222222222222222222222222322222233222222332222223322222234222222`);
    export const merged136 = image.ofBuffer(hex`87040800080000003422222231222222312222222322222222222222222222222222222222222222`);
    export const merged143 = image.ofBuffer(hex`87040800080000002222222222222222222222222222222222222222222222222222424422221411`);
    export const merged144 = image.ofBuffer(hex`87040800080000002222141122224244222222222222222222222222222222222222222222222222`);
    export const merged149 = image.ofBuffer(hex`87040800080000002222222222222222222222222222222222222222224444444411421111114241`);
    export const merged150 = image.ofBuffer(hex`87040800080000001111421144114211224444442222222222222222222222222222222222222222`);
    export const merged153 = image.ofBuffer(hex`87040800080000002222222222222222222222222222222222444444442114111121144141211424`);
    export const merged154 = image.ofBuffer(hex`87040800080000004221142411211441442114112244444422222222222222222222222222222222`);
    export const merged157 = image.ofBuffer(hex`87040800080000002222222222424444224411112214111144444444114211111142414114421114`);
    export const merged158 = image.ofBuffer(hex`87040800080000001442414211424111114211114444444422141111224411112242444422222222`);
    export const merged1 = image.ofBuffer(hex`87040800080000001112113311223311213111112213211132111211322112111321111113111111`);
    export const merged2 = image.ofBuffer(hex`87040800080000002222223322223311223211112213211132111211322112111321111113111111`);
    export const merged78 = image.ofBuffer(hex`87040800080000002211144122114444223133333333123422311234223112342231123422311234`);
    export const merged79 = image.ofBuffer(hex`87040800080000002231123422311234223112343333123422311234223133332211244143442441`);

    export function createTilemap(name: string): tiles.TileMapData {
        switch(name) {
            case "Atrium": return tiles.createTilemap(hex`160012007f7f7f7f7f145d5d5d5d78785d5d5d5d137f7f7f7f7f424344424546ce4748494a4a4b4748cd454c4d43444d4e3b3e4f50515253545556565753545850595a3b3e5b5c63655d5e5f266061625656636061255e646563656651535351676851696a6b6c6d6e6f705367715353515375757575757575757576313370757575757575757575757575757272727272765a5c70727272727272757575757575757272727272767c7d7072727272727272757575757575727272727276999a7072727272727275757594949393949493939495c5c8929494949494939394947f7f7f7f7f7f7f5556c1c456c457587f7f7f7f7f7f7f7f7f7f7f7f7f7f1f7979797979797a7f7f7f7f7f7f7f7f7f7f7f7f7f7f1f797979f379797a7f7f7f7f7f7f7f7f7f7f7f7f7f7f1f791c797979797a827f7f7f7f7f7f7f7f7f7f7f7f7f7779797979791df6827f7f7f7f7f7f7f7f7f7f7f7f7f77797979797979f6827f7f7f7f7f7f7f7f7f7f7f7f7f777979797979797a827f7f7f7f7f7f7f7f7f7f7f7f7f7779791e797979f6827f7f7f7f7f7f`, img`\n2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . . . . . . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 . . . . . . 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 . . . . . . 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 . . . . . . 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 . . . . . . 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 . . . . . . 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 . . . . . . 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 . . . . . . 2 2 2 2 2 2 2 2 
`, [tomb.transparency16,tomb.tile1,tomb.tile2,tomb.tile3,tomb.tile4,tomb.tile5,tomb.tile6,tomb.tile7,tomb.tile8,tomb.tile9,tomb.tile10,tomb.tile11,tomb.tile12,tomb.tile13,tomb.tile14,tomb.tile15,tomb.tile16,tomb.tile17,tomb.tile18,tomb.tile19,tomb.tile20,tomb.tile21,tomb.tile22,tomb.tile23,tomb.tile24,tomb.tile25,tomb.tile26,tomb.tile27,tomb.tile28,tomb.tile29,tomb.tile30,tomb.tile31,tomb.tile32,tomb.tile33,tomb.tile34,tomb.tile35,tomb.tile36,tomb.tile37,tomb.tile38,tomb.tile39,tomb.tile40,tomb.tile41,tomb.tile42,tomb.tile43,tomb.tile44,tomb.tile45,tomb.tile46,tomb.tile47,tomb.tile48,tomb.tile49,tomb.tile50,tomb.tile51,tomb.tile52,tomb.tile53,tomb.tile54,tomb.tile55,tomb.tile56,tomb.tile57,tomb.tile58,tomb.tile59,tomb.tile60,tomb.tile61,tomb.tile62,tomb.tile63,tomb.tile64,tomb.tile65,tomb.tile66,tomb.tile67,tomb.tile68,tomb.tile69,tomb.tile70,tomb.tile71,tomb.tile72,tomb.tile73,tomb.tile74,tomb.tile75,tomb.tile76,tomb.tile77,tomb.tile78,tomb.tile79,tomb.tile80,tomb.tile81,tomb.tile82,tomb.tile83,tomb.tile84,tomb.tile85,tomb.tile86,tomb.tile87,tomb.tile88,tomb.tile89,tomb.tile90,tomb.tile91,tomb.tile92,tomb.tile93,tomb.tile94,tomb.tile95,tomb.tile96,tomb.tile97,tomb.tile98,tomb.tile99,tomb.tile100,tomb.tile101,tomb.tile102,tomb.tile103,tomb.tile104,tomb.tile105,tomb.tile106,tomb.tom_down,tomb.tile107,tomb.tile108,tomb.tile109,tomb.tile110,tomb.tile111,tomb.tile112,tomb.tile113,tomb.tile114,tomb.tile115,tomb.tile116,tomb.tile117,tomb.tile118,tomb.tile119,tomb.tile120,tomb.tile121,tomb.tile122,tomb.tile123,tomb.tile124,tomb.tile125,tomb.tile126,tomb.tile127,tomb.tile128,tomb.tile129,tomb.tile130,tomb.tile131,tomb.tile132,tomb.tile133,tomb.tile134,tomb.tile135,tomb.tile136,tomb.tile137,tomb.tile138,tomb.tile139,tomb.tile140,tomb.tile141,tomb.tile142,tomb.tile143,tomb.tile144,tomb.tile145,tomb.tile146,tomb.tile147,tomb.tile148,tomb.tile149,tomb.tile150,tomb.tile151,tomb.tile152,tomb.tile153,tomb.tile154,tomb.tile155,tomb.tile156,tomb.tile157,tomb.tile158,tomb.tile159,tomb.tile160,tomb.tile161,tomb.tile162,tomb.tile163,tomb.tile164,tomb.tile165,tomb.tile166,tomb.tile167,tomb.tile168,tomb.tile169,tomb.tile170,tomb.tile171,tomb.tile172,tomb.tile173,tomb.tile174,tomb.tile175,tomb.tile176,tomb.tile177,tomb.tile178,tomb.tile179,tomb.tile180,tomb.tile181,tomb.tile182,tomb.tile183,tomb.tile184,tomb.tile185,tomb.tile186,tomb.tile187,tomb.tile188,tomb.Crate,tomb.tile189,tomb.tile190,tomb.tile191,tomb.tile192,tomb.DartShooter,tomb.tile193,tomb.tile194,tomb.tile195,tomb.tile196,tomb.tile197,tomb.tile198,tomb.tile199,tomb.tile200,tomb.tile201,tomb.tile202,tomb.tile203,tomb.tile204,tomb.tile205,tomb.tile206,tomb.tile207,tomb.tile208,tomb.tile209,tomb.tile210,tomb.tile211,tomb.tile212,tomb.tile213,tomb.tile214,tomb.Pit,tomb.tile215,tomb.tile216,tomb.DartShooter_1,tomb.tile217,tomb.tile218,tomb.tile219,tomb.tile220,tomb.tile221,tomb.tile222,tomb.tile223,tomb.tile224,tomb.tile225,tomb.tile226,tomb.tile227,tomb.tile228,tomb.tile229,tomb.tile230,tomb.tile231,tomb.tile232,tomb.tile233,tomb.tile234,tomb.Switch,tomb.tile235,tomb.tile236,tomb.tile237,tomb.tile238,tomb.tile239,tomb.tile240,tomb.tile241,tomb.tile242,tomb.tile243,tomb.tile244,tomb.tile245,tomb.tile246,tomb.tile247,tomb.tile248,tomb.tile249,tomb.tile250,tomb.tile251,tomb.tile252,tomb.Spikes,tomb.tile253,tomb.Spikes_1,tomb.tile254,tomb.tile255,tomb.tile256,tomb.tile257,tomb.tile258,tomb.tile259,tomb.tile260,tomb.PressurePlate,tomb.tile261,tomb.tile262,tomb.tile263,tomb.tile264,tomb.tile265,tomb.tile266,tomb.tile267,tomb.tile268,tomb.tile269,tomb.tile270,tomb.tile271,tomb.tile272,tomb.tile273,tomb.tile274,tomb.tile275,tomb.tile276,tomb.tile277,tomb.tile278,tomb.tile279,tomb.tile280,tomb.tile281,tomb.tile282,tomb.tile283,tomb.tile284,tomb.tile285,tomb.tile286,tomb.tile287,tomb.tile288,tomb.tile289,tomb.tile290,tomb.Bomb,tomb.tile291,tomb.tile292,tomb.tile293,tomb.tile294,tomb.tile295,tomb.tile296,tomb.tile297,tomb.tile298,tomb.tile299,tomb.tile300,tomb.tile301,tomb.tile302,tomb.tile303,tomb.tile304,tomb.tile305,tomb.tile306,tomb.tile307,tomb.tile308,tomb.tile309,tomb.tile310,tomb.Door,tomb.merged191,tomb.merged192,tomb.merged193,tomb.merged194,tomb.merged195,tomb.merged196,tomb.merged197,tomb.merged198,tomb.merged199,tomb.merged200,tomb.merged201,tomb.merged202,tomb.merged204,tomb.merged205,tomb.merged206,tomb.merged207,tomb.merged203,tomb.merged208,tomb.merged209,tomb.merged210,tomb.merged63,tomb.merged211,tomb.merged212,tomb.merged213,tomb.merged214,tomb.merged215,tomb.merged216,tomb.merged217,tomb.merged218,tomb.merged219,tomb.merged220,tomb.merged221,tomb.merged222,tomb.merged223,tomb.merged224,tomb.merged225,tomb.merged226,tomb.merged227,tomb.merged228,tomb.merged229,tomb.merged230,tomb.merged231,tomb.merged232,tomb.merged233,tomb.merged234,tomb.merged235,tomb.merged236,tomb.merged237], TileScale.Eight);
            case "Nexus": return tiles.createTilemap(hex`1e002a005b5d5b5d5b5d5b5d5b5d5b5d5b5d5b5d5b5d5b5d5b5d5b5d5b5d5b5d5b5bcacacacacac9caca4243ca444546478c484445ca4243cacacac9c9c9c9c9f9f9f938f937f9f9494a4b4c4d4e00004f4c4d4b494a38f9f9f8f8f838f82222484a22210122505122525354000055525322505122025657484a2121c457c457c15657c45859c45a5bc45c5d565e5f576059c1c46162c456c4561d787978791d79797979796364796566796364797979f3787878797879787978797879f579781d7879797979f47979797979797979787878797879787978797879787978787878781e6768686978787878787978787879787978791d797879787978f3787878782627282978781d78787978797878787978797979787978797878797979796a4e506b797979797979f37978787879785d5b5d5b5e1f79780b969796976c6e716d979796970d7978f6595b5d5b5b7f7f7f7f801ff3787a4f51535351535353535151541f7978f67b7f7f7f7f7f7f7f7f807779787a707575757575757575757576777978f67b7f7f7f7f7f7f7f7f807779787a9294949308757507949493951f79f47a7b7f7f7f7f7f7f7f7f801f7978f66e6f1f20707575761f2070711f7978f67b7f7f7f7f7f7f7f7f801f79787a7273747570757576767778797779787a7b7f7f7f7f7f7f7f7f801f79782d57587a7b929394957c7d55572f7978f67b7f7f7f7f7f7f7f7f8077797879797a90915556565890911f797879787a7b7f7f7f7f7f7f7f7f8077791d79792d56572f79782d56562f7978f5787a987f7f7f7f7f7f7f7f801f79787979781d7978797879787978797e7f78f67b7f7f7f7f7f7f7f7f9d777978797879797978791c79780078798081787a987f7f7f7f7f7f7f7f801f797879595b5d5e78797879595b5d5e787978f6987f7f7f7f7f7f7f7f801ff379797b7e7f80787978797b7e7f807879f47a987f7f7f7f7f7f7f7f8077797979989b9c9d78797979989b9c9d787978f6987f7f7f7f7f7f7f7f8077797979c6c9cacb78f37979c6c9cacb787878f6987f7f7f7f7f7f7f7f801f797879f7394bfa78797879f782f9fa781c78f6987f7f7f7f7f7f7f7f801f7978792021222378797879202102237878787a987f7f7f7f7f7f7f7f80777978797879797979797879787878797878787a987f7f7f7f7f7f7f7f8077791e797879787978787879787978797878787a987f7f7f7f7f7f7f7f801f797879787878797879f57978797879781c787a987f7f7f7f7f7f7f7f801f79787978781c7978797879787978797878797a987f7f7f7f7f7f7f7f9d777978797878787978791d79787978787879787a987f7f7f7f7f7f7f7f145b5d5b5d5e1f79797979797979787a595b5d5b5d137f7f7f7f827f7f7f7f7f7f7f7f80838478797978791e787a7b7f7f7f7f7f7f7f7f7f827f7f7f7f7f7f7f7f9d858678791d787978787a987f7f7f7f7f7f7f7f7f827f7f7f7f7f7f7f7f9d1f7987887978791d787a7b7f7f7f7f7f7f7f7f7f827f7f7f7f7f7f7f7f80771e656679787979787a987f7f7f7f7f7f7f7f7f827f7f7f7f7f7f7f7f9d1f79787979787979787a7b7f7f7f7f7f7f7f7f7f9f7f7f7f7f7f7f7f7f807779f5797979791c797a987f7f7f7f7f7f7f7f7f9f7f7f7f7f7f7f7f7f9d1f797879791d7879898a7b7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f9d77797879797978798b8c7b7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f7f9d1f78f5787878787978f6987f7f7f7f7f7f7f7f7f`, img`\n2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . . . . 2 2 . 2 2 . . . . 2 2 . 2 2 . . . . . . . . 
. . . . . . . . . . . 2 2 . . . . 2 2 . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 2 2 2 2 . . . . . . . . . . . . . 
. . . . . . . . . . . . . 2 2 2 2 . . . . . . . . . . . . . 
. . . . . . . . . . . . . 2 2 2 2 . . . . . . . . . . . . . 
2 2 2 2 2 . . . . . . . . 2 2 2 2 . . . . . . . . 2 2 2 2 2 
2 2 2 2 2 . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . 2 2 2 2 2 
2 2 2 2 2 . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . 2 2 2 2 2 
2 2 2 2 2 . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . 2 2 2 2 2 
2 2 2 2 2 . . . . . . 2 2 2 2 2 2 2 2 . . . . . . 2 2 2 2 2 
2 2 2 2 2 . . . . . . 2 2 2 2 2 2 2 2 . . . . . . 2 2 2 2 2 
2 2 2 2 2 . . . . . . 2 2 2 2 2 2 2 2 . . . . . . 2 2 2 2 2 
2 2 2 2 2 . . . . . . 2 2 . . . . 2 2 . . . . . . 2 2 2 2 2 
2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 
2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 
2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 
2 2 2 2 2 . . . . 2 2 2 2 . . . . 2 2 2 2 . . . . 2 2 2 2 2 
2 2 2 2 2 . . . . 2 2 2 2 . . . . 2 2 2 2 . . . . 2 2 2 2 2 
2 2 2 2 2 . . . . 2 2 2 2 . . . . 2 2 2 2 . . . . 2 2 2 2 2 
2 2 2 2 2 . . . . 2 2 2 2 . . . . 2 2 2 2 . . . . 2 2 2 2 2 
2 2 2 2 2 . . . . 2 2 2 2 . . . . 2 2 2 2 . . . . 2 2 2 2 2 
2 2 2 2 2 . . . . 2 2 2 2 . . . . 2 2 2 2 . . . . 2 2 2 2 2 
2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 
2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 
2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 
2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 
2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 
`, [tomb.transparency16,tomb.tile1,tomb.tile2,tomb.tile3,tomb.tile4,tomb.tile5,tomb.tile6,tomb.tile7,tomb.tile8,tomb.tile9,tomb.tile10,tomb.tile11,tomb.tile12,tomb.tile13,tomb.tile14,tomb.tile15,tomb.tile16,tomb.tile17,tomb.tile18,tomb.tile19,tomb.tile20,tomb.tile21,tomb.tile22,tomb.tile23,tomb.tile24,tomb.tile25,tomb.tile26,tomb.tile27,tomb.tile28,tomb.tile29,tomb.tile30,tomb.tile31,tomb.tile32,tomb.tile33,tomb.tile34,tomb.tile35,tomb.tile36,tomb.tile37,tomb.tile38,tomb.tile39,tomb.tile40,tomb.tile41,tomb.tile42,tomb.tile43,tomb.tile44,tomb.tile45,tomb.tile46,tomb.tile47,tomb.tile48,tomb.tile49,tomb.tile50,tomb.tile51,tomb.tile52,tomb.tile53,tomb.tile54,tomb.tile55,tomb.tile56,tomb.tile57,tomb.tile58,tomb.tile59,tomb.tile60,tomb.tile61,tomb.tile62,tomb.tile63,tomb.tile64,tomb.tile65,tomb.tile66,tomb.tile67,tomb.tile68,tomb.tile69,tomb.tile70,tomb.tile71,tomb.tile72,tomb.tile73,tomb.tile74,tomb.tile75,tomb.tile76,tomb.tile77,tomb.tile78,tomb.tile79,tomb.tile80,tomb.tile81,tomb.tile82,tomb.tile83,tomb.tile84,tomb.tile85,tomb.tile86,tomb.tile87,tomb.tile88,tomb.tile89,tomb.tile90,tomb.tile91,tomb.tile92,tomb.tile93,tomb.tile94,tomb.tile95,tomb.tile96,tomb.tile97,tomb.tile98,tomb.tile99,tomb.tile100,tomb.tile101,tomb.tile102,tomb.tile103,tomb.tile104,tomb.tile105,tomb.tile106,tomb.tom_down,tomb.tile107,tomb.tile108,tomb.tile109,tomb.tile110,tomb.tile111,tomb.tile112,tomb.tile113,tomb.tile114,tomb.tile115,tomb.tile116,tomb.tile117,tomb.tile118,tomb.tile119,tomb.tile120,tomb.tile121,tomb.tile122,tomb.tile123,tomb.tile124,tomb.tile125,tomb.tile126,tomb.tile127,tomb.tile128,tomb.tile129,tomb.tile130,tomb.tile131,tomb.tile132,tomb.tile133,tomb.tile134,tomb.tile135,tomb.tile136,tomb.tile137,tomb.tile138,tomb.tile139,tomb.tile140,tomb.tile141,tomb.tile142,tomb.tile143,tomb.tile144,tomb.tile145,tomb.tile146,tomb.tile147,tomb.tile148,tomb.tile149,tomb.tile150,tomb.tile151,tomb.tile152,tomb.tile153,tomb.tile154,tomb.tile155,tomb.tile156,tomb.tile157,tomb.tile158,tomb.tile159,tomb.tile160,tomb.tile161,tomb.tile162,tomb.tile163,tomb.tile164,tomb.tile165,tomb.tile166,tomb.tile167,tomb.tile168,tomb.tile169,tomb.tile170,tomb.tile171,tomb.tile172,tomb.tile173,tomb.tile174,tomb.tile175,tomb.tile176,tomb.tile177,tomb.tile178,tomb.tile179,tomb.tile180,tomb.tile181,tomb.tile182,tomb.tile183,tomb.tile184,tomb.tile185,tomb.tile186,tomb.tile187,tomb.tile188,tomb.Crate,tomb.tile189,tomb.tile190,tomb.tile191,tomb.tile192,tomb.DartShooter,tomb.tile193,tomb.tile194,tomb.tile195,tomb.tile196,tomb.tile197,tomb.tile198,tomb.tile199,tomb.tile200,tomb.tile201,tomb.tile202,tomb.tile203,tomb.tile204,tomb.tile205,tomb.tile206,tomb.tile207,tomb.tile208,tomb.tile209,tomb.tile210,tomb.tile211,tomb.tile212,tomb.tile213,tomb.tile214,tomb.Pit,tomb.tile215,tomb.tile216,tomb.DartShooter_1,tomb.tile217,tomb.tile218,tomb.tile219,tomb.tile220,tomb.tile221,tomb.tile222,tomb.tile223,tomb.tile224,tomb.tile225,tomb.tile226,tomb.tile227,tomb.tile228,tomb.tile229,tomb.tile230,tomb.tile231,tomb.tile232,tomb.tile233,tomb.tile234,tomb.Switch,tomb.tile235,tomb.tile236,tomb.tile237,tomb.tile238,tomb.tile239,tomb.tile240,tomb.tile241,tomb.tile242,tomb.tile243,tomb.tile244,tomb.tile245,tomb.tile246,tomb.tile247,tomb.tile248,tomb.tile249,tomb.tile250,tomb.tile251,tomb.tile252,tomb.Spikes,tomb.tile253,tomb.Spikes_1,tomb.tile254,tomb.tile255,tomb.tile256,tomb.tile257,tomb.tile258,tomb.tile259,tomb.tile260,tomb.PressurePlate,tomb.tile261,tomb.tile262,tomb.tile263,tomb.tile264,tomb.tile265,tomb.tile266,tomb.tile267,tomb.tile268,tomb.tile269,tomb.tile270,tomb.tile271,tomb.tile272,tomb.tile273,tomb.tile274,tomb.tile275,tomb.tile276,tomb.tile277,tomb.tile278,tomb.tile279,tomb.tile280,tomb.tile281,tomb.tile282,tomb.tile283,tomb.tile284,tomb.tile285,tomb.tile286,tomb.tile287,tomb.tile288,tomb.tile289,tomb.tile290,tomb.Bomb,tomb.tile291,tomb.tile292,tomb.tile293,tomb.tile294,tomb.tile295,tomb.tile296,tomb.tile297,tomb.tile298,tomb.tile299,tomb.tile300,tomb.tile301,tomb.tile302,tomb.tile303,tomb.tile304,tomb.tile305,tomb.tile306,tomb.tile307,tomb.tile308,tomb.tile309,tomb.tile310,tomb.Door,tomb.merged71,tomb.merged72,tomb.merged73,tomb.merged74,tomb.merged75,tomb.merged76,tomb.merged77,tomb.merged84,tomb.merged85,tomb.merged86,tomb.merged87,tomb.merged88,tomb.merged89,tomb.merged90,tomb.merged100,tomb.merged101,tomb.merged102,tomb.merged103,tomb.merged104,tomb.merged53,tomb.merged60,tomb.merged105,tomb.merged110,tomb.merged111,tomb.merged112,tomb.merged113,tomb.merged114,tomb.merged115,tomb.merged116,tomb.merged117,tomb.merged118,tomb.merged69,tomb.merged119,tomb.merged122,tomb.merged123,tomb.merged35,tomb.merged36,tomb.merged126,tomb.merged127,tomb.merged128,tomb.merged133,tomb.merged134,tomb.merged141,tomb.merged142,tomb.merged163,tomb.merged164,tomb.merged165,tomb.merged166,tomb.merged171,tomb.merged172,tomb.merged173,tomb.merged174,tomb.merged175,tomb.merged176,tomb.merged177,tomb.merged178,tomb.merged179,tomb.merged180,tomb.merged181,tomb.merged182,tomb.merged25,tomb.merged26,tomb.merged27,tomb.merged28,tomb.merged183,tomb.merged184,tomb.merged185,tomb.merged186,tomb.merged187,tomb.merged33,tomb.merged34,tomb.merged159,tomb.merged188,tomb.merged189,tomb.merged190], TileScale.Eight);
            case "Corridor": return tiles.createTilemap(hex`140012005b5d5b5d5b5d5b5d5b5d5b5d5b5d5b5d5b5d5b5dc9cac9cac9cac9cac9cac9cac9cac9cac9cac9caf8f9f8f9f839f8f9f8f9f8f9f839f8f93af9f8f942432122212221222122212244452122022221224647c457c1c17879090a57564849c1c4c4c456c47879787978791d791d007879f57978f37879787978791c797879787900007879787978797879787978797879787941004100781e781e7879787978797879f579787978790c0e787978797879787978797879787978791e792e3078797879787978791e795b5d5d5d5d5d5b5d5d5d5d5d5d5d5d5d5d5d5d5d7e7f7f7f7f7f7e7f7f7f7f7f7f7f7f7f7f7f7f7f81828282828282828282828282828282828282829e9f818182829f9f9f9f9f9f9f9f9f9f9f9f9f9f81818281829f82818281828281828282818281829e818281829f81818281818181829f9f818281828182828181829e8181819e8181829e9f8182828281829f9e81829e819e819e8182829e9f81828282`, img`\n2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . . . . 2 2 . . . . . . . . . . 
. . . . . . 2 . 2 . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . 2 2 . . . . . . . . . . 
. . . . . . 2 . 2 2 . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [tomb.transparency16,tomb.tile1,tomb.tile2,tomb.tile3,tomb.tile4,tomb.tile5,tomb.tile6,tomb.tile7,tomb.tile8,tomb.tile9,tomb.tile10,tomb.tile11,tomb.tile12,tomb.tile13,tomb.tile14,tomb.tile15,tomb.tile16,tomb.tile17,tomb.tile18,tomb.tile19,tomb.tile20,tomb.tile21,tomb.tile22,tomb.tile23,tomb.tile24,tomb.tile25,tomb.tile26,tomb.tile27,tomb.tile28,tomb.tile29,tomb.tile30,tomb.tile31,tomb.tile32,tomb.tile33,tomb.tile34,tomb.tile35,tomb.tile36,tomb.tile37,tomb.tile38,tomb.tile39,tomb.tile40,tomb.tile41,tomb.tile42,tomb.tile43,tomb.tile44,tomb.tile45,tomb.tile46,tomb.tile47,tomb.tile48,tomb.tile49,tomb.tile50,tomb.tile51,tomb.tile52,tomb.tile53,tomb.tile54,tomb.tile55,tomb.tile56,tomb.tile57,tomb.tile58,tomb.tile59,tomb.tile60,tomb.tile61,tomb.tile62,tomb.tile63,tomb.tile64,tomb.tile65,tomb.tile66,tomb.tile67,tomb.tile68,tomb.tile69,tomb.tile70,tomb.tile71,tomb.tile72,tomb.tile73,tomb.tile74,tomb.tile75,tomb.tile76,tomb.tile77,tomb.tile78,tomb.tile79,tomb.tile80,tomb.tile81,tomb.tile82,tomb.tile83,tomb.tile84,tomb.tile85,tomb.tile86,tomb.tile87,tomb.tile88,tomb.tile89,tomb.tile90,tomb.tile91,tomb.tile92,tomb.tile93,tomb.tile94,tomb.tile95,tomb.tile96,tomb.tile97,tomb.tile98,tomb.tile99,tomb.tile100,tomb.tile101,tomb.tile102,tomb.tile103,tomb.tile104,tomb.tile105,tomb.tile106,tomb.tom_down,tomb.tile107,tomb.tile108,tomb.tile109,tomb.tile110,tomb.tile111,tomb.tile112,tomb.tile113,tomb.tile114,tomb.tile115,tomb.tile116,tomb.tile117,tomb.tile118,tomb.tile119,tomb.tile120,tomb.tile121,tomb.tile122,tomb.tile123,tomb.tile124,tomb.tile125,tomb.tile126,tomb.tile127,tomb.tile128,tomb.tile129,tomb.tile130,tomb.tile131,tomb.tile132,tomb.tile133,tomb.tile134,tomb.tile135,tomb.tile136,tomb.tile137,tomb.tile138,tomb.tile139,tomb.tile140,tomb.tile141,tomb.tile142,tomb.tile143,tomb.tile144,tomb.tile145,tomb.tile146,tomb.tile147,tomb.tile148,tomb.tile149,tomb.tile150,tomb.tile151,tomb.tile152,tomb.tile153,tomb.tile154,tomb.tile155,tomb.tile156,tomb.tile157,tomb.tile158,tomb.tile159,tomb.tile160,tomb.tile161,tomb.tile162,tomb.tile163,tomb.tile164,tomb.tile165,tomb.tile166,tomb.tile167,tomb.tile168,tomb.tile169,tomb.tile170,tomb.tile171,tomb.tile172,tomb.tile173,tomb.tile174,tomb.tile175,tomb.tile176,tomb.tile177,tomb.tile178,tomb.tile179,tomb.tile180,tomb.tile181,tomb.tile182,tomb.tile183,tomb.tile184,tomb.tile185,tomb.tile186,tomb.tile187,tomb.tile188,tomb.Crate,tomb.tile189,tomb.tile190,tomb.tile191,tomb.tile192,tomb.DartShooter,tomb.tile193,tomb.tile194,tomb.tile195,tomb.tile196,tomb.tile197,tomb.tile198,tomb.tile199,tomb.tile200,tomb.tile201,tomb.tile202,tomb.tile203,tomb.tile204,tomb.tile205,tomb.tile206,tomb.tile207,tomb.tile208,tomb.tile209,tomb.tile210,tomb.tile211,tomb.tile212,tomb.tile213,tomb.tile214,tomb.Pit,tomb.tile215,tomb.tile216,tomb.DartShooter_1,tomb.tile217,tomb.tile218,tomb.tile219,tomb.tile220,tomb.tile221,tomb.tile222,tomb.tile223,tomb.tile224,tomb.tile225,tomb.tile226,tomb.tile227,tomb.tile228,tomb.tile229,tomb.tile230,tomb.tile231,tomb.tile232,tomb.tile233,tomb.tile234,tomb.Switch,tomb.tile235,tomb.tile236,tomb.tile237,tomb.tile238,tomb.tile239,tomb.tile240,tomb.tile241,tomb.tile242,tomb.tile243,tomb.tile244,tomb.tile245,tomb.tile246,tomb.tile247,tomb.tile248,tomb.tile249,tomb.tile250,tomb.tile251,tomb.tile252,tomb.Spikes,tomb.tile253,tomb.Spikes_1,tomb.tile254,tomb.tile255,tomb.tile256,tomb.tile257,tomb.tile258,tomb.tile259,tomb.tile260,tomb.PressurePlate,tomb.tile261,tomb.tile262,tomb.tile263,tomb.tile264,tomb.tile265,tomb.tile266,tomb.tile267,tomb.tile268,tomb.tile269,tomb.tile270,tomb.tile271,tomb.tile272,tomb.tile273,tomb.tile274,tomb.tile275,tomb.tile276,tomb.tile277,tomb.tile278,tomb.tile279,tomb.tile280,tomb.tile281,tomb.tile282,tomb.tile283,tomb.tile284,tomb.tile285,tomb.tile286,tomb.tile287,tomb.tile288,tomb.tile289,tomb.tile290,tomb.Bomb,tomb.tile291,tomb.tile292,tomb.tile293,tomb.tile294,tomb.tile295,tomb.tile296,tomb.tile297,tomb.tile298,tomb.tile299,tomb.tile300,tomb.tile301,tomb.tile302,tomb.tile303,tomb.tile304,tomb.tile305,tomb.tile306,tomb.tile307,tomb.tile308,tomb.tile309,tomb.tile310,tomb.Door,tomb.merged96,tomb.merged97,tomb.merged98,tomb.merged99,tomb.merged106,tomb.merged107,tomb.merged108,tomb.merged109], TileScale.Eight);
            case "Storage": return tiles.createTilemap(hex`2e0018009b9b9b9b9b9b9b9b9b9b9b9c9c9c9c9c9b9b9b9b9b9b9b9c9b9b9b9b9b9b9b9b9b9b9b9b9b9b9b9b9b9b9b9b9c7e7f80c6c94243444546474542434445464745434448cb7b80c6c9c9c9c9c9c9c9c9c9c9c9c9c9c9c9c9c9cacb7b7e7f9df738494a4b4c3b3e4d384a4b4c3b3e4d4a4b4efa989df7f838f83af8f8f8f8f838f8f8f8f8383af8f9fa7b7e7f9d20484a4f5051636552024f50516365524f505323989d2021212102210121484a212154552121022122237b7e7f8055c456565756c4c456565757c4c456c457c4c4587b8055c45656c1c456c1c4c1c1565657c4c45756c1587b7e7f9d777978f47879787978797879787978791d79787a989d777978791d797879787978797879787978f3797a7b9b7f9d1f79787978797879f479787978797879787978f6989d77797879787978794f51515351535354787978f67b7e7f9d77797879787997f378797879787978797879787ac6cb1f7978797879787970727575727575767879787a7b9b7f9d1f79585979f6595e77797879787978791d79787af7fa777978797879797970727275727575767879787a7b7e7f9d1f795a5b78f67b8077797879787978797879787a2023777978f4787978797072727572757576f579787a7b7e7f9d777978795c5d7b9d7779787978791f207879787957c1787978f34f5151532a727275727575767879787a7b7e7f9d777978795e5f9880777978797879424378797879787978797879707275757275727572757576787978f67b9b7f9d5b5d5b5d5b5d139d1d7978797879676860617879781c78797879707275757275727572757576787978f67b7e7f9dc6c9c9cac9c9cacb7779787978799091626378797879787978f37072727275079394939494957879f5f67b7e7f9df7f8f8f93af8f9fa777978791c79787978f378797879787978797072727275767879787979797879787a7b7e7f9d20212122022122237779787978797879787978797879787978f59293939494957879787978f4787978f67b7e7f9d575756c1c1c1c15678797879787978797879787a595e777978f41e79787978797879787978797879787a7b9b7f9d1f7978797879787978797879f57978797879787a7b9d1f7978797879787978f47879787978606179787a7b7e7f9d77797879787978797879787978797879787978f67b9d1f797879f47978797879787978797862631c787a7b7e7f9d7779f3791e79787978791d7978797879781e78f67b9d1f7978797879787978f5781e78797879787978f67b7e7f9d1f797879787978797879787978797879787978f67b9d77797879787978797879787978797879787978f67b9b7f9d777978797879787978797879787978797879787a989d7779787978797879787978797879781e7879787a987e7f145b5b5d127879105b5b5b64655b5b5b5b64655b5d13145b5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d139b7f80c6c9ca66313267c9caca68696a6b6c6d6869cacb35367e7e7e7e7e7e7e7e7e7e7e7e7e7e7e7f7f7f7f7e7f9b`, img`\n2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 
2 2 . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 
2 2 . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . 2 2 2 2 2 2 2 2 . . . . 2 2 
2 2 . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . 2 2 2 2 2 2 2 2 . . . . 2 2 
2 2 . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . 2 2 2 2 2 2 2 2 . . . . 2 2 
2 2 . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . 2 2 2 2 2 2 2 2 . . . . 2 2 
2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . 2 2 
2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . 2 2 
2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . 2 2 
2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . 2 2 
2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 . . . . . . . . . . 2 2 
2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 . . . . . . . . . . 2 2 
2 2 . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 
2 2 . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 
2 2 . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 
2 2 . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 
2 2 . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 
2 2 . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 
2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [tomb.transparency16,tomb.tile1,tomb.tile2,tomb.tile3,tomb.tile4,tomb.tile5,tomb.tile6,tomb.tile7,tomb.tile8,tomb.tile9,tomb.tile10,tomb.tile11,tomb.tile12,tomb.tile13,tomb.tile14,tomb.tile15,tomb.tile16,tomb.tile17,tomb.tile18,tomb.tile19,tomb.tile20,tomb.tile21,tomb.tile22,tomb.tile23,tomb.tile24,tomb.tile25,tomb.tile26,tomb.tile27,tomb.tile28,tomb.tile29,tomb.tile30,tomb.tile31,tomb.tile32,tomb.tile33,tomb.tile34,tomb.tile35,tomb.tile36,tomb.tile37,tomb.tile38,tomb.tile39,tomb.tile40,tomb.tile41,tomb.tile42,tomb.tile43,tomb.tile44,tomb.tile45,tomb.tile46,tomb.tile47,tomb.tile48,tomb.tile49,tomb.tile50,tomb.tile51,tomb.tile52,tomb.tile53,tomb.tile54,tomb.tile55,tomb.tile56,tomb.tile57,tomb.tile58,tomb.tile59,tomb.tile60,tomb.tile61,tomb.tile62,tomb.tile63,tomb.tile64,tomb.tile65,tomb.tile66,tomb.tile67,tomb.tile68,tomb.tile69,tomb.tile70,tomb.tile71,tomb.tile72,tomb.tile73,tomb.tile74,tomb.tile75,tomb.tile76,tomb.tile77,tomb.tile78,tomb.tile79,tomb.tile80,tomb.tile81,tomb.tile82,tomb.tile83,tomb.tile84,tomb.tile85,tomb.tile86,tomb.tile87,tomb.tile88,tomb.tile89,tomb.tile90,tomb.tile91,tomb.tile92,tomb.tile93,tomb.tile94,tomb.tile95,tomb.tile96,tomb.tile97,tomb.tile98,tomb.tile99,tomb.tile100,tomb.tile101,tomb.tile102,tomb.tile103,tomb.tile104,tomb.tile105,tomb.tile106,tomb.tom_down,tomb.tile107,tomb.tile108,tomb.tile109,tomb.tile110,tomb.tile111,tomb.tile112,tomb.tile113,tomb.tile114,tomb.tile115,tomb.tile116,tomb.tile117,tomb.tile118,tomb.tile119,tomb.tile120,tomb.tile121,tomb.tile122,tomb.tile123,tomb.tile124,tomb.tile125,tomb.tile126,tomb.tile127,tomb.tile128,tomb.tile129,tomb.tile130,tomb.tile131,tomb.tile132,tomb.tile133,tomb.tile134,tomb.tile135,tomb.tile136,tomb.tile137,tomb.tile138,tomb.tile139,tomb.tile140,tomb.tile141,tomb.tile142,tomb.tile143,tomb.tile144,tomb.tile145,tomb.tile146,tomb.tile147,tomb.tile148,tomb.tile149,tomb.tile150,tomb.tile151,tomb.tile152,tomb.tile153,tomb.tile154,tomb.tile155,tomb.tile156,tomb.tile157,tomb.tile158,tomb.tile159,tomb.tile160,tomb.tile161,tomb.tile162,tomb.tile163,tomb.tile164,tomb.tile165,tomb.tile166,tomb.tile167,tomb.tile168,tomb.tile169,tomb.tile170,tomb.tile171,tomb.tile172,tomb.tile173,tomb.tile174,tomb.tile175,tomb.tile176,tomb.tile177,tomb.tile178,tomb.tile179,tomb.tile180,tomb.tile181,tomb.tile182,tomb.tile183,tomb.tile184,tomb.tile185,tomb.tile186,tomb.tile187,tomb.tile188,tomb.Crate,tomb.tile189,tomb.tile190,tomb.tile191,tomb.tile192,tomb.DartShooter,tomb.tile193,tomb.tile194,tomb.tile195,tomb.tile196,tomb.tile197,tomb.tile198,tomb.tile199,tomb.tile200,tomb.tile201,tomb.tile202,tomb.tile203,tomb.tile204,tomb.tile205,tomb.tile206,tomb.tile207,tomb.tile208,tomb.tile209,tomb.tile210,tomb.tile211,tomb.tile212,tomb.tile213,tomb.tile214,tomb.Pit,tomb.tile215,tomb.tile216,tomb.DartShooter_1,tomb.tile217,tomb.tile218,tomb.tile219,tomb.tile220,tomb.tile221,tomb.tile222,tomb.tile223,tomb.tile224,tomb.tile225,tomb.tile226,tomb.tile227,tomb.tile228,tomb.tile229,tomb.tile230,tomb.tile231,tomb.tile232,tomb.tile233,tomb.tile234,tomb.Switch,tomb.tile235,tomb.tile236,tomb.tile237,tomb.tile238,tomb.tile239,tomb.tile240,tomb.tile241,tomb.tile242,tomb.tile243,tomb.tile244,tomb.tile245,tomb.tile246,tomb.tile247,tomb.tile248,tomb.tile249,tomb.tile250,tomb.tile251,tomb.tile252,tomb.Spikes,tomb.tile253,tomb.Spikes_1,tomb.tile254,tomb.tile255,tomb.tile256,tomb.tile257,tomb.tile258,tomb.tile259,tomb.tile260,tomb.PressurePlate,tomb.tile261,tomb.tile262,tomb.tile263,tomb.tile264,tomb.tile265,tomb.tile266,tomb.tile267,tomb.tile268,tomb.tile269,tomb.tile270,tomb.tile271,tomb.tile272,tomb.tile273,tomb.tile274,tomb.tile275,tomb.tile276,tomb.tile277,tomb.tile278,tomb.tile279,tomb.tile280,tomb.tile281,tomb.tile282,tomb.tile283,tomb.tile284,tomb.tile285,tomb.tile286,tomb.tile287,tomb.tile288,tomb.tile289,tomb.tile290,tomb.Bomb,tomb.tile291,tomb.tile292,tomb.tile293,tomb.tile294,tomb.tile295,tomb.tile296,tomb.tile297,tomb.tile298,tomb.tile299,tomb.tile300,tomb.tile301,tomb.tile302,tomb.tile303,tomb.tile304,tomb.tile305,tomb.tile306,tomb.tile307,tomb.tile308,tomb.tile309,tomb.tile310,tomb.Door,tomb.merged3,tomb.merged4,tomb.merged5,tomb.merged6,tomb.merged7,tomb.merged8,tomb.merged9,tomb.merged10,tomb.merged11,tomb.merged12,tomb.merged13,tomb.merged14,tomb.merged15,tomb.merged16,tomb.merged17,tomb.merged18,tomb.merged19,tomb.merged20,tomb.merged21,tomb.merged22,tomb.merged23,tomb.merged24,tomb.merged25,tomb.merged26,tomb.merged27,tomb.merged28,tomb.merged29,tomb.merged30,tomb.merged31,tomb.merged32,tomb.merged33,tomb.merged34,tomb.merged35,tomb.merged36,tomb.merged37,tomb.merged38,tomb.merged39,tomb.merged40,tomb.merged41,tomb.merged42,tomb.merged43,tomb.merged44,tomb.merged45,tomb.merged46], TileScale.Eight);
            case "Library": return tiles.createTilemap(hex`180016009c9df7f8f9423d3e43f8f9384445dedfe0e14446f9fa7b807f8020212247151648212202494a4b4c4d4e494a4f50989d7f8055c457515252535757565455c4c456565657585998807f8077797879787978797879781d787978797879787a989d7f807779f479787978f37879787978797879787978f698147f801f797879787978797879787978797879f579787ac6c97f80777978795a5b78797879787978795c5d7879787af7f87f801f7978795e5ff37978f4f57978796061787978f620217f80777978797879f41ef4797879787978626379f37956c47f801f79787979646579787978797879f4666779787978799c9d77791d797868697978797879787978797879787978797f807779787978797879781c7879787978797879787978797f801f797879f379787978797879787978797879f37978797f807779787978797879787978791df5787978791d7978797f801f7978796a6b797978797879781e6c6d7879787a595d7f80777978796e6f78f37879787978f370717879787a7b7f7f8077797879787978797879787978797879787972737b7f9c9d1f79781d7979787978797879f51d7879787974757b7f7f801f797879787978797879787978797879767778797b7f9c9d1f7978797879787978797879787978797a7b7c7d987f7f145b5b5b5b5b5b5b5b5b5b5b5b5b5b5b5b5b5d5b5d137f7f7f7e7e7e7e7e7e7e7e7e7e7e7e7e7e7e7e7e7f7e7f817f`, img`\n2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 . . . . . . . . . . . . . . . . . . . . 2 2 
2 2 . . . . . . . . . . . . . . . . . . . . 2 2 
2 2 . . . . . . . . . . . . . . . . . . . . 2 2 
2 2 . . . . . . . . . . . . . . . . . . . . 2 2 
2 2 . . . . . . . . . . . . . . . . . . . . 2 2 
2 2 . . . . . . . . . . . . . . . . . . . . 2 2 
2 2 . . . . . . . . . . . . . . . . . . . . . . 
2 2 . . . . . . . . . . . . . . . . . . . . . . 
2 2 . . . . . . . . . . . . . . . . . . . . . . 
2 2 . . . . . . . . . . . . . . . . . . . . . . 
2 2 . . . . . . . . . . . . . . . . . . . . . . 
2 2 . . . . . . . . . . . . . . . . . . . . . . 
2 2 . . . . . . . . . . . . . . . . . . . . 2 2 
2 2 . . . . . . . . . . . . . . . . . . . . 2 2 
2 2 . . . . . . . . . . . . . . . . . . . . 2 2 
2 2 . . . . . . . . . . . . . . . . . . . . 2 2 
2 2 . . . . . . . . . . . . . . . . . . . . 2 2 
2 2 . . . . . . . . . . . . . . . . . . . . 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [tomb.transparency16,tomb.tile1,tomb.tile2,tomb.tile3,tomb.tile4,tomb.tile5,tomb.tile6,tomb.tile7,tomb.tile8,tomb.tile9,tomb.tile10,tomb.tile11,tomb.tile12,tomb.tile13,tomb.tile14,tomb.tile15,tomb.tile16,tomb.tile17,tomb.tile18,tomb.tile19,tomb.tile20,tomb.tile21,tomb.tile22,tomb.tile23,tomb.tile24,tomb.tile25,tomb.tile26,tomb.tile27,tomb.tile28,tomb.tile29,tomb.tile30,tomb.tile31,tomb.tile32,tomb.tile33,tomb.tile34,tomb.tile35,tomb.tile36,tomb.tile37,tomb.tile38,tomb.tile39,tomb.tile40,tomb.tile41,tomb.tile42,tomb.tile43,tomb.tile44,tomb.tile45,tomb.tile46,tomb.tile47,tomb.tile48,tomb.tile49,tomb.tile50,tomb.tile51,tomb.tile52,tomb.tile53,tomb.tile54,tomb.tile55,tomb.tile56,tomb.tile57,tomb.tile58,tomb.tile59,tomb.tile60,tomb.tile61,tomb.tile62,tomb.tile63,tomb.tile64,tomb.tile65,tomb.tile66,tomb.tile67,tomb.tile68,tomb.tile69,tomb.tile70,tomb.tile71,tomb.tile72,tomb.tile73,tomb.tile74,tomb.tile75,tomb.tile76,tomb.tile77,tomb.tile78,tomb.tile79,tomb.tile80,tomb.tile81,tomb.tile82,tomb.tile83,tomb.tile84,tomb.tile85,tomb.tile86,tomb.tile87,tomb.tile88,tomb.tile89,tomb.tile90,tomb.tile91,tomb.tile92,tomb.tile93,tomb.tile94,tomb.tile95,tomb.tile96,tomb.tile97,tomb.tile98,tomb.tile99,tomb.tile100,tomb.tile101,tomb.tile102,tomb.tile103,tomb.tile104,tomb.tile105,tomb.tile106,tomb.tom_down,tomb.tile107,tomb.tile108,tomb.tile109,tomb.tile110,tomb.tile111,tomb.tile112,tomb.tile113,tomb.tile114,tomb.tile115,tomb.tile116,tomb.tile117,tomb.tile118,tomb.tile119,tomb.tile120,tomb.tile121,tomb.tile122,tomb.tile123,tomb.tile124,tomb.tile125,tomb.tile126,tomb.tile127,tomb.tile128,tomb.tile129,tomb.tile130,tomb.tile131,tomb.tile132,tomb.tile133,tomb.tile134,tomb.tile135,tomb.tile136,tomb.tile137,tomb.tile138,tomb.tile139,tomb.tile140,tomb.tile141,tomb.tile142,tomb.tile143,tomb.tile144,tomb.tile145,tomb.tile146,tomb.tile147,tomb.tile148,tomb.tile149,tomb.tile150,tomb.tile151,tomb.tile152,tomb.tile153,tomb.tile154,tomb.tile155,tomb.tile156,tomb.tile157,tomb.tile158,tomb.tile159,tomb.tile160,tomb.tile161,tomb.tile162,tomb.tile163,tomb.tile164,tomb.tile165,tomb.tile166,tomb.tile167,tomb.tile168,tomb.tile169,tomb.tile170,tomb.tile171,tomb.tile172,tomb.tile173,tomb.tile174,tomb.tile175,tomb.tile176,tomb.tile177,tomb.tile178,tomb.tile179,tomb.tile180,tomb.tile181,tomb.tile182,tomb.tile183,tomb.tile184,tomb.tile185,tomb.tile186,tomb.tile187,tomb.tile188,tomb.Crate,tomb.tile189,tomb.tile190,tomb.tile191,tomb.tile192,tomb.DartShooter,tomb.tile193,tomb.tile194,tomb.tile195,tomb.tile196,tomb.tile197,tomb.tile198,tomb.tile199,tomb.tile200,tomb.tile201,tomb.tile202,tomb.tile203,tomb.tile204,tomb.tile205,tomb.tile206,tomb.tile207,tomb.tile208,tomb.tile209,tomb.tile210,tomb.tile211,tomb.tile212,tomb.tile213,tomb.tile214,tomb.Pit,tomb.tile215,tomb.tile216,tomb.DartShooter_1,tomb.tile217,tomb.tile218,tomb.tile219,tomb.tile220,tomb.tile221,tomb.tile222,tomb.tile223,tomb.tile224,tomb.tile225,tomb.tile226,tomb.tile227,tomb.tile228,tomb.tile229,tomb.tile230,tomb.tile231,tomb.tile232,tomb.tile233,tomb.tile234,tomb.Switch,tomb.tile235,tomb.tile236,tomb.tile237,tomb.tile238,tomb.tile239,tomb.tile240,tomb.tile241,tomb.tile242,tomb.tile243,tomb.tile244,tomb.tile245,tomb.tile246,tomb.tile247,tomb.tile248,tomb.tile249,tomb.tile250,tomb.tile251,tomb.tile252,tomb.Spikes,tomb.tile253,tomb.Spikes_1,tomb.tile254,tomb.tile255,tomb.tile256,tomb.tile257,tomb.tile258,tomb.tile259,tomb.tile260,tomb.PressurePlate,tomb.tile261,tomb.tile262,tomb.tile263,tomb.tile264,tomb.tile265,tomb.tile266,tomb.tile267,tomb.tile268,tomb.tile269,tomb.tile270,tomb.tile271,tomb.tile272,tomb.tile273,tomb.tile274,tomb.tile275,tomb.tile276,tomb.tile277,tomb.tile278,tomb.tile279,tomb.tile280,tomb.tile281,tomb.tile282,tomb.tile283,tomb.tile284,tomb.tile285,tomb.tile286,tomb.tile287,tomb.tile288,tomb.tile289,tomb.tile290,tomb.Bomb,tomb.tile291,tomb.tile292,tomb.tile293,tomb.tile294,tomb.tile295,tomb.tile296,tomb.tile297,tomb.tile298,tomb.tile299,tomb.tile300,tomb.tile301,tomb.tile302,tomb.tile303,tomb.tile304,tomb.tile305,tomb.tile306,tomb.tile307,tomb.tile308,tomb.tile309,tomb.tile310,tomb.Door,tomb.merged47,tomb.merged48,tomb.merged49,tomb.merged50,tomb.merged51,tomb.merged52,tomb.merged53,tomb.merged54,tomb.merged55,tomb.merged56,tomb.merged57,tomb.merged58,tomb.merged59,tomb.merged60,tomb.merged61,tomb.merged62,tomb.merged63,tomb.merged64,tomb.merged65,tomb.merged66,tomb.merged67,tomb.merged68,tomb.merged69,tomb.merged70,tomb.merged80,tomb.merged81,tomb.merged82,tomb.merged83,tomb.merged92,tomb.merged93,tomb.merged94,tomb.merged95,tomb.merged25,tomb.merged26,tomb.merged33,tomb.merged34,tomb.merged27,tomb.merged28,tomb.merged35,tomb.merged36,tomb.merged137,tomb.merged138,tomb.merged139,tomb.merged140,tomb.merged145,tomb.merged146,tomb.merged147,tomb.merged148,tomb.merged151,tomb.merged152,tomb.merged155,tomb.merged156,tomb.merged159,tomb.merged160,tomb.merged161,tomb.merged162,tomb.merged167,tomb.merged168,tomb.merged169,tomb.merged170], TileScale.Eight);
            case "Obelisk": return tiles.createTilemap(hex`20001800f8fa1f79787978f6f7f8f8f8f8f838f8f8f9393af8f8f842434344f8f8fa989b21231f79787978f6202121210121484a2122210221212145434346212123989b5656797979797979c457c45756c15656c15757c1575657474848495656587b7e78787878787878797879787978797879787978797879787978797879787a7b7e78787879797979787879787978794a4b78797879787978794a4b7879787a7b7e1c7979791c7978f37979787978794c4d78797879787978794c4d787978f6989b78787878797979787879787978794e4f78505179787978794e4f787978f67b7e787979797979797979f4787978795253785455797879787952537879787a989b5b5e787978797879595e777978797879787978565779787978797879787a989b7e7e7879787978797f8077797879787978797858597978797879787978f6989b9b9b090a090a090a7f807779787978797879785a5b7978797879787978f6989b9b9c2b2c2b2c2b2c7f801f79787978797879785c5d7978797879787978f6989b9b9c9b7e7e7e7e7f7f801f7978794a4b7879785e5f7978794a4b787978f6989b9b9c7e7f7f7f7f7f9c9d777978794c4d78797879787978794c4d7879787a7b7e9b7e7f7e7e7f9c9c7f80777978794e4f78797879787978794e4f787978f6989b9b7e7f9b7e7f7f7e7f8077797860525378797879787978795253787978f6989b9b7e7e7e7f7f9c9b9c801f7978616279787978797879787978505179787a989b9b7e7f7e7f9c9c9b9c80777978797879787978797879787978545579787a989b9b7e7f9b9c9b9c7f7f80777978797879787978797879787978797879787a989b9b9b7e7e7e9b9c9c9c9d777978797879787978797879787978797879787a989b9b9c9b9b9b9b9b9c9b145b5d5d5b5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d5d137f9ba0cccdcececececececdcecececececececececececececececececececf7f8283fbfcfdfdfdfdfdfdfcfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfe7f828324252626262626262526262626262626262626262626262626262626277f`, img`\n2 2 . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 
2 2 . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 
2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 
2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 
2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 
2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 
2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 
2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 
2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 
2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 
2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 
2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 
2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 
2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [tomb.transparency16,tomb.tile1,tomb.tile2,tomb.tile3,tomb.tile4,tomb.tile5,tomb.tile6,tomb.tile7,tomb.tile8,tomb.tile9,tomb.tile10,tomb.tile11,tomb.tile12,tomb.tile13,tomb.tile14,tomb.tile15,tomb.tile16,tomb.tile17,tomb.tile18,tomb.tile19,tomb.tile20,tomb.tile21,tomb.tile22,tomb.tile23,tomb.tile24,tomb.tile25,tomb.tile26,tomb.tile27,tomb.tile28,tomb.tile29,tomb.tile30,tomb.tile31,tomb.tile32,tomb.tile33,tomb.tile34,tomb.tile35,tomb.tile36,tomb.tile37,tomb.tile38,tomb.tile39,tomb.tile40,tomb.tile41,tomb.tile42,tomb.tile43,tomb.tile44,tomb.tile45,tomb.tile46,tomb.tile47,tomb.tile48,tomb.tile49,tomb.tile50,tomb.tile51,tomb.tile52,tomb.tile53,tomb.tile54,tomb.tile55,tomb.tile56,tomb.tile57,tomb.tile58,tomb.tile59,tomb.tile60,tomb.tile61,tomb.tile62,tomb.tile63,tomb.tile64,tomb.tile65,tomb.tile66,tomb.tile67,tomb.tile68,tomb.tile69,tomb.tile70,tomb.tile71,tomb.tile72,tomb.tile73,tomb.tile74,tomb.tile75,tomb.tile76,tomb.tile77,tomb.tile78,tomb.tile79,tomb.tile80,tomb.tile81,tomb.tile82,tomb.tile83,tomb.tile84,tomb.tile85,tomb.tile86,tomb.tile87,tomb.tile88,tomb.tile89,tomb.tile90,tomb.tile91,tomb.tile92,tomb.tile93,tomb.tile94,tomb.tile95,tomb.tile96,tomb.tile97,tomb.tile98,tomb.tile99,tomb.tile100,tomb.tile101,tomb.tile102,tomb.tile103,tomb.tile104,tomb.tile105,tomb.tile106,tomb.tom_down,tomb.tile107,tomb.tile108,tomb.tile109,tomb.tile110,tomb.tile111,tomb.tile112,tomb.tile113,tomb.tile114,tomb.tile115,tomb.tile116,tomb.tile117,tomb.tile118,tomb.tile119,tomb.tile120,tomb.tile121,tomb.tile122,tomb.tile123,tomb.tile124,tomb.tile125,tomb.tile126,tomb.tile127,tomb.tile128,tomb.tile129,tomb.tile130,tomb.tile131,tomb.tile132,tomb.tile133,tomb.tile134,tomb.tile135,tomb.tile136,tomb.tile137,tomb.tile138,tomb.tile139,tomb.tile140,tomb.tile141,tomb.tile142,tomb.tile143,tomb.tile144,tomb.tile145,tomb.tile146,tomb.tile147,tomb.tile148,tomb.tile149,tomb.tile150,tomb.tile151,tomb.tile152,tomb.tile153,tomb.tile154,tomb.tile155,tomb.tile156,tomb.tile157,tomb.tile158,tomb.tile159,tomb.tile160,tomb.tile161,tomb.tile162,tomb.tile163,tomb.tile164,tomb.tile165,tomb.tile166,tomb.tile167,tomb.tile168,tomb.tile169,tomb.tile170,tomb.tile171,tomb.tile172,tomb.tile173,tomb.tile174,tomb.tile175,tomb.tile176,tomb.tile177,tomb.tile178,tomb.tile179,tomb.tile180,tomb.tile181,tomb.tile182,tomb.tile183,tomb.tile184,tomb.tile185,tomb.tile186,tomb.tile187,tomb.tile188,tomb.Crate,tomb.tile189,tomb.tile190,tomb.tile191,tomb.tile192,tomb.DartShooter,tomb.tile193,tomb.tile194,tomb.tile195,tomb.tile196,tomb.tile197,tomb.tile198,tomb.tile199,tomb.tile200,tomb.tile201,tomb.tile202,tomb.tile203,tomb.tile204,tomb.tile205,tomb.tile206,tomb.tile207,tomb.tile208,tomb.tile209,tomb.tile210,tomb.tile211,tomb.tile212,tomb.tile213,tomb.tile214,tomb.Pit,tomb.tile215,tomb.tile216,tomb.DartShooter_1,tomb.tile217,tomb.tile218,tomb.tile219,tomb.tile220,tomb.tile221,tomb.tile222,tomb.tile223,tomb.tile224,tomb.tile225,tomb.tile226,tomb.tile227,tomb.tile228,tomb.tile229,tomb.tile230,tomb.tile231,tomb.tile232,tomb.tile233,tomb.tile234,tomb.Switch,tomb.tile235,tomb.tile236,tomb.tile237,tomb.tile238,tomb.tile239,tomb.tile240,tomb.tile241,tomb.tile242,tomb.tile243,tomb.tile244,tomb.tile245,tomb.tile246,tomb.tile247,tomb.tile248,tomb.tile249,tomb.tile250,tomb.tile251,tomb.tile252,tomb.Spikes,tomb.tile253,tomb.Spikes_1,tomb.tile254,tomb.tile255,tomb.tile256,tomb.tile257,tomb.tile258,tomb.tile259,tomb.tile260,tomb.PressurePlate,tomb.tile261,tomb.tile262,tomb.tile263,tomb.tile264,tomb.tile265,tomb.tile266,tomb.tile267,tomb.tile268,tomb.tile269,tomb.tile270,tomb.tile271,tomb.tile272,tomb.tile273,tomb.tile274,tomb.tile275,tomb.tile276,tomb.tile277,tomb.tile278,tomb.tile279,tomb.tile280,tomb.tile281,tomb.tile282,tomb.tile283,tomb.tile284,tomb.tile285,tomb.tile286,tomb.tile287,tomb.tile288,tomb.tile289,tomb.tile290,tomb.Bomb,tomb.tile291,tomb.tile292,tomb.tile293,tomb.tile294,tomb.tile295,tomb.tile296,tomb.tile297,tomb.tile298,tomb.tile299,tomb.tile300,tomb.tile301,tomb.tile302,tomb.tile303,tomb.tile304,tomb.tile305,tomb.tile306,tomb.tile307,tomb.tile308,tomb.tile309,tomb.tile310,tomb.Door,tomb.merged47,tomb.merged91,tomb.merged48,tomb.merged52,tomb.merged53,tomb.merged62,tomb.merged120,tomb.merged121,tomb.merged124,tomb.merged125,tomb.merged129,tomb.merged130,tomb.merged131,tomb.merged132,tomb.merged33,tomb.merged34,tomb.merged135,tomb.merged136,tomb.merged35,tomb.merged36,tomb.merged143,tomb.merged144,tomb.merged149,tomb.merged150,tomb.merged153,tomb.merged154,tomb.merged157,tomb.merged158,tomb.merged122,tomb.merged123,tomb.merged25,tomb.merged27,tomb.merged28], TileScale.Eight);
            case "Gym": return tiles.createTilemap(hex`200030007e7e7e7e7e7e7e7e7e7e7e7e7e7e7e7e7e7e7e7e7e7e7e7e7e7e7e7e7e7e7f7f9b9b9b9b9b9b9b9b9b9b9b9b9b9b9b9b9b9b9b9b9b9b9b9b9b9b9b9b9b9b9c7f7f829b9c9b9c9b9c7e7f9b9b9b9b9b9b9b9b9b9b9b9b9b9b9b9b9b9c9b9c7f7f9c36c6cac9cac9cb3536c6c9c9c9c9c9c9c9c9c9c9c9c9c9c9c9c9cac9cb357f9c9df7f9f8f9f8fa989df7f8f8f83af8f838f8f839f838f8f8f825f9f8fa7b7e9c9d2022212221237b9d202101210221484a21212121212121214b222123989b9c9d55f457c4c458989df2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f27b7e7f804278437843f6989df2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f27b7e9c9d1f7979791cf6989df2f21af2f2f219f2f2f2f2f2f2f2f2f2f2f2f2f27b7e9c9d1f79797978f6c6cbf2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f27b7e9c9d7778787979f6f7faf2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f27b7e9c9d77791d7979f62023f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2989b9c9d1f797979797878f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f27b7e9c9d77797979787878f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f27b7e9c9d77787879797879f2f2f2eff278f2f2f2f2f2f2f2f2f2f2f2f2f2f2f27b7e9c9d1f7979797979f3f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f27b7e9c9d77797979797978f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f27b7e7f8077787878787978f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f27b7e9c9d7779791e7978595ef2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f27b7e9c9d1f797979787a7b9df2f2eef218f2f2f2f2f2f2f21bf2f2f2181b1af27b7e9c9d1f787879797a7b9df2f2f2f2f2f2f2f2f2f2f2eff2f2f2f2f2f2f2f2989b9c9d1f79797979f67b9df2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f219f2f2f27b7e9c9d1f79797979f67b9df2f2f2f2f1f2f2f2f2f2f2f2f2f2f2f2f2f2f2f27b7e7f801f444578787a7b9df2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f27b7e9c9d77464779797a7b9d5d5d5d5d5d5d5d5df2f2f2f25d5d5d5d5d5d5d5d989b9c9d1f797979787a7b9dc6cac9cac9c9c9cbf2f2f2f2c6cac9c9c9c9c9cb7b7e9c9d77787879797a9880f7f93af9f8f839faf2f2f2f2f7f9f8f8f838f8fa989b9c9d7779797979f67b9d2022022221212123f2f2f2f220222121484a21237b7e7f801f797979797a7b80f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f27b7e9c9d77787878f4f67b9df2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f27b7e9c9d1f791e791df67b8019f2f2f2f2f2f2f2f218f1f1f2f2f2f2f2f2f2f27b7e9c9d77797979787a7b80f2f2f2eef2f2f2f2f2f2f2f2f2f2f2f2f2eef2f27b7e9c9d1f787879797a989df2f2f2f2eff2f2f2f2f2f2f2f2f2f2f2f2f2f2f27b7e9c9d1f797979797a7b80f2181beff2f2f2f2f2f21af2f2f2f2f1f2f2f2f27b7e7f807779797979f67b80f2f2f2f2f2f2f2f2f21bf21beef2f2f2f2f2f2f27b7e7f807778787878f67b80f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f27b7e9c9d1f797979797a9880f2f2f2f2f2f2f2f2f2f2f2f2f2f1f2f2f2f2f2f27b7e9c9d777979791d7a7b9df2f2f2f2f2f2f2eff2f2f219f2f21af2f2f2f2f2989b9c9d1f787979797a7b80f2f2f2eff2f2f2f218f2f2f2f2f2f2f2f2f2f2f27b7e9c9d7779794445f6989df2f2f2eff2f2f218f2f2f2f2f2f2f2f2f219f2f2989b7f8077797946477a9880f2f2f2f2f2f2f2f2f2f2181af2f2f2f2f2f2f2f2989b9c9d1f787878787a989df2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2989b9c9d1f797979797a9880f2f2f2f2f21bf2f2f2f2f2f2f2f2f2f2f2f2f2f2989b9c9d1f79797978f6989df2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2989b9c9d77791d79797a989df2f2f2f2eff2f2f2f2f2f2f2f218f2f2f2f2f2f27b7e9c9d1f78f57878f67b9df2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2eff2989b5d5b1f7978791c7a98145b5b5b5b5b5b5b5d5d5d5d5d5d5df2f25d5d5d5d989bc9cb1f79787978f6c6c9c9c9c9c9c9c9c9cac9c9c9c9c948f2f249c9c9cb989b`, img`\n2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 
2 2 . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 
2 2 . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 
2 2 . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 
2 2 . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 
2 2 . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 
2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 
2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 
2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 
2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 
2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 
2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 
2 2 . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 
2 2 . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 
2 2 . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 
2 2 . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 
2 2 . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 
2 2 . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 
2 2 . . . . . . 2 2 2 2 2 2 2 2 2 2 . . . . 2 2 2 2 2 2 2 2 2 2 
2 2 . . . . . . 2 2 2 2 2 2 2 2 2 2 . . . . 2 2 2 2 2 2 2 2 2 2 
2 2 . . . . . . 2 2 2 2 2 2 2 2 2 2 . . . . 2 2 2 2 2 2 2 2 2 2 
2 2 . . . . . . 2 2 2 2 2 2 2 2 2 2 . . . . 2 2 2 2 2 2 2 2 2 2 
2 2 . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 
2 2 . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 
2 2 . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 
2 2 . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 
2 2 . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 
2 2 . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 
2 2 . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 
2 2 . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 
2 2 . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 
2 2 . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 
2 2 . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 
2 2 . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 
2 2 . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 
2 2 . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 
2 2 . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 
2 2 . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 
2 2 . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 
2 2 . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . 2 2 
2 2 . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 
2 2 . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 
`, [tomb.transparency16,tomb.tile1,tomb.tile2,tomb.tile3,tomb.tile4,tomb.tile5,tomb.tile6,tomb.tile7,tomb.tile8,tomb.tile9,tomb.tile10,tomb.tile11,tomb.tile12,tomb.tile13,tomb.tile14,tomb.tile15,tomb.tile16,tomb.tile17,tomb.tile18,tomb.tile19,tomb.tile20,tomb.tile21,tomb.tile22,tomb.tile23,tomb.tile24,tomb.tile25,tomb.tile26,tomb.tile27,tomb.tile28,tomb.tile29,tomb.tile30,tomb.tile31,tomb.tile32,tomb.tile33,tomb.tile34,tomb.tile35,tomb.tile36,tomb.tile37,tomb.tile38,tomb.tile39,tomb.tile40,tomb.tile41,tomb.tile42,tomb.tile43,tomb.tile44,tomb.tile45,tomb.tile46,tomb.tile47,tomb.tile48,tomb.tile49,tomb.tile50,tomb.tile51,tomb.tile52,tomb.tile53,tomb.tile54,tomb.tile55,tomb.tile56,tomb.tile57,tomb.tile58,tomb.tile59,tomb.tile60,tomb.tile61,tomb.tile62,tomb.tile63,tomb.tile64,tomb.tile65,tomb.tile66,tomb.tile67,tomb.tile68,tomb.tile69,tomb.tile70,tomb.tile71,tomb.tile72,tomb.tile73,tomb.tile74,tomb.tile75,tomb.tile76,tomb.tile77,tomb.tile78,tomb.tile79,tomb.tile80,tomb.tile81,tomb.tile82,tomb.tile83,tomb.tile84,tomb.tile85,tomb.tile86,tomb.tile87,tomb.tile88,tomb.tile89,tomb.tile90,tomb.tile91,tomb.tile92,tomb.tile93,tomb.tile94,tomb.tile95,tomb.tile96,tomb.tile97,tomb.tile98,tomb.tile99,tomb.tile100,tomb.tile101,tomb.tile102,tomb.tile103,tomb.tile104,tomb.tile105,tomb.tile106,tomb.tom_down,tomb.tile107,tomb.tile108,tomb.tile109,tomb.tile110,tomb.tile111,tomb.tile112,tomb.tile113,tomb.tile114,tomb.tile115,tomb.tile116,tomb.tile117,tomb.tile118,tomb.tile119,tomb.tile120,tomb.tile121,tomb.tile122,tomb.tile123,tomb.tile124,tomb.tile125,tomb.tile126,tomb.tile127,tomb.tile128,tomb.tile129,tomb.tile130,tomb.tile131,tomb.tile132,tomb.tile133,tomb.tile134,tomb.tile135,tomb.tile136,tomb.tile137,tomb.tile138,tomb.tile139,tomb.tile140,tomb.tile141,tomb.tile142,tomb.tile143,tomb.tile144,tomb.tile145,tomb.tile146,tomb.tile147,tomb.tile148,tomb.tile149,tomb.tile150,tomb.tile151,tomb.tile152,tomb.tile153,tomb.tile154,tomb.tile155,tomb.tile156,tomb.tile157,tomb.tile158,tomb.tile159,tomb.tile160,tomb.tile161,tomb.tile162,tomb.tile163,tomb.tile164,tomb.tile165,tomb.tile166,tomb.tile167,tomb.tile168,tomb.tile169,tomb.tile170,tomb.tile171,tomb.tile172,tomb.tile173,tomb.tile174,tomb.tile175,tomb.tile176,tomb.tile177,tomb.tile178,tomb.tile179,tomb.tile180,tomb.tile181,tomb.tile182,tomb.tile183,tomb.tile184,tomb.tile185,tomb.tile186,tomb.tile187,tomb.tile188,tomb.Crate,tomb.tile189,tomb.tile190,tomb.tile191,tomb.tile192,tomb.DartShooter,tomb.tile193,tomb.tile194,tomb.tile195,tomb.tile196,tomb.tile197,tomb.tile198,tomb.tile199,tomb.tile200,tomb.tile201,tomb.tile202,tomb.tile203,tomb.tile204,tomb.tile205,tomb.tile206,tomb.tile207,tomb.tile208,tomb.tile209,tomb.tile210,tomb.tile211,tomb.tile212,tomb.tile213,tomb.tile214,tomb.Pit,tomb.tile215,tomb.tile216,tomb.DartShooter_1,tomb.tile217,tomb.tile218,tomb.tile219,tomb.tile220,tomb.tile221,tomb.tile222,tomb.tile223,tomb.tile224,tomb.tile225,tomb.tile226,tomb.tile227,tomb.tile228,tomb.tile229,tomb.tile230,tomb.tile231,tomb.tile232,tomb.tile233,tomb.tile234,tomb.Switch,tomb.tile235,tomb.tile236,tomb.tile237,tomb.tile238,tomb.tile239,tomb.tile240,tomb.tile241,tomb.tile242,tomb.tile243,tomb.tile244,tomb.tile245,tomb.tile246,tomb.tile247,tomb.tile248,tomb.tile249,tomb.tile250,tomb.tile251,tomb.tile252,tomb.Spikes,tomb.tile253,tomb.Spikes_1,tomb.tile254,tomb.tile255,tomb.tile256,tomb.tile257,tomb.tile258,tomb.tile259,tomb.tile260,tomb.PressurePlate,tomb.tile261,tomb.tile262,tomb.tile263,tomb.tile264,tomb.tile265,tomb.tile266,tomb.tile267,tomb.tile268,tomb.tile269,tomb.tile270,tomb.tile271,tomb.tile272,tomb.tile273,tomb.tile274,tomb.tile275,tomb.tile276,tomb.tile277,tomb.tile278,tomb.tile279,tomb.tile280,tomb.tile281,tomb.tile282,tomb.tile283,tomb.tile284,tomb.tile285,tomb.tile286,tomb.tile287,tomb.tile288,tomb.tile289,tomb.tile290,tomb.Bomb,tomb.tile291,tomb.tile292,tomb.tile293,tomb.tile294,tomb.tile295,tomb.tile296,tomb.tile297,tomb.tile298,tomb.tile299,tomb.tile300,tomb.tile301,tomb.tile302,tomb.tile303,tomb.tile304,tomb.tile305,tomb.tile306,tomb.tile307,tomb.tile308,tomb.tile309,tomb.tile310,tomb.Door,tomb.merged1,tomb.merged2,tomb.merged25,tomb.merged26,tomb.merged27,tomb.merged28,tomb.merged78,tomb.merged79], TileScale.Eight);
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
            case "tom_down": return tom_down;
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
            case "tile131": return tile131;
            case "tile132": return tile132;
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
            case "tile148": return tile148;
            case "tile149": return tile149;
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
            case "tile178": return tile178;
            case "tile179": return tile179;
            case "tile180": return tile180;
            case "tile181": return tile181;
            case "tile182": return tile182;
            case "tile183": return tile183;
            case "tile184": return tile184;
            case "tile185": return tile185;
            case "tile186": return tile186;
            case "tile187": return tile187;
            case "tile188": return tile188;
            case "Crate": return Crate;
            case "tile189": return tile189;
            case "tile190": return tile190;
            case "tile191": return tile191;
            case "tile192": return tile192;
            case "DartShooter": return DartShooter;
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
            case "Pit": return Pit;
            case "tile215": return tile215;
            case "tile216": return tile216;
            case "DartShooter_1": return DartShooter_1;
            case "tile217": return tile217;
            case "tile218": return tile218;
            case "tile219": return tile219;
            case "tile220": return tile220;
            case "tile221": return tile221;
            case "tile222": return tile222;
            case "tile223": return tile223;
            case "tile224": return tile224;
            case "tile225": return tile225;
            case "tile226": return tile226;
            case "tile227": return tile227;
            case "tile228": return tile228;
            case "tile229": return tile229;
            case "tile230": return tile230;
            case "tile231": return tile231;
            case "tile232": return tile232;
            case "tile233": return tile233;
            case "tile234": return tile234;
            case "Switch": return Switch;
            case "tile235": return tile235;
            case "tile236": return tile236;
            case "tile237": return tile237;
            case "tile238": return tile238;
            case "tile239": return tile239;
            case "tile240": return tile240;
            case "tile241": return tile241;
            case "tile242": return tile242;
            case "tile243": return tile243;
            case "tile244": return tile244;
            case "tile245": return tile245;
            case "tile246": return tile246;
            case "tile247": return tile247;
            case "tile248": return tile248;
            case "tile249": return tile249;
            case "tile250": return tile250;
            case "tile251": return tile251;
            case "tile252": return tile252;
            case "Spikes": return Spikes;
            case "tile253": return tile253;
            case "Spikes_1": return Spikes_1;
            case "tile254": return tile254;
            case "tile255": return tile255;
            case "tile256": return tile256;
            case "tile257": return tile257;
            case "tile258": return tile258;
            case "tile259": return tile259;
            case "tile260": return tile260;
            case "PressurePlate": return PressurePlate;
            case "tile261": return tile261;
            case "tile262": return tile262;
            case "tile263": return tile263;
            case "tile264": return tile264;
            case "tile265": return tile265;
            case "tile266": return tile266;
            case "tile267": return tile267;
            case "tile268": return tile268;
            case "tile269": return tile269;
            case "tile270": return tile270;
            case "tile271": return tile271;
            case "tile272": return tile272;
            case "tile273": return tile273;
            case "tile274": return tile274;
            case "tile275": return tile275;
            case "tile276": return tile276;
            case "tile277": return tile277;
            case "tile278": return tile278;
            case "tile279": return tile279;
            case "tile280": return tile280;
            case "tile281": return tile281;
            case "tile282": return tile282;
            case "tile283": return tile283;
            case "tile284": return tile284;
            case "tile285": return tile285;
            case "tile286": return tile286;
            case "tile287": return tile287;
            case "tile288": return tile288;
            case "tile289": return tile289;
            case "tile290": return tile290;
            case "Bomb": return Bomb;
            case "tile291": return tile291;
            case "tile292": return tile292;
            case "tile293": return tile293;
            case "tile294": return tile294;
            case "tile295": return tile295;
            case "tile296": return tile296;
            case "tile297": return tile297;
            case "tile298": return tile298;
            case "tile299": return tile299;
            case "tile300": return tile300;
            case "tile301": return tile301;
            case "tile302": return tile302;
            case "tile303": return tile303;
            case "tile304": return tile304;
            case "tile305": return tile305;
            case "tile306": return tile306;
            case "tile307": return tile307;
            case "tile308": return tile308;
            case "tile309": return tile309;
            case "tile310": return tile310;
            case "Door": return Door;
            case "merged191": return merged191;
            case "merged192": return merged192;
            case "merged193": return merged193;
            case "merged194": return merged194;
            case "merged195": return merged195;
            case "merged196": return merged196;
            case "merged197": return merged197;
            case "merged198": return merged198;
            case "merged199": return merged199;
            case "merged200": return merged200;
            case "merged201": return merged201;
            case "merged202": return merged202;
            case "merged204": return merged204;
            case "merged205": return merged205;
            case "merged206": return merged206;
            case "merged207": return merged207;
            case "merged203": return merged203;
            case "merged208": return merged208;
            case "merged209": return merged209;
            case "merged210": return merged210;
            case "merged63": return merged63;
            case "merged211": return merged211;
            case "merged212": return merged212;
            case "merged213": return merged213;
            case "merged214": return merged214;
            case "merged215": return merged215;
            case "merged216": return merged216;
            case "merged217": return merged217;
            case "merged218": return merged218;
            case "merged219": return merged219;
            case "merged220": return merged220;
            case "merged221": return merged221;
            case "merged222": return merged222;
            case "merged223": return merged223;
            case "merged224": return merged224;
            case "merged225": return merged225;
            case "merged226": return merged226;
            case "merged227": return merged227;
            case "merged228": return merged228;
            case "merged229": return merged229;
            case "merged230": return merged230;
            case "merged231": return merged231;
            case "merged232": return merged232;
            case "merged233": return merged233;
            case "merged234": return merged234;
            case "merged235": return merged235;
            case "merged236": return merged236;
            case "merged237": return merged237;
            case "merged71": return merged71;
            case "merged72": return merged72;
            case "merged73": return merged73;
            case "merged74": return merged74;
            case "merged75": return merged75;
            case "merged76": return merged76;
            case "merged77": return merged77;
            case "merged84": return merged84;
            case "merged85": return merged85;
            case "merged86": return merged86;
            case "merged87": return merged87;
            case "merged88": return merged88;
            case "merged89": return merged89;
            case "merged90": return merged90;
            case "merged100": return merged100;
            case "merged101": return merged101;
            case "merged102": return merged102;
            case "merged103": return merged103;
            case "merged104": return merged104;
            case "merged53": return merged53;
            case "merged60": return merged60;
            case "merged105": return merged105;
            case "merged110": return merged110;
            case "merged111": return merged111;
            case "merged112": return merged112;
            case "merged113": return merged113;
            case "merged114": return merged114;
            case "merged115": return merged115;
            case "merged116": return merged116;
            case "merged117": return merged117;
            case "merged118": return merged118;
            case "merged69": return merged69;
            case "merged119": return merged119;
            case "merged122": return merged122;
            case "merged123": return merged123;
            case "merged35": return merged35;
            case "merged36": return merged36;
            case "merged126": return merged126;
            case "merged127": return merged127;
            case "merged128": return merged128;
            case "merged133": return merged133;
            case "merged134": return merged134;
            case "merged141": return merged141;
            case "merged142": return merged142;
            case "merged163": return merged163;
            case "merged164": return merged164;
            case "merged165": return merged165;
            case "merged166": return merged166;
            case "merged171": return merged171;
            case "merged172": return merged172;
            case "merged173": return merged173;
            case "merged174": return merged174;
            case "merged175": return merged175;
            case "merged176": return merged176;
            case "merged177": return merged177;
            case "merged178": return merged178;
            case "merged179": return merged179;
            case "merged180": return merged180;
            case "merged181": return merged181;
            case "merged182": return merged182;
            case "merged25": return merged25;
            case "merged26": return merged26;
            case "merged27": return merged27;
            case "merged28": return merged28;
            case "merged183": return merged183;
            case "merged184": return merged184;
            case "merged185": return merged185;
            case "merged186": return merged186;
            case "merged187": return merged187;
            case "merged33": return merged33;
            case "merged34": return merged34;
            case "merged159": return merged159;
            case "merged188": return merged188;
            case "merged189": return merged189;
            case "merged190": return merged190;
            case "merged96": return merged96;
            case "merged97": return merged97;
            case "merged98": return merged98;
            case "merged99": return merged99;
            case "merged106": return merged106;
            case "merged107": return merged107;
            case "merged108": return merged108;
            case "merged109": return merged109;
            case "merged3": return merged3;
            case "merged4": return merged4;
            case "merged5": return merged5;
            case "merged6": return merged6;
            case "merged7": return merged7;
            case "merged8": return merged8;
            case "merged9": return merged9;
            case "merged10": return merged10;
            case "merged11": return merged11;
            case "merged12": return merged12;
            case "merged13": return merged13;
            case "merged14": return merged14;
            case "merged15": return merged15;
            case "merged16": return merged16;
            case "merged17": return merged17;
            case "merged18": return merged18;
            case "merged19": return merged19;
            case "merged20": return merged20;
            case "merged21": return merged21;
            case "merged22": return merged22;
            case "merged23": return merged23;
            case "merged24": return merged24;
            case "merged29": return merged29;
            case "merged30": return merged30;
            case "merged31": return merged31;
            case "merged32": return merged32;
            case "merged37": return merged37;
            case "merged38": return merged38;
            case "merged39": return merged39;
            case "merged40": return merged40;
            case "merged41": return merged41;
            case "merged42": return merged42;
            case "merged43": return merged43;
            case "merged44": return merged44;
            case "merged45": return merged45;
            case "merged46": return merged46;
            case "merged47": return merged47;
            case "merged48": return merged48;
            case "merged49": return merged49;
            case "merged50": return merged50;
            case "merged51": return merged51;
            case "merged52": return merged52;
            case "merged54": return merged54;
            case "merged55": return merged55;
            case "merged56": return merged56;
            case "merged57": return merged57;
            case "merged58": return merged58;
            case "merged59": return merged59;
            case "merged61": return merged61;
            case "merged62": return merged62;
            case "merged64": return merged64;
            case "merged65": return merged65;
            case "merged66": return merged66;
            case "merged67": return merged67;
            case "merged68": return merged68;
            case "merged70": return merged70;
            case "merged80": return merged80;
            case "merged81": return merged81;
            case "merged82": return merged82;
            case "merged83": return merged83;
            case "merged92": return merged92;
            case "merged93": return merged93;
            case "merged94": return merged94;
            case "merged95": return merged95;
            case "merged137": return merged137;
            case "merged138": return merged138;
            case "merged139": return merged139;
            case "merged140": return merged140;
            case "merged145": return merged145;
            case "merged146": return merged146;
            case "merged147": return merged147;
            case "merged148": return merged148;
            case "merged151": return merged151;
            case "merged152": return merged152;
            case "merged155": return merged155;
            case "merged156": return merged156;
            case "merged160": return merged160;
            case "merged161": return merged161;
            case "merged162": return merged162;
            case "merged167": return merged167;
            case "merged168": return merged168;
            case "merged169": return merged169;
            case "merged170": return merged170;
            case "merged91": return merged91;
            case "merged120": return merged120;
            case "merged121": return merged121;
            case "merged124": return merged124;
            case "merged125": return merged125;
            case "merged129": return merged129;
            case "merged130": return merged130;
            case "merged131": return merged131;
            case "merged132": return merged132;
            case "merged135": return merged135;
            case "merged136": return merged136;
            case "merged143": return merged143;
            case "merged144": return merged144;
            case "merged149": return merged149;
            case "merged150": return merged150;
            case "merged153": return merged153;
            case "merged154": return merged154;
            case "merged157": return merged157;
            case "merged158": return merged158;
            case "merged1": return merged1;
            case "merged2": return merged2;
            case "merged78": return merged78;
            case "merged79": return merged79;
        }
        return null;
    }

    export namespace objects {
        // Room: Atrium
        export const OBJECT22: WorldObject = { id: 22, name: "", x: 80.130000, y: 33.000000, width: 16.000000, height: 16.000000, type: "", room: tomb.ATRIUM_NAME };
        export const OBJECT23: WorldObject = { id: 23, name: "", x: 80.060000, y: 15.940000, width: 16.000000, height: 16.000000, type: "", room: tomb.ATRIUM_NAME };
        export const OBJECT48: Switch = { id: 48, name: "", x: 96.000000, y: 96.000000, width: 16.000000, height: 16.000000, type: "Switch", room: tomb.ATRIUM_NAME };
        export const OBJECT2: Tom = { id: 2, name: "", x: 80.000000, y: 128.000000, width: 14.000000, height: 18.000000, type: "Tom", room: tomb.ATRIUM_NAME };
        export const ATRIUM_TO_NEXUS: Warp = { id: 63, name: "Atrium to Nexus", x: 4.000000, y: 0.000000, width: 168.000000, height: 16.000000, type: "Warp", room: tomb.ATRIUM_NAME, jumpTo: 64, vertical: true };
        // Room: Nexus
        export const OBJECT24: WorldObject = { id: 24, name: "", x: 48.750000, y: 113.000000, width: 32.000000, height: 32.000000, type: "", room: tomb.NEXUS_NAME };
        export const OBJECT39: WorldObject = { id: 39, name: "", x: 112.090000, y: 32.000000, width: 16.000000, height: 16.000000, type: "", room: tomb.NEXUS_NAME };
        export const OBJECT51: WorldObject = { id: 51, name: "", x: 224.000000, y: 40.000000, width: 16.000000, height: 32.000000, type: "", room: tomb.NEXUS_NAME };
        export const OBJECT6: Crate = { id: 6, name: "", x: 112.000000, y: 272.000000, width: 16.000000, height: 16.000000, type: "Crate", room: tomb.NEXUS_NAME };
        export const OBJECT7: Crate = { id: 7, name: "", x: 160.000000, y: 240.000000, width: 16.000000, height: 16.000000, type: "Crate", room: tomb.NEXUS_NAME };
        export const OBJECT8: PressurePlate = { id: 8, name: "", x: 80.000000, y: 240.000000, width: 16.000000, height: 16.000000, type: "PressurePlate", room: tomb.NEXUS_NAME };
        export const OBJECT9: Pit = { id: 9, name: "", x: 48.000000, y: 64.000000, width: 16.000000, height: 16.000000, type: "Pit", room: tomb.NEXUS_NAME };
        export const OBJECT10: Switch = { id: 10, name: "", x: 144.000000, y: 288.000000, width: 16.000000, height: 16.000000, type: "Switch", room: tomb.NEXUS_NAME };
        export const OBJECT11: Spikes = { id: 11, name: "", x: 128.000000, y: 240.000000, width: 16.000000, height: 16.000000, type: "Spikes", room: tomb.NEXUS_NAME, _active: false, active: false };
        export const OBJECT12: Spikes = { id: 12, name: "", x: 80.000000, y: 320.000000, width: 16.000000, height: 16.000000, type: "Spikes", room: tomb.NEXUS_NAME, _active: true, active: true };
        export const OBJECT13: DartShooter = { id: 13, name: "", x: 184.000000, y: 256.000000, width: 16.000000, height: 16.000000, type: "DartShooter", room: tomb.NEXUS_NAME };
        export const OBJECT14: DartShooter = { id: 14, name: "", x: 40.000000, y: 160.000000, width: 16.000000, height: 16.000000, type: "DartShooter", room: tomb.NEXUS_NAME };
        export const OBJECT15: Bomb = { id: 15, name: "", x: 16.000000, y: 48.000000, width: 16.000000, height: 16.000000, type: "Bomb", room: tomb.NEXUS_NAME };
        export const OBJECT21: Door = { id: 21, name: "", x: 0.000000, y: 80.000000, width: 16.000000, height: 16.000000, type: "Door", room: tomb.NEXUS_NAME };
        export const NEXUS_TO_ATRIUM: Warp = { id: 64, name: "Nexus to Atrium", x: 36.000000, y: 320.100000, width: 168.000000, height: 16.000000, type: "Warp", room: tomb.NEXUS_NAME, jumpTo: 63, vertical: true };
        export const NEXUS_TO_CORRIDOR: Warp = { id: 65, name: "Nexus to Corridor", x: 0.000000, y: 4.000000, width: 16.000000, height: 136.000000, type: "Warp", room: tomb.NEXUS_NAME, jumpTo: 66, vertical: false };
        export const NEXUS_TO_OBELISK: Warp = { id: 67, name: "Nexus to Obelisk", x: 224.100000, y: 20.000000, width: 16.000000, height: 184.000000, type: "Warp", room: tomb.NEXUS_NAME, jumpTo: 68, vertical: false };
        export const NEXUS_TO_GYM: Warp = { id: 69, name: "Nexus to Gym", x: 224.100000, y: 4.000000, width: 16.000000, height: 8.000000, type: "Warp", room: tomb.NEXUS_NAME, jumpTo: 70, vertical: false };
        // Room: Corridor
        export const OBJECT40: WorldObject = { id: 40, name: "", x: 144.000000, y: 32.000000, width: 16.000000, height: 16.000000, type: "", room: tomb.CORRIDOR_NAME };
        export const OBJECT41: WorldObject = { id: 41, name: "", x: 112.000000, y: 32.000000, width: 16.000000, height: 16.000000, type: "", room: tomb.CORRIDOR_NAME };
        export const OBJECT42: WorldObject = { id: 42, name: "", x: 80.000000, y: 32.000000, width: 16.000000, height: 16.000000, type: "", room: tomb.CORRIDOR_NAME };
        export const OBJECT43: WorldObject = { id: 43, name: "", x: 48.000000, y: 32.000000, width: 16.000000, height: 16.000000, type: "", room: tomb.CORRIDOR_NAME };
        export const OBJECT44: Pit = { id: 44, name: "", x: 128.000000, y: 64.000000, width: 16.000000, height: 16.000000, type: "Pit", room: tomb.CORRIDOR_NAME };
        export const OBJECT45: Pit = { id: 45, name: "", x: 96.000000, y: 80.000000, width: 16.000000, height: 16.000000, type: "Pit", room: tomb.CORRIDOR_NAME };
        export const OBJECT46: WorldObject = { id: 46, name: "", x: 32.000000, y: 64.000000, width: 16.000000, height: 16.000000, type: "", room: tomb.CORRIDOR_NAME };
        export const OBJECT47: WorldObject = { id: 47, name: "", x: 16.000000, y: 32.000000, width: 16.000000, height: 16.000000, type: "", room: tomb.CORRIDOR_NAME };
        export const CORRIDOR_TO_NEXUS: Warp = { id: 66, name: "Corridor to Nexus", x: 144.100000, y: 4.000000, width: 16.000000, height: 136.000000, type: "Warp", room: tomb.CORRIDOR_NAME, jumpTo: 65, vertical: false };
        export const CORRIDOR_TO_LIBRARY: Warp = { id: 71, name: "Corridor to Library", x: 0.000000, y: 4.000000, width: 16.000000, height: 136.000000, type: "Warp", room: tomb.CORRIDOR_NAME, jumpTo: 72, vertical: false };
        // Room: Storage
        export const STORAGE_TO_LIBRARY: Warp = { id: 73, name: "Storage to Library", x: 4.000000, y: 176.100000, width: 184.000000, height: 16.000000, type: "Warp", room: tomb.STORAGE_NAME, jumpTo: 74, vertical: true };
        // Room: Library
        export const OBJECT53: WorldObject = { id: 53, name: "", x: 24.000000, y: 32.000000, width: 16.000000, height: 32.000000, type: "", room: tomb.LIBRARY_NAME };
        export const OBJECT54: WorldObject = { id: 54, name: "", x: 72.000000, y: 32.000000, width: 16.000000, height: 32.000000, type: "", room: tomb.LIBRARY_NAME };
        export const LIBRARY_TO_CORRIDOR: Warp = { id: 72, name: "Library to Corridor", x: 176.100000, y: 36.000000, width: 16.000000, height: 136.000000, type: "Warp", room: tomb.LIBRARY_NAME, jumpTo: 71, vertical: false };
        export const LIBRARY_TO_STORAGE: Warp = { id: 74, name: "Library to Storage", x: 4.000000, y: 0.000000, width: 184.000000, height: 16.000000, type: "Warp", room: tomb.LIBRARY_NAME, jumpTo: 73, vertical: true };
        // Room: Obelisk
        export const OBJECT52: WorldObject = { id: 52, name: "", x: 80.000000, y: 24.000000, width: 16.000000, height: 32.000000, type: "", room: tomb.OBELISK_NAME };
        export const OBJECT55: WorldObject = { id: 55, name: "", x: 168.000000, y: 8.000000, width: 8.000000, height: 16.000000, type: "", room: tomb.OBELISK_NAME };
        export const OBJECT56: WorldObject = { id: 56, name: "", x: 224.000000, y: 8.000000, width: 8.000000, height: 16.000000, type: "", room: tomb.OBELISK_NAME };
        export const OBELISK_TO_NEXUS: Warp = { id: 68, name: "Obelisk to Nexus", x: 0.000000, y: 4.000000, width: 16.000000, height: 184.000000, type: "Warp", room: tomb.OBELISK_NAME, jumpTo: 67, vertical: false };
        export const OBELISK_TO_GYM: Warp = { id: 75, name: "Obelisk to Gym", x: 4.000000, y: 0.000000, width: 248.000000, height: 16.000000, type: "Warp", room: tomb.OBELISK_NAME, jumpTo: 76, vertical: true };
        // Room: Gym
        export const OBJECT49: WorldObject = { id: 49, name: "", x: 112.000000, y: 232.000000, width: 16.000000, height: 32.000000, type: "", room: tomb.GYM_NAME };
        export const OBJECT50: WorldObject = { id: 50, name: "", x: 192.000000, y: 232.000000, width: 16.000000, height: 32.000000, type: "", room: tomb.GYM_NAME };
        export const GYM_TO_NEXUS: Warp = { id: 70, name: "Gym to Nexus", x: 0.000000, y: 372.000000, width: 16.000000, height: 8.000000, type: "Warp", room: tomb.GYM_NAME, jumpTo: 69, vertical: false };
        export const GYM_TO_OBELISK: Warp = { id: 76, name: "Gym to Obelisk", x: 4.000000, y: 368.100000, width: 248.000000, height: 16.000000, type: "Warp", room: tomb.GYM_NAME, jumpTo: 75, vertical: true };

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
            null,
            null,
            null,
            null,
            null,
            OBJECT21,
            OBJECT22,
            OBJECT23,
            OBJECT24,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            OBJECT39,
            OBJECT40,
            OBJECT41,
            OBJECT42,
            OBJECT43,
            OBJECT44,
            OBJECT45,
            OBJECT46,
            OBJECT47,
            OBJECT48,
            OBJECT49,
            OBJECT50,
            OBJECT51,
            OBJECT52,
            OBJECT53,
            OBJECT54,
            OBJECT55,
            OBJECT56,
            null,
            null,
            null,
            null,
            null,
            null,
            ATRIUM_TO_NEXUS,
            NEXUS_TO_ATRIUM,
            NEXUS_TO_CORRIDOR,
            CORRIDOR_TO_NEXUS,
            NEXUS_TO_OBELISK,
            OBELISK_TO_NEXUS,
            NEXUS_TO_GYM,
            GYM_TO_NEXUS,
            CORRIDOR_TO_LIBRARY,
            LIBRARY_TO_CORRIDOR,
            STORAGE_TO_LIBRARY,
            LIBRARY_TO_STORAGE,
            OBELISK_TO_GYM,
            GYM_TO_OBELISK,
        ];

        export function getById(id: number): WorldObject {
            return ALL_OBJECTS[id - 1];
        }

        export const ALL_PIT_OBJECTS: Pit[] = [
            OBJECT44,
            OBJECT45,
            OBJECT9,
        ];
        export const PIT_COLLECTION_ROOM_NEXUS: Pit[] = [
            OBJECT9,
        ];
        export const PIT_COLLECTION_ROOM_CORRIDOR: Pit[] = [
            OBJECT44,
            OBJECT45,
        ];
        export const ALL_SWITCH_OBJECTS: Switch[] = [
            OBJECT48,
            OBJECT10,
        ];
        export const SWITCH_COLLECTION_ROOM_ATRIUM: Switch[] = [
            OBJECT48,
        ];
        export const SWITCH_COLLECTION_ROOM_NEXUS: Switch[] = [
            OBJECT10,
        ];
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
        export const CRATE_COLLECTION_ROOM_NEXUS: Crate[] = [
            OBJECT6,
            OBJECT7,
        ];
        export const ALL_PRESSUREPLATE_OBJECTS: PressurePlate[] = [
            OBJECT8,
        ];
        export const PRESSUREPLATE_COLLECTION_ROOM_NEXUS: PressurePlate[] = [
            OBJECT8,
        ];
        export const ALL_SPIKES_OBJECTS: Spikes[] = [
            OBJECT11,
            OBJECT12,
        ];
        export const SPIKES_COLLECTION_ROOM_NEXUS: Spikes[] = [
            OBJECT11,
            OBJECT12,
        ];
        export const ALL_DARTSHOOTER_OBJECTS: DartShooter[] = [
            OBJECT13,
            OBJECT14,
        ];
        export const DARTSHOOTER_COLLECTION_ROOM_NEXUS: DartShooter[] = [
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
            OBJECT21,
        ];
        export const DOOR_COLLECTION_ROOM_NEXUS: Door[] = [
            OBJECT21,
        ];
        export const ALL_WARP_OBJECTS: Warp[] = [
            ATRIUM_TO_NEXUS,
            NEXUS_TO_ATRIUM,
            NEXUS_TO_CORRIDOR,
            CORRIDOR_TO_NEXUS,
            NEXUS_TO_OBELISK,
            OBELISK_TO_NEXUS,
            NEXUS_TO_GYM,
            GYM_TO_NEXUS,
            CORRIDOR_TO_LIBRARY,
            LIBRARY_TO_CORRIDOR,
            STORAGE_TO_LIBRARY,
            LIBRARY_TO_STORAGE,
            OBELISK_TO_GYM,
            GYM_TO_OBELISK,
        ];
        export const WARP_COLLECTION_ROOM_ATRIUM: Warp[] = [
            ATRIUM_TO_NEXUS,
        ];
        export const WARP_COLLECTION_ROOM_NEXUS: Warp[] = [
            NEXUS_TO_ATRIUM,
            NEXUS_TO_CORRIDOR,
            NEXUS_TO_OBELISK,
            NEXUS_TO_GYM,
        ];
        export const WARP_COLLECTION_ROOM_CORRIDOR: Warp[] = [
            CORRIDOR_TO_NEXUS,
            CORRIDOR_TO_LIBRARY,
        ];
        export const WARP_COLLECTION_ROOM_STORAGE: Warp[] = [
            STORAGE_TO_LIBRARY,
        ];
        export const WARP_COLLECTION_ROOM_LIBRARY: Warp[] = [
            LIBRARY_TO_CORRIDOR,
            LIBRARY_TO_STORAGE,
        ];
        export const WARP_COLLECTION_ROOM_OBELISK: Warp[] = [
            OBELISK_TO_NEXUS,
            OBELISK_TO_GYM,
        ];
        export const WARP_COLLECTION_ROOM_GYM: Warp[] = [
            GYM_TO_NEXUS,
            GYM_TO_OBELISK,
        ];

        export function getAllPitObjects(): Pit[] {
            return ALL_PIT_OBJECTS;
        }

        export function getPitCollectionForRoom(roomName: string): Pit[] {
            if (!roomName) {
                return [];
            }
            switch(roomName) {
                case tomb.NEXUS_NAME: return PIT_COLLECTION_ROOM_NEXUS;
                case tomb.CORRIDOR_NAME: return PIT_COLLECTION_ROOM_CORRIDOR;
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
                case tomb.ATRIUM_NAME: return SWITCH_COLLECTION_ROOM_ATRIUM;
                case tomb.NEXUS_NAME: return SWITCH_COLLECTION_ROOM_NEXUS;
            }
            return [];
        }

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
                case tomb.NEXUS_NAME: return CRATE_COLLECTION_ROOM_NEXUS;
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
                case tomb.NEXUS_NAME: return PRESSUREPLATE_COLLECTION_ROOM_NEXUS;
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
                case tomb.NEXUS_NAME: return SPIKES_COLLECTION_ROOM_NEXUS;
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
                case tomb.NEXUS_NAME: return DARTSHOOTER_COLLECTION_ROOM_NEXUS;
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
                case tomb.NEXUS_NAME: return WARP_COLLECTION_ROOM_NEXUS;
                case tomb.CORRIDOR_NAME: return WARP_COLLECTION_ROOM_CORRIDOR;
                case tomb.STORAGE_NAME: return WARP_COLLECTION_ROOM_STORAGE;
                case tomb.LIBRARY_NAME: return WARP_COLLECTION_ROOM_LIBRARY;
                case tomb.OBELISK_NAME: return WARP_COLLECTION_ROOM_OBELISK;
                case tomb.GYM_NAME: return WARP_COLLECTION_ROOM_GYM;
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
