import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase';
import {AngularFireAuth} from "angularfire2/auth";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  user: Observable<firebase.User>;
  constructor(public afAuth: AngularFireAuth) {
    this.user = this.afAuth.authState;
    console.log(this.user);
  }

  ngOnInit() {
  }

}
