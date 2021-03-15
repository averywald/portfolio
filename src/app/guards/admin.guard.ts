import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service'; 

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private permissions: Permissions) {}

  canActivate(): boolean {
    this.permissions.canActivate();
    return true;
  }
  
}

@Injectable({
  providedIn: 'root'
})
export class Permissions {

  private cookies: object;

  constructor(private cookieService: CookieService) {
    this.cookies = this.cookieService.getAll();
  }

  canActivate(user?: UserToken, id?: string): boolean {
    console.log();
    return true;
  }

}

export class UserToken {
  // implement
}
