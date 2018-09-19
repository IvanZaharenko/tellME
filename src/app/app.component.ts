import { Component } from '@angular/core';
import {UsersServis} from "./users.servis";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersServis]
})


export class AppComponent {

  }
