import { ComponentManager } from "./component";

export class Entity {
    /**
     * @param {string} _id This is the id of the entity. It should only be set in the constructor.
     */
    private _id : string;

    public get id() : string {
        return this._id;
    }

    constructor(id: string) {
        // We should probably check if an entity manager exists here, and if not, throw an error.
        this._id = id;
    }

    // This is very much a shortcut for adding a component to an entity.
    // It makes more sense to say entity.addComponent than componentManager.addComponentToEntity.
    // I'd really like to make this take a component name, but I don't know how to do that. I mean, I know how to do it,
    // but I don't know how to do it in a way that works well with TypeScript and allows for autocomplete.
    
    /**
     * Shortcut for adding a single component to an entity. Pass the component manager, not the component.
     * @param componentManager The component manager which owns the component
     */
    addComponent(componentManager: ComponentManager) {
        componentManager.addComponentToEntity(this.id);
    }

    /**
     * Shortcut for adding one or more components to an entity.
     * @param param0 One or more managers which own the components
     */
    addComponents([...componentManagers] : ComponentManager[]) {
        for (const manager of componentManagers) {
            manager.addComponentToEntity(this.id);
        }
    }
}