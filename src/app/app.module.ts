import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { HeadingComponent } from './heading/heading.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { UserListHttpclientComponent } from './user-list-httpclient/user-list-httpclient.component';
import { HttpClientModule } from '@angular/common/http'


@NgModule({
    declarations: [
        AppComponent,
        HelloWorldComponent,
        FormComponent,
        ListComponent,
        HeadingComponent,
        TemplateDrivenFormComponent,
        ReactiveFormComponent,
        UserListHttpclientComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
