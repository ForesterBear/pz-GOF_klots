import { Implementor } from './implementor';

export class Abstraction {
  protected implementor: Implementor;

  constructor(implementor: Implementor) {
    this.implementor = implementor;
  }

  operation(): string {
    return `Abstraction: Base operation with -> ${this.implementor.operationImp()}`;
  }
}
