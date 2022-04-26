import { Component, OnInit } from '@angular/core';
import {GetUserService} from "../service/get-user.service";
import {SearchUsers} from "../interface/search-users";
import {User} from "../interface/user";


@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.scss']
})
export class SearchUsersComponent implements OnInit {

  load: boolean = false;
  loadCard: boolean = false;
  message: string = '';
  pageCount: number = 1;
  countUser: number = 0;
  listUsers: User[] = [];
  userCard: any;
  timer: any;
  constructor(private getUserService: GetUserService) {}

  ngOnInit(): void {
  }

  sendData(users: string){
    this.clearAll();
    this.load = true;

    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.searchUsers(users);
    },1000)
  }

  searchUsers (users: string): void{
    if (users)
      this.getUserService.getUsers(users,1).then(users => this.createListUsers(users));
    else
      this.clearAll()
  }

  updateListUsers(users: string):void{
    this.getUserService.getUsers(users,this.pageCount).then(users => this.createListUsers(users,true));
  }
  createListUsers(users: SearchUsers, update = false): void{
    console.log(users)
    this.load = false;
    // if (users){
      if (users){
        try {
          if (!update){
            this.clearAll();
          }
          users.items.forEach((item: User) => this.listUsers.push(item))
          this.countUser = users.total_count;
          this.pageCount++;
          this.messageCountUsersOrError(this.countUser);
          // users.json().then((user: any) => {
          //   if (user.items){
          //     this.countUser = user.total_count;
          //     user.items.forEach((item: any) => this.listUsers.push(item))
          //     this.pageCount++;
          //   }
          //   else {
          //     this.clearAll();
          //   }
          //   this.messageCountUsersOrError(this.countUser);
          // });

        }catch (e){
          console.log(e);
          this.messageCountUsersOrError(0,e);
        }
      }else {
        this.clearAll();
        this.messageCountUsersOrError(0);
      }
    // }else {
    //   this.clearAll();
    // }
  }

  clearAll():void{
    this.countUser = 0;
    this.listUsers = [];
    this.pageCount = 1;
    this.message = '';
    this.userCard = null;
    this.load = false;
  }

  messageCountUsersOrError(users: number,error: any = 0): void {
    if (users){
      this.message = (users > 4 ) ? `Найдено ${users} пользователей` :
        (users > 1) ? `Найдено ${users} пользователя` : 'Найден 1 пользователь';
    }else if(users === 0){
      this.message = 'По вашему запросу пользователей не найдено'
    }
    if (error){
      this.message = (error === 403) ? 'Слишком частые запросы! Немного подождите' : 'Неизвестная ошибка! Перезагрузите страницу!'
    }
  }

  creatCardUser(user: any):void{

    this.userCard = null;
    this.loadCard = true;
    setTimeout(()=>{
      this.creat(user);
    },1000)
  }
  public creat(user: any){
    this.userCard = user;
    this.loadCard = false;
  }
}
