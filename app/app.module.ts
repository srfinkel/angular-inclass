// please import angular duh
import {NgModule} from "@angular/core";
// in order to load in the browser
import {BrowserModule} from "@angular/platform-browser";
// very useful for input validation, good user exp and very flexible
import {FormsModule} from "@angular/forms";
// no need to reinvent the wheel
import {HttpModule} from "@angular/http";
// create app.component
import {AppComponent} from "./app.component";
// create app.routes
import {allAppComponents, appRoutingProviders, routing} from "./app.routes";

const moduleDeclarations = [AppComponent];

@NgModule({
	imports:      [BrowserModule, FormsModule, HttpModule, routing],
	declarations: [...moduleDeclarations, ...allAppComponents],
	// not Twitter's "Bootstrap" bootstrap to load components for an OS to run
	bootstrap:    [AppComponent],
	providers:    [appRoutingProviders]
})
export class AppModule {}