import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})


export class SignUpComponent implements OnInit {
  
  constructor(public userService: UserService) { }

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSuccessMessage: boolean;
  serverErrorMessage: string;
  notMatch: string;



  ngOnInit(): void { 
    
   }

  onSubmit(form: NgForm) {

    if(this.userService.selectedUser.confirmPassword !== this.userService.selectedUser.password){
      this.notMatch = 'Password not match';
      console.log(this.notMatch)
    }else{
      this.userService.postUser(form.value).subscribe(
        res => {
            this.showSuccessMessage = true
            setTimeout(() => this.showSuccessMessage = false, 4000);
            this.resetForm(form);
        },
    
        err => {
          if (err.status === 422) {
            // If email is exist in database
            this.serverErrorMessage = err.error.join('<br/>');
          }else
          this.serverErrorMessage = 'Something went wrong in your server!';
        }
      );
    }
  }

  resetForm(form: NgForm) {
    this.userService.selectedUser = {
      email: '',
      password: '',
      confirmPassword: '',
    };
    form.resetForm();
    this.serverErrorMessage = '';
  }

}