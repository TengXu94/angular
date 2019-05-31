import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { CoreModule } from './core/core.module';

import {StoreModule} from '@ngrx/store';
import * as fromApp from './store/app.store'
import { AuthComponent } from './auth/auth.component';
import { FormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { AlertComponent } from './shared/alert/alert.component';
import { AuthModule } from './auth/auth.module';
@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AuthModule,
    AppRoutingModule,
    SharedModule,
    StoreModule.forRoot(fromApp.AppReducer),
    ShoppingListModule,
    CoreModule,
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
