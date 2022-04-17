import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchUsersComponent } from './search-users/search-users.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { CardUserComponent } from './card-user/card-user.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchUsersComponent,
    ListUsersComponent,
    CardUserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
