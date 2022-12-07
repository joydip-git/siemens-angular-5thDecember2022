import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { CalculationService } from "src/app/services/calcuation.service";

@Component({
    selector: 'app-calculator',
    templateUrl: './calculator.component.html',
    styleUrls: ['./calculator.component.css'],
    //providers: [CalculationService]
})
export class CalculatorComponent {
    firstValue = ''
    secondValue = ''
    addResult = 0

    // add(a: string, b: string) {
    //     this.firstValue = Number(a)
    //     this.secondValue = Number(b)
    //     this.addResult = this.firstValue + this.secondValue
    // }
    // updateFirst(f: string) {
    //     this.firstValue = Number(f)
    // }
    // updateSecond(s: string) {
    //     this.secondValue = Number(s)
    // }
    constructor(private _calcSvcRef: CalculationService) {

    }
    add(frm: NgForm) {
        console.log(frm)
        this.addResult = this._calcSvcRef.add(Number(this.firstValue), Number(this.secondValue))
    }
}