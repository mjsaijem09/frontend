import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';

// routes
import { appRoutes } from './routes';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserService } from './shared/user.service';
import { WelcomeComponent } from './welcome/welcome.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
    SignInComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
