import { Component } from "@angular/core";

@Component({
    selector: 'app-sample',
    templateUrl: './sample.component.html',
    styleUrls: ['./sample.component.css']
})
export class SampleComponent {
    title = 'Sample'
    width = 200
    constructor() {
        console.log('Sample created')
    }
    updateTitle(newTitle: string) {
        this.title = newTitle
        this.width += 50
    }
}