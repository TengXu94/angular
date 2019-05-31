import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  constructor(private authService : AuthService){}  
  ngOnInit() {
    this.authService.autologin();
    firebase.initializeApp({
      apiKey: "AIzaSyA6zGHF9FMsV6Cg6IovFIzuP1KNTwaejVA",
      authDomain: "https://udemy-xu-http.firebaseio.com"
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
