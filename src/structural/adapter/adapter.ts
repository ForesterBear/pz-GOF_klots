import { Target } from './target';
import { Adaptee } from './adaptee';

export class Adapter implements Target {
  private adaptee: Adaptee;

  constructor(adaptee: Adaptee) {
    this.adaptee = adaptee;
  }

  request(): string {
    // Трансформуємо специфічний запит адаптіа в очікуваний інтерфейс Target
    const result = this.adaptee.specificRequest();
    // У цьому прикладі — розвернемо рядок
    return `Adapter: (translated) ${result.split('').reverse().join('')}`;
  }
}
