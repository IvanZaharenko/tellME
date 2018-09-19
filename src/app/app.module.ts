import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import {HttpClientModule} from "@angular/common/http";
import {HttpModule} from "@angular/http";
import {HoverDirective} from "./hover.directive";
import {FormsModule} from "@angular/forms";
import {SearchPipe} from './search.pipe';
import { HomeComponent } from './home/home.component';
import { SetupComponent } from './setup/setup.component';
import {RouterModule} from '@angular/router';

// создаем роуты для навигационного меню
const routes = [
  {path: '', component: HomeComponent},
  {path: 'setup', component: SetupComponent}

];


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent, // задекларировали новый компонент, чтобы был доступен
    HoverDirective,  // задекларировали созданну,
    SearchPipe, // задекларировали свой пайп
    HomeComponent,
    SetupComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,  // импортируем HTTP модуль для работы с ним
    FormsModule, // поддержка ngModel
    HttpClientModule, // для новых версий импортируем вместо HTTP
    RouterModule.forRoot(routes)  // for routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
