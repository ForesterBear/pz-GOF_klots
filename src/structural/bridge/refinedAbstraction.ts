import { Abstraction } from './abstraction';
import { Implementor } from './implementor';

export class RefinedAbstraction extends Abstraction {
  constructor(implementor: Implementor) {
    super(implementor);
  }

  operation(): string {
    return `RefinedAbstraction: Extended operation -> ${this.implementor.operationImp()}`;
  }
}
