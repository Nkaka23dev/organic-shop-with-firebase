import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { map} from 'rxjs/operators';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth:AuthService,private route:Router) {
   }
   public canActivate(router,state:RouterStateSnapshot){
     return this.auth.user$.pipe(map(user=>{ 
       if (user) return true;
      this.route.navigate(['/login'],{queryParams:{returnUrl:state.url}});
      return false
     }))
   }
}
