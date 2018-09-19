import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {map} from 'rxjs/operators/';

@Injectable()
export class UsersServis {
 size = 8;
  constructor(private http: Http) {
  }

  getUsers() {


   return this.http.get('https://randomuser.me/api/?inc=gender,name,picture,location,phone,dob,email&results='+this.size+'&nat=us,dk,fr,gb')
     .pipe( map(function (response) {
           return response.json()
       }))
     .pipe( map(response => response.results))
     .pipe( map(users => {
       return users.map(user =>{
         return {
           name: user.name.first + ' ' + user.name.last,
           avatar: user.picture.large,
           address: user.location.city + '. ' + user.location.state + ', ' + user.location.street,
           eMail: user.email,
           phone: user.phone,
           birthday: user.dob.date ,
           dob: 'age: ' + user.dob.age + ' years old'

         }
       })
     }))
}

setSize(size){
    this.size = size;
}

  users = [
    {name: 'LOL1'},
    {name: 'LOL2'},
    {name: 'LOL3'},
    {name: 'LOL4'},
    {name: 'LOL5'}
  ]
}
