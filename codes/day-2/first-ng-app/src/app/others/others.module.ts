import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CalculatorComponent } from "./calculator/calculator.component";
import { SampleComponent } from "./sample/sample.component";

@NgModule({
    declarations: [SampleComponent, CalculatorComponent],
    providers: [],
    imports: [FormsModule],
    exports: [SampleComponent],
    bootstrap: []
})
export class OthersModule {
    constructor() {
        console.log('sample module created')
    }
}