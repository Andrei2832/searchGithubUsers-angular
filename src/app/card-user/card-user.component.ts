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

  constructor(private loadUserDataService: LoadUserDataService) { }

  ngOnInit(): void {
    this.detailedUserCard()
  }
  detailedUserCard(){
    this.loadUserDataService.loadUserData(this.user.login,1,1,1).then(userData => {
      [this.following, this.followers, this.repos] = userData;
    })

  }

}
