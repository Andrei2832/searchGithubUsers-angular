import { Injectable } from '@angular/core';
import {CardUser} from "../interface/card-user";

@Injectable({
  providedIn: 'root'
})
export class LoadUserDataService {

  public data = {} as CardUser;

  constructor() { }

   async loadUserData(user: any, followingTrue = 1,followersTrue= 1,reposTrue= 1): Promise<CardUser> {
    const URL = 'https://api.github.com/';

    try {
      if (followingTrue){
        let dataURL = await fetch(`${URL}users/${user}/following`);

        dataURL.json().then((data) => {
          this.data.following = data;
        })
      }
      if (followersTrue){
        let dataURL = await fetch(`${URL}users/${user}/followers`);

        dataURL.json().then((data) => {
          this.data.followers = data;
        })
      }
      if (reposTrue){
        let dataURL = await fetch(`${URL}users/${user}/repos`);

        dataURL.json().then((data) => {
          this.data.repos = data;
        })
      }

      return this.data

    }catch (e){
      console.log(e);
      return this.data;

    }

  }
}
