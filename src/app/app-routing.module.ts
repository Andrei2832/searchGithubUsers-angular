import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CardUserComponent} from "./card-user/card-user.component";
import {SearchUsersComponent} from "./search-users/search-users.component";


const routes: Routes = [
  { path: '', redirectTo: '/searchUsers', pathMatch: 'full' },
  { path: 'cardUser/:id', component: CardUserComponent },
  { path: 'searchUsers', component: SearchUsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
