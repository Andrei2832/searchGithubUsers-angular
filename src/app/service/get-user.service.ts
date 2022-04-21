import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GetUserService {


  constructor() { }

  public async getUsers(searchValue: string, page:number): Promise<any>{
    const URL = 'https://api.github.com/';
    try {
      return await fetch(`${URL}search/users?q=${searchValue}&per_page=20&page=${page}`);
    }
    catch (e){
      return false;
    }

  }
}
