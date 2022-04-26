import { Component, OnInit,Input  } from '@angular/core';
import {User} from "../interface/user";

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  @Input() user!: User;
  constructor() { }

  ngOnInit(): void {
  }

}
