import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { OthersModule } from "./others/others.module";
import { CalculationService } from "./services/calcuation.service";

@NgModule({
  //register components, directives, pipes
  declarations: [AppComponent],
  //register services
  //providers: [CalculationService],
  //import and register other modules (custom, built-in)
  imports: [BrowserModule, OthersModule],
  //if you wnat to expose some assets of this module to the outside modules, then mention the name of the assets of this module here. it is nothing but subset of the assets of this module
  exports: [],
  //which components should be rendered as soon as this module is created and loaded in browser
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log('App Module created')
  }
}