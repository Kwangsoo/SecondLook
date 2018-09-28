import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  constructor(public authService: AuthService, private alertify: AlertifyService,
    private router: Router) { }

  ngOnInit() { }

  login() {
    // console.log(this.model);
    this.authService.login(this.model).subscribe(next => {
      console.log('Logged in Successfully');
      this.alertify.success('Logged in Successfully');
    }, error => {
      console.log(error);
    }, () => {
      this.router.navigate(['members']);
    });
  }

  loggedIn() {
    // const token = localStorage.getItem('token');
    // return !!token;

    // using jwt Help service in Auth Service
    return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    console.log('logged out');
    this.alertify.message('logged out');
    this.router.navigate(['/home']);
  }

}
