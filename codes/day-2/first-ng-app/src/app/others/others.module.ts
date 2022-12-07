import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { CalculationService } from "../services/calcuation.service";
import { CalculatorReactiveComponent } from "./calculator-reactive/calculator-reactive.component";
import { CalculatorComponent } from "./calculator/calculator.component";
import { SampleComponent } from "./sample/sample.component";

@NgModule({
    declarations: [SampleComponent, CalculatorComponent, CalculatorReactiveComponent],
    providers: [CalculationService],
    imports: [FormsModule, ReactiveFormsModule, CommonModule],
    exports: [SampleComponent],
    bootstrap: []
})
export class OthersModule {
    constructor() {
        console.log('sample module created')
    }
}