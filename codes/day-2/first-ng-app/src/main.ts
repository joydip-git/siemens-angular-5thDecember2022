import { PlatformRef } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";

const platformRef: PlatformRef = platformBrowserDynamic()

platformRef
  .bootstrapModule(AppModule)
  .then(p => console.log(p))
  .catch(e => console.log(e))
