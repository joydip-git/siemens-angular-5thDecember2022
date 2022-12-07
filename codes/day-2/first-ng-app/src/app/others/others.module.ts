import { NgModule } from "@angular/core";
import { CalculatorComponent } from "./calculator/calculator.component";
import { SampleComponent } from "./sample/sample.component";

@NgModule({
    declarations: [SampleComponent, CalculatorComponent],
    providers: [],
    imports: [],
    exports: [SampleComponent],
    bootstrap: []
})
export class OthersModule {
    constructor() {
        console.log('sample module created')
    }
}