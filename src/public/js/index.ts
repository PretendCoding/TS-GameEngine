import { EntityManager } from "./core/ecs/entityManager";
import { testCompMan } from "./testing/testComp";
import { testCompMan2 } from "./testing/testComp2";

let testComp = new testCompMan();
let testComp2 = new testCompMan2();
let testEntMan = new EntityManager();
let testEnt = testEntMan.createEntity();

testEnt.addComponents([testComp, testComp2]);

console.log(testComp);
console.log(testComp2);
// console.log(testEntMan);