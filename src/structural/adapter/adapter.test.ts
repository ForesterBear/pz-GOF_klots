import { Adapter } from './adapter';
import { Adaptee } from './adaptee';

describe('Adapter', () => {
  test('translates adaptee request', () => {
    const adaptee = new Adaptee();
    const adapter = new Adapter(adaptee);

    expect(adapter.request()).toContain('Special behavior of the Adaptee');
  });
});
