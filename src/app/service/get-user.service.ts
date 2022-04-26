import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SearchUsers} from "../interface/search-users";
import {Observable, Subject} from "rxjs";
import {User} from "../interface/user";


@Injectable({
  providedIn: 'root'
})
export class GetUserService {

  public dataUsers = {} as SearchUsers;
  public dataUser = {} as User;
  public URL = 'https://api.github.com/';

  constructor(private http: HttpClient) { }

  public async getUsers(searchValue: string, page:number):Promise<SearchUsers>{
    try {

      this.http.get(`${this.URL}search/users?q=${searchValue}&per_page=20&page=${page}`).subscribe(user => {
        Object.assign(this.dataUsers, user);
      });
      return this.dataUsers;
    }
    catch (e){
      return this.dataUsers;
    }
  }


  public async getUser(searchValue: number): Promise<User>{
    try {

      this.http.get(`${this.URL}user/${searchValue}`).subscribe(user => {
        Object.assign(this.dataUser,user);
      });
      console.log(this.dataUser)
      // dataURL.json().then((data: User) => {
      //   Object.assign(this.dataUser, data);
      // })
      return this.dataUser;
    }
    catch (e){
      return this.dataUser;
    }




  }
}
