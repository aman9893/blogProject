import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './authservice';


@Injectable()
export class NotAuthGuardService implements CanActivate {

  constructor(public authService: AuthService, public router: Router) { }

  canActivate(): boolean {
    console.log(this.authService.loggedIn())
    if(this.authService.loggedIn()){
      this.router.navigate(['/'])
      return false;
    }else{
      return true;
    }
  }
}