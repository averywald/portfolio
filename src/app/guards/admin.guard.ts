import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { CookieService } from 'ngx-cookie-service'; 
import { IAdmin } from '../models/IAdmin';
import { DataService } from '../services/data/data.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private dataService: DataService,
    private cookieService: CookieService) {}

  async canActivate(): Promise<boolean> {
    var cookies: IAdmin = {
      username: this.cookieService.get('username'),
      password: this.cookieService.get('password')
    };

    var resp = await this.dataService.queryAdmins(cookies).toPromise();

    return (resp['status'] == 200) ? true : false;
  }
  
}

export class UserToken {
  // implement
}
