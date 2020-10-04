import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessage: string;
  showSuccessMessage: boolean;

  model = {
    email:'',
    password:''
  };

  ngOnInit(): void { 
  }

  onSubmit(form : NgForm){
    
    this.userService.login(form.value).subscribe((data) => {
      
        this.router.navigate(['/welcome']);
      console.log(data)
      err => {
        if (err.status === 428) {
          this.serverErrorMessage = err.error.join('<br/>');
        }else
        this.serverErrorMessage = 'Something went wrong in your server!';
      }
    
    });
  }
}
