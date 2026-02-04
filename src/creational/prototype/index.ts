import { Product } from './prototype';

export function runPrototype(): void {
  console.log('\n--- Prototype pattern demo ---');

  const original = new Product('Widget', { price: 9.99, tags: ['gadget', 'new'] });
  const copy = original.clone();

  // Змінюємо копію і демонструємо, що оригінал не постраждав
  copy.name = 'Widget Copy';
  copy.details.tags.push('copy');

  console.log('Original:', original.toString());
  console.log('Copy    :', copy.toString());
  console.log('Original tags (should not contain "copy"):', original.details.tags.join(', '));
}

export default runPrototype;
