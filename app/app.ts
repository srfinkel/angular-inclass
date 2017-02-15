import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import { enableProdMode } from '@angular/core';

// enableProdMode();
// uncomment on launch. helps with debugging tools
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);