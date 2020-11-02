import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule} from 'angularfire2';
import {CustomFormsModule} from 'ng2-validation'
import {AngularFireDatabaseModule} from 'angularfire2/database'
import {AngularFireAuthModule} from 'angularfire2/auth';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { CategoryService } from './category.service';
import { UserService } from './user.service';
import { AdminAuthGuardService } from './admin-auth-guard.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


export const firebase ={
  apiKey: "AIzaSyABJYQs4hUWq-Z8pi9B211DMJS4aWIeSO0",
  authDomain: "nkakademo.firebaseapp.com",
  databaseURL: "https://nkakademo.firebaseio.com",
  projectId: "nkakademo",
  storageBucket: "nkakademo.appspot.com",
  messagingSenderId: "241759851871",
  appId: "1:241759851871:web:fac83ab18bb680e17e12ea",
  measurementId: "G-9K3KCFDVQJ"
}

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    routingComponents, 
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule,
    FormsModule,
    CustomFormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    UserService,
    AdminAuthGuardService,
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
