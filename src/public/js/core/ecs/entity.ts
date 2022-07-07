import { ComponentManager } from "./componentManager";

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
    addComponent(componentManager: ComponentManager) {
        componentManager.addComponentToEntity(this.id);
    }
}