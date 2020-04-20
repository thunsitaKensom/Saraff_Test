import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/user';
import { NgForm } from '@angular/forms';

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
      (['/profile'])
    });

  }

  getBook() {
    this.userModal["username"] = this.user["username"];
    this.userModal["nickname"] = this.user["nickname"];
    this.userModal["password"] = this.user["password"];
    this.userModal["email"] = this.user["email"];
  }


  editProfile(f: NgForm) {
    console.log(f.value)
    this.userModal = f.value;
    this.userService.update(this.userModal).subscribe(result => {
      console.log(this.userModal)
      sessionStorage.setItem('username', this.userModal["username"]);
      this.router.navigate([location.reload()])
    });
  }

  checkUsernameDuplicate(event: any) {
    // console.log(event.target.value)
    this.userService.checkUsernameDuplicate(event.target.value).subscribe(result => {
      //console.log(result)
      if ((result) == null) {
        this.usernameDuplicate = true;
      }
      else {
        this.usernameDuplicate = false;
      }
    });
  }

}
