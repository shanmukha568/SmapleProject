import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
user;
errorMessage;
constructor(private router:Router){
  this.user={username:'',password:''}
  this.errorMessage = ''
}

  submit(form:any) {
    const users = JSON.parse(sessionStorage.getItem('users')||'{users:[]}');
    // console.log(users)
      for(let user of users.users){
        if(user.username === this.user.username){
          if(user.password===this.user.password){
            this.errorMessage='';
            this.router.navigate(['/dashboard']);
          }else{
            this.errorMessage = "password is wrong!";
          }
          return;
        }
      }
      this.errorMessage = "User not found! please register"
    // let i=0;
    // while(sessionStorage.getItem(`user${i}`)){
    //   let user2 = JSON.parse(sessionStorage.getItem( `user${i}`)??'');
    //   if(user2.username ===  this.user.username && user2.password===this.user.password){
    //     this.errorMessage='';
    //     sessionStorage.setItem('userId',(i.toString()));
    //     this.router.navigate(['/dashboard']);
    //     break;
    //   }
    //   i=i+1;
    // }

    // this.errorMessage="Invalid username or password";    
  }
}
