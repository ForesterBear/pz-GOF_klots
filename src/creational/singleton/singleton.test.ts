import { Singleton } from './singleton';

describe('Singleton', () => {
  test('returns same instance and preserves state', () => {
    const s1 = Singleton.getInstance();
    const s2 = Singleton.getInstance();

    expect(s1).toBe(s2);

    s1.setValue(42);
    expect(s2.getValue()).toBe(42);
  });
});
