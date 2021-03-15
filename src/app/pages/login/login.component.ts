import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { IAdmin } from 'src/app/models/IAdmin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private cookieService: CookieService,
    private router: Router) {}

  ngOnInit(): void {}

  login(): void {
    this.cookieService.set('username', this.username);
    this.cookieService.set('password', this.password);

    this.router.navigate(['/edit']);
  }

}
