import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';


@NgModule({
    declarations: [
        AppComponent,
        HelloWorldComponent,
        FormComponent,
        ListComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
