class ShippingCostCalculator {
    calculateCost(provider: string, weight: number, distance: number): number {
        const strategy = this.getStrategy(provider);
        return strategy(weight, distance);
    }

    private getStrategy(provider: string) {
        if (provider === 'fedex') return this.fedex;
        if (provider === 'ups') return this.ups;
        if (provider === 'usps') return this.usps;
        throw new Error('Unknown provider');
    }

    private fedex(w: number, d: number) {
        return 0.15 * w * d;
    }

    private ups(w: number, d: number) {
        return 0.2 * w * d;
    }

    private usps(w: number, d: number) {
        return 0.1 * w * d;
    }
}
