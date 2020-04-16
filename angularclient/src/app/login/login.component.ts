import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { UserService } from '../service/user.service';
import { User } from '../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ''
  password = ''
  //invalidLogin = false
  user: User = new User();
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService) { }

  ngOnInit() {
  }

  checkLogin() {
    this.userService.authenticate(this.username, this.password).subscribe(result => this.router.navigate(['']));
  }

}
