interface ShippingStrategy {
  calculateCost(weight: number, distance: number): number;
}


class FedExStrategy implements ShippingStrategy {
  calculateCost(weight: number, distance: number): number {

    console.log('FedEx shipping cost calculation logic')
            return 0.15* (weight*distance)
  }
}

class UPSStrategy implements ShippingStrategy {
  calculateCost(weight: number, distance: number): number {

    console.log('UPS shipping cost calculation logic')
            return 0.2* (weight*distance)

  }
}

class USPSStrategy implements ShippingStrategy {
  calculateCost(weight: number, distance: number): number {

    console.log('USPS shipping cost calculation logic')
            return 0.1* (weight*distance)

  }
}


class ShippingCostCalculator {
  public shippingStrategy: ShippingStrategy;

  constructor(shippingStrategy: ShippingStrategy) {
    this.shippingStrategy = shippingStrategy;
  }

  calculateCost(weight: number, distance: number): number {
    return this.shippingStrategy.calculateCost(weight, distance);
  }
}



const fedExStrategy = new FedExStrategy();
const upsStrategy = new UPSStrategy();
const uspsStrategy = new USPSStrategy();

const calculator = new ShippingCostCalculator(fedExStrategy);
let cost1 = calculator.calculateCost(10, 100);
console.log(`FedEx cost: ${cost1}`); // Output: FedEx shipping cost for a 10 lb package traveling 100 miles

calculator.shippingStrategy = upsStrategy;
const cost2 = calculator.calculateCost(10, 100);
console.log(`UPS cost: ${cost2}`); // Output: UPS shipping cost for a 10 lb package traveling 100 miles

calculator.shippingStrategy = uspsStrategy;
const cost3 = calculator.calculateCost(10, 100);
console.log(`USPS cost: ${cost3}`); // Output: USPS shipping cost for a 10 lb package traveling 100 miles
