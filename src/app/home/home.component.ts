import { Component, OnInit } from '@angular/core';
import {UsersServis} from "../users.servis";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users =[];
  searchName ='';
  constructor (private UsersServis: UsersServis){}

  ngOnInit(){
    // this.users = this.UsersServis.users
    this.UsersServis.getUsers().subscribe(users =>{
      this.users = users    })
  }

}
