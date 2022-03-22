import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppareilComponent } from './components/appareil/appareil.component';

import { AppareilService } from './services/appareil.service';
import { AuthComponent } from './components/auth/auth.component';
import { AppareilViewComponent } from './components/appareil-view/appareil-view.component';
import { AuthService } from './services/auth.service';
import { SingleAppareilComponent } from './components/single-appareil/single-appareil.component';
import { FourOhFourComponent } from './components/four-oh-four/four-oh-four.component';
import { AuthGuardService } from './services/auth-guard.service';
import { EditAppareilComponent } from './components/edit-appareil/edit-appareil.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserService } from './services/user.service';
import { NewUserComponent } from './components/new-user/new-user.component';

@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent,
    EditAppareilComponent,
    UserListComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    //RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppareilService,
    AuthService,
    AuthGuardService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
