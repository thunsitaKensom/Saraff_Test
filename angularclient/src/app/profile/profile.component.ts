import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService) {
    this.user = new User();
  }

  ngOnInit() {
    this.profile()
  }

  profile() {
    this.userService.profile(sessionStorage.getItem('username')).subscribe(result => {
      this.user = result;
      (['/profile'])
    });

  }

  editProfile() {
    this.userService.update(this.user).subscribe(result => {
      console.log(this.user)
      sessionStorage.setItem('username', this.user["username"]);
      this.router.navigate([location.reload()])

    });

  }

}