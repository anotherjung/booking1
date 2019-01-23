import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'; //firestore
import { Observable } from 'rxjs'; //firestore bind a collection 

import { AuthService } from './auth.service'; //googlecal

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'booking1';

  items: Observable<any[]>; //firestore bind a collection
  // constructor(db: AngularFirestore) { //firestore
  //   this.items = db.collection('items').valueChanges(); //firestore bind a collection
  // }

  constructor(private auth: AuthService){}  //googlecal
  
}
