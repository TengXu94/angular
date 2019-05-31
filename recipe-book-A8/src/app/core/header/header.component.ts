import { Component, OnInit, OnDestroy } from '@angular/core';
// import { HttpEvent, HttpEventType } from '@angular/common/http';

import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy{
  constructor(private dataStorageService: DataStorageService,
              private authService: AuthService) {
  }
  private userSub : Subscription;
  isAuthenticated = false;

  ngOnInit(){
    this.userSub = this.authService.user.subscribe( user => {
      this.isAuthenticated = !user ? false : true;
    });
  }

  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response) => {
          console.log(response);
        }
      );
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
  }
}
