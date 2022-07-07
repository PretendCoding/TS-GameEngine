import { Component, ComponentManager } from "../core/ecs/component";

export interface TestComp2 extends Component {
    [key: string]: number | string | boolean;
    num: number;
    str: string;
    bool: boolean;
}

export const Default: TestComp2 = {
    num: 0,
    str: "",
    bool: false
};

export class testCompMan2 extends ComponentManager {
    constructor() {
        super('testCompMan2', Default);
        this._entityComponentPairs = new Map<string, TestComp2>();
    }
}