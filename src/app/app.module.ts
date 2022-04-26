import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { SearchUsersComponent } from './search-users/search-users.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { CardUserComponent } from './card-user/card-user.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    SearchUsersComponent,
    ListUsersComponent,
    CardUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    CardUserComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
