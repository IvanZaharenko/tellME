import { Component, OnInit } from '@angular/core';
import {UsersServis} from "../users.servis";

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {
 size;
  constructor( private usersServise: UsersServis) { }

  onChange(){
   this.usersServise.setSize(+this.size)
  }

  ngOnInit() {
    this.size = this.usersServise.size
  }

}
