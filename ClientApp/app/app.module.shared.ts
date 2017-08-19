import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app/app.component'
import { ActiveUsersComponent } from './components/active-users/active-users.component';
import { InactiveUsersComponent } from './components/inactive-users/inactive-users.component';

import { UserService } from './services/user.service';

export const sharedConfig: NgModule = {
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        ActiveUsersComponent,
        InactiveUsersComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [UserService]
};
