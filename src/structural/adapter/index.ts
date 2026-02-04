import { Target } from './target';
import { Adapter } from './adapter';
import { Adaptee } from './adaptee';

export function runAdapter(): void {
  console.log('\n--- Adapter pattern demo ---');

  const adaptee = new Adaptee();
  const adapter: Target = new Adapter(adaptee);

  console.log('Adaptee specific request (raw):', adaptee.specificRequest());
  console.log('Adapter request (translated):', adapter.request());
}

export default runAdapter;
