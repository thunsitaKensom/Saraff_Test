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
  userModal: User;
  usernameDuplicate: Boolean;
  constructor(
    private router: Router,
    private userService: UserService) {
    this.user = new User();
    this.userModal = new User();
    this.usernameDuplicate = true;
  }

  ngOnInit() {
    this.profile()
  }

  profile() {
    this.userService.profile(sessionStorage.getItem('username')).subscribe(result => {
      this.user = result;
      this.userModal = result;
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

  checkUsernameDuplicate(event: any) {
    // console.log(event.target.value)
    this.userService.checkUsernameDuplicate(event.target.value).subscribe(result => {
      //console.log(result)
      if ((result) == null) {
        console.log(result + "6665")
        this.usernameDuplicate = true;
      }
      else {
        this.usernameDuplicate = false;
      }
    });
  }

}
