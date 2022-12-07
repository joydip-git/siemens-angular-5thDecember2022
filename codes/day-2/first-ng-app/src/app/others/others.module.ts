import { NgModule } from "@angular/core";
import { SampleComponent } from "./sample/sample.component";

@NgModule({
    declarations: [SampleComponent],
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