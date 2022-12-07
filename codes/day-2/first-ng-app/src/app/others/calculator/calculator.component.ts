import { Component } from "@angular/core";

@Component({
    selector: 'app-calculator',
    templateUrl: './calculator.component.html',
    styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
    firstValue = 0
    secondValue = 0
    addResult = 0

    add(a: string, b: string) {
        this.firstValue = Number(a)
        this.secondValue = Number(b)
        this.addResult = this.firstValue + this.secondValue
    }
}