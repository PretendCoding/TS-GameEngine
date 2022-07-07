import { Entity } from "./entity";

export class EntityManager {
    /**
     * @property {Map<string, Entity>} _entities This is the map of entities paired with their ids.
     */
    private _entities : Map<string, Entity> = new Map<string, Entity>();

    /**
     * @param id This is the id of the entity. If it is not provided, a random id will be generated.
     * @returns The entity that was created.
     */
    createEntity(id?: string) : Entity {
        if (id) {
            if (this._entities.has(id)) {
                throw new Error(`Entity with id ${id} already exists.`);
            }
        } else {
            id = crypto.randomUUID();
        }
        let entity = new Entity(id);
        this._entities.set(id, entity);
        return entity;
    }
}