// The reason I'm having Component and ComponentManager in the same file is because whenever I create a component, I create its manager in the same file

export type Component = {
    [key: string]: any;
}

export class ComponentManager { 
    private _name : string;


    protected _entityComponentPairs : Map<string, Component | Component[]>;
    protected _defaultComponent : Component;
    
    public get name() : string {
        return this._name;
    }

    constructor(name: string, defaultComponent: Component) {
        this._entityComponentPairs = new Map<string, Component>();
        this._name = name;
        this._defaultComponent = defaultComponent;
    }

    addComponentToEntity(entityId: string) : Component {
        this._entityComponentPairs.set(entityId, this._defaultComponent);
        return this._defaultComponent;
    }
}