import { NgModule } from "@angular/core";
import { SampleComponent } from "./sample.component";

@NgModule({
    declarations: [SampleComponent],
    providers: [],
    imports: [],
    exports: [SampleComponent],
    bootstrap: []
})
export class SampleModule {
    constructor() {
        console.log('sample module created')
    }
}