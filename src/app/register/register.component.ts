import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
  user;
  errorMessage;
  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.user = { username: '', firstName: '', lastName: '', password: '', confirmPassword: '', email: '', phone: '' };
    this.errorMessage = ''
  }


  submit(form: any) {
      const users = JSON.parse(sessionStorage.getItem('users')||'{users:[]}');
      for(let user of users.users){
        if(user.username === this.user.username){
          this.errorMessage = 'already registered with this username!';
          return;
        }
      }
      users.users.push(this.user);
      sessionStorage.setItem('users',JSON.stringify(users));

      // let i = 0;
      // while (sessionStorage.getItem(`user${i}`)) {
      //   let user2 = JSON.parse(sessionStorage.getItem(`user${i}`) ?? '');
      //   if (user2.email === this.user.email) {
      //     this.errorMessage = 'already registered with this email!';
      //     return;
      //   }
      //   i = i + 1;
      // }
      // this.errorMessage = '';
      // this.errorMessage = "Invalid username or password";
      // console.log(this.user)
      // let noOfUsers = sessionStorage.getItem('noOfUsers') ?? '0';
      // sessionStorage.setItem(`user${noOfUsers}`, JSON.stringify(this.user));
      // sessionStorage.setItem('userId', noOfUsers);
      // sessionStorage.setItem('noOfUsers', (parseInt(noOfUsers) + 1).toString());
      this.router.navigate(['/']);



    
    
  }
}
