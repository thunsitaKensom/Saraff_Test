import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/user';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  user: User;
  usernameDuplicate: Boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService) {
    this.usernameDuplicate = true;
    this.user = new User();
  }

  onSubmit() {

    this.userService.save(this.user).subscribe(result => {
      sessionStorage.setItem('username', this.user["username"]);
      this.router.navigate(['/index'])
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