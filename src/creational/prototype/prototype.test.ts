import { Product } from './prototype';

describe('Prototype', () => {
  test('clone creates independent copy', () => {
    const original = new Product('Widget', { price: 9.99, tags: ['gadget'] });
    const copy = original.clone();

    expect(copy).not.toBe(original);
    expect(copy.name).toBe(original.name);

    copy.name = 'Changed';
    copy.details.tags.push('copy');

    expect(original.name).toBe('Widget');
    expect(original.details.tags).toEqual(['gadget']);
  });
});
