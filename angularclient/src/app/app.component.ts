import { Component } from '@angular/core';
import { UserService } from './service/user.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string;

  constructor(
    private userService: UserService,
    private router: Router,
  ) {
    this.title = 'Spring Boot - Angular Application';
  }

  /*ngOnInit() {

    this.router.navigate(["/index"])
  }*/



}