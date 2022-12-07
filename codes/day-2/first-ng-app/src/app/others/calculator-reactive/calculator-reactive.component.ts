import { Component } from "@angular/core";
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";
import { CalculationService } from "src/app/services/calcuation.service";

@Component({
    selector: 'app-calculator-reactive',
    templateUrl: './calculator-reactive.component.html',
    //providers: [CalculationService]
})
export class CalculatorReactiveComponent {
    //private _calcSvcRef: CalculationService;
    addResult = 0

    // firstInput?: FormControl;
    // secondInput?: FormControl;
    // firstInput = new FormControl('')
    // secondInput = new FormControl('')
    // calculatorForm = new FormGroup({
    //     first: this.firstInput,
    //     second: this.secondInput
    // })
    // calculatorForm = new FormGroup({
    //     first: new FormControl(''),
    //     second: new FormControl('')
    // })

    calculatorForm: FormGroup | undefined;
    constructor(private _calcSvcRef: CalculationService, private _builder: FormBuilder) {
        //this._calcSvcRef = new CalculationService()
        //this._calcSvcRef = _calcSvcRef
        // this.firstInput = this._builder.control('')
        // this.secondInput = this._builder.control('')
        this.calculatorForm = this._builder.group({
            first: [''],
            second: ['']
        })
    }
    add() {
        const { first, second } = this.calculatorForm?.value
        this.addResult = this._calcSvcRef.add(Number(first), Number(second))
    }
}