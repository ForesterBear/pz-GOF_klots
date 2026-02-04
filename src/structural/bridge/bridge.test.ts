import { Abstraction } from './abstraction';
import { ConcreteImplementorA } from './concreteImplementorA';
import { ConcreteImplementorB } from './concreteImplementorB';

describe('Bridge', () => {
  test('Abstraction uses implementor A', () => {
    const implA = new ConcreteImplementorA();
    const abstraction = new Abstraction(implA);

    expect(abstraction.operation()).toContain('platform A');
  });

  test('RefinedAbstraction uses implementor B', () => {
    const implB = new ConcreteImplementorB();
    // dynamic import of refined abstraction to avoid circular imports in some setups
    const RefinedAbstraction = require('./refinedAbstraction').RefinedAbstraction;
    const refined = new RefinedAbstraction(implB);

    expect(refined.operation()).toContain('platform B');
  });
});
