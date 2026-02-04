import { Implementor } from './implementor';

export class ConcreteImplementorB implements Implementor {
  operationImp(): string {
    return 'ConcreteImplementorB: Result from platform B.';
  }
}
