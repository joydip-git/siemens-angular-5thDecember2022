export class CalculationService {
    constructor() {
        console.log('calc service created')
    }
    add(a: number, b: number) {
        return a + b
    }
}