import { Component, ComponentManager } from "../core/ecs/component";

export interface TestComp extends Component {
    [key: string]: number | string | boolean;
    num: number;
    str: string;
    bool: boolean;
}

export const Default: TestComp = {
    num: 0,
    str: "",
    bool: false
};

export class testCompMan extends ComponentManager {
    constructor() {
        super('testCompMan', Default);
        this._entityComponentPairs = new Map<string, TestComp>();
    }
}