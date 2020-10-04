import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User = {
    email: '',
    password: '',
    confirmPassword: '',
  };


  constructor(private http: HttpClient) { }

  //HttpMethods

  postUser(user: User){
    return this.http.post(environment.apiBasedUrl+'/register', user);
  }

  login(user: User) {
    return this.http.post(environment.apiBasedUrl + '/loginUser', user)
  }

}
