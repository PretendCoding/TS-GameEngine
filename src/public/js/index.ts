import { EntityManager } from "./core/ecs/entityManager";
import { testCompMan } from "./testing/testComp";

let testComp = new testCompMan();
let testEntMan = new EntityManager();
let testEnt = testEntMan.createEntity();

testEnt.addComponent(testComp);

console.log(testComp);
console.log(testEntMan);