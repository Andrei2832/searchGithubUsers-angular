import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadUserDataService {

  constructor() { }

   async loadUserData(user: any, followingTrue = 1,followersTrue= 1,reposTrue= 1): Promise<any> {
    const URL = 'https://api.github.com/';
    const urls = [];
    try {
      if (followingTrue){
        urls.push(`${URL}users/${user}/following`);
      }
      if (followersTrue){
        urls.push(`${URL}users/${user}/followers`);
      }
      if (reposTrue){
        urls.push(`${URL}users/${user}/repos`);
      }
      const requests = urls.map(url => fetch(url));

      // urls.map(url => fetch(url).then(data => {
      //   let check = data.status;
      //   if (check !== 200){
      //     //messageCountUsersOrError(0,check);
      //   }
      // }));

      return await Promise.all(requests)
        .then(responses => Promise.all(responses.map(r => r.json())))

    }catch (e){
      console.log(e);
      return false;
      //messageCountUsersOrError(0,e);
    }

  }
}
