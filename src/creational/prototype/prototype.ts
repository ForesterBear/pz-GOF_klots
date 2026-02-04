export interface Prototype<T> {
  clone(): T;
}

export class Product implements Prototype<Product> {
  constructor(public name: string, public details: { price: number; tags: string[] }) {}

  clone(): Product {
    // Простий глибокий клон: для цього прикладу досить зробити копію масиву
    return new Product(this.name, { price: this.details.price, tags: [...this.details.tags] });
  }

  toString(): string {
    return `Product{name=${this.name}, price=${this.details.price}, tags=[${this.details.tags.join(', ')}]}`;
  }
}
