import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {
  authState = null;
  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  logInWithEmail(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user;
        this.router.navigate(['/']);
      })
      .catch(error => console.log(error));
  }

  signOut() {
    this.afAuth.auth.signOut();
    this.router.navigate(['/']);
  }

}
