import { Implementor } from './implementor';

export class ConcreteImplementorA implements Implementor {
  operationImp(): string {
    return 'ConcreteImplementorA: Result from platform A.';
  }
}
