import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  user:any;
  dashBoardUsers:any;
  loggedInUser:any;
  constructor(private router: Router) { 
    // let userId  = sessionStorage.getItem('userId');
    // this.user = JSON.parse(sessionStorage.getItem(`user${userId}`)??'{}');


    this.dashBoardUsers = JSON.parse(sessionStorage.getItem('users')||'{users:[]}');
    this.dashBoardUsers=this.dashBoardUsers.users;
    // console.log(this.dashBoardUsers);
  }

  goLoginComponent(){
    this.router.navigate(['/']);
  }

  deleteUser(username:string){
    this.dashBoardUsers.splice(this.dashBoardUsers.findIndex((user:any)=>user.username  === username),1);
    sessionStorage.setItem('users',JSON.stringify({users : this.dashBoardUsers}));
  }
}
