export class Singleton {
  private static instance: Singleton | null = null;
  private value: number;

  // Приватний конструктор запобігає створенню екземплярів зовні класу
  private constructor() {
    this.value = Math.random();
  }

  // Метод доступу до єдиного екземпляра
  static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  getValue(): number {
    return this.value;
  }

  setValue(v: number): void {
    this.value = v;
  }
}
