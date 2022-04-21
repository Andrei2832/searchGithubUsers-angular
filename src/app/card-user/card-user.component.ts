import {Component, Input, OnInit} from '@angular/core';
import {LoadUserDataService} from "../service/load-user-data.service";

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss']
})
export class CardUserComponent implements OnInit {

  @Input() user: any;
  following: any;
  followers: any;
  repos: any



  errorFollowing:boolean = false;
  errorFollowers:boolean = false;
  errorRepos: boolean = false;
  constructor(private loadUserDataService: LoadUserDataService) { }

  ngOnInit(): void {
    this.detailedUserCard()
  }
  detailedUserCard(){
    this.loadUserDataService.loadUserData(this.user.login,1,1,1).then(userData => {
      if(userData){
        [this.following, this.followers, this.repos] = userData;
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
  refreshData(data: any){
    console.log(data)
    if (data === 'following'){
      this.loadUserDataService.loadUserData(this.user.login,1,0,0).then(data => {
        [this.following] = data;
      })
      this.errorFollowing = false;
    }

    if (data === 'followers'){
      this.loadUserDataService.loadUserData(this.user.login,0,1,0).then(data => {
        [this.followers] = data;
      })
      this.errorFollowers = false;
    }
    if (data === 'repos'){
      this.loadUserDataService.loadUserData(this.user.login,0,0,1).then(data => {
        [this.repos] = data;
      })
      this.errorRepos = false;
    }
  }
}
