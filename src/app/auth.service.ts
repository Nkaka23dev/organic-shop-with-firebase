import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase'
import { Observable } from 'rxjs';
import { AppUser } from './models/app-user';
import { switchMap, map } from 'rxjs/operators';
import { UserService } from './user.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user$:Observable<firebase.User>
  constructor(
    private userService:UserService,
    private afAuth:AngularFireAuth,
    private route:ActivatedRoute) { 
    this.user$=this.afAuth.authState
  }

  public login(){
    let returnUrl=this.route.snapshot.queryParamMap.get('returnUrl')
    localStorage.setItem('returnUrl',returnUrl)
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
  }
  public logout(){
  this.afAuth.auth.signOut();
  }
  get appUser$():Observable<AppUser>{
    return this.user$.pipe(switchMap(
      user=>{
        if(user) return this.userService.get(user.uid).valueChanges();
          return of(null)
      }));
  }
}
