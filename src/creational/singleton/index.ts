import { Singleton } from './singleton';

export function runSingleton(): void {
  console.log('\n--- Singleton pattern demo ---');

  const s1 = Singleton.getInstance();
  console.log('First instance value:', s1.getValue());

  const s2 = Singleton.getInstance();
  s2.setValue(123); // змінюємо через другий "екземпляр"

  console.log('Second instance value (after set):', s2.getValue());
  console.log('First instance value (should be same):', s1.getValue());
  console.log('Same instance reference:', s1 === s2);
}

export default runSingleton;
