import {Component, Input, OnInit} from '@angular/core';
import {LoadUserDataService} from "../service/load-user-data.service";
import {CardUser} from "../interface/card-user";
import {User} from "../interface/user";
import {ActivatedRoute, Router} from '@angular/router';
import {GetUserService} from "../service/get-user.service";

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss']
})
export class CardUserComponent implements OnInit {

  //@Input() user!: User;
  public user = {} as User;
  public cardUser = {} as CardUser;

  errorFollowing:boolean = false;
  errorFollowers:boolean = false;
  errorRepos: boolean = false;
  constructor(private getUserService: GetUserService, private loadUserDataService: LoadUserDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getUser();
  }

   getUser(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.getUserService.getUser(id).then((user) => this.user = user);

    this.detailedUserCard();
  }

  detailedUserCard(){
    this.loadUserDataService.loadUserData(this.user.login,1,1,1).then(userData => {
      if(userData){
        this.cardUser = userData;
      }else {
        this.errorData()
      }
    })
  }
  errorData(){
    this.errorFollowing = true;
    this.errorFollowers = true;
    this.errorRepos = true;
  }
  refreshData(data: string){

    if (data === 'following'){
      this.loadUserDataService.loadUserData(this.user.login,1,0,0).then(data => {
        this.cardUser.following = data.following;
      })
      this.errorFollowing = false;
    }

    if (data === 'followers'){
      this.loadUserDataService.loadUserData(this.user.login,0,1,0).then(data => {
        this.cardUser.followers = data.followers;
      })
      this.errorFollowers = false;
    }
    if (data === 'repos'){
      this.loadUserDataService.loadUserData(this.user.login,0,0,1).then(data => {
        this.cardUser.repos = data.repos;
      })
      this.errorRepos = false;
    }
  }
}
