import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  user: any = null;

  constructor(public auth: AngularFireAuth, private zone: NgZone) {
    this.auth.onAuthStateChanged(
      (user) => {
        this.zone.run(
          () => {
            this.user = user;
          }
        )
      }
    )
  }

  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.auth.signOut();
  }

}
