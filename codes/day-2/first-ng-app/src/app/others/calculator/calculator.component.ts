import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
    selector: 'app-calculator',
    templateUrl: './calculator.component.html',
    styleUrls: ['./calculator.component.css']
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
    add(frm: NgForm) {
        console.log(frm)
        this.addResult = Number(this.firstValue) + Number(this.secondValue)
    }
}