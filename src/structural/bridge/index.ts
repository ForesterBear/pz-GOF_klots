import { Abstraction } from './abstraction';
import { RefinedAbstraction } from './refinedAbstraction';
import { ConcreteImplementorA } from './concreteImplementorA';
import { ConcreteImplementorB } from './concreteImplementorB';

export function runBridge(): void {
  const implementorA = new ConcreteImplementorA();
  const abstraction = new Abstraction(implementorA);
  console.log(abstraction.operation());

  const implementorB = new ConcreteImplementorB();
  const refined = new RefinedAbstraction(implementorB);
  console.log(refined.operation());
}


export default runBridge;
