import {Component, OnDestroy, OnInit} from '@angular/core';
import {firebaseui} from "firebaseui-angular";
import {Auth} from "@angular/fire/auth";
import {firebaseUiAuthConfig} from "../../config/firebase-ui-config";
import {LoginService} from "../../services/login.service";
import {Observable} from "rxjs";
import {User} from "../../models/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  uiConfig!: firebaseui.auth.Config;
  authUi!: firebaseui.auth.AuthUI;
  loggedUser$: Observable<User>;

  constructor(
      private auth: Auth,
      private loginService: LoginService) {
    this.loggedUser$ = loginService.loggedUser$;
  }

  ngOnInit() {
    this.uiConfig = {
      ...firebaseUiAuthConfig,
      callbacks: {
        signInSuccessWithAuthResult: this.onLoginSuccessful.bind(this)
      }
    };
    this.authUi = new firebaseui.auth.AuthUI(this.auth);
    this.loginService.loggedUser$.subscribe(console.log);
    if (this.authUi.isPendingRedirect()) {
      this.onSignIn();
    }
  }

  ngOnDestroy() {
    this.authUi.delete();
  }

  onSignIn() {
    console.log(this.authUi.isPendingRedirect());
    console.log(this.auth.currentUser);
    this.authUi.start('#firebaseui-auth-container', this.uiConfig);
  }

  onLoginSuccessful(result: any) {
    console.log(result)
    this.loginService.loggedUser$.next({
      id: result.user.uid,
      nickname: result.user.displayName,
      email: result.user.email,
      avatar: result.user.photoURL
    });
    return false;
  }

}
