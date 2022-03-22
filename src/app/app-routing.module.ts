import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppareilViewComponent } from './components/appareil-view/appareil-view.component';
import { AuthComponent } from './components/auth/auth.component';
import { EditAppareilComponent } from './components/edit-appareil/edit-appareil.component';
import { FourOhFourComponent } from './components/four-oh-four/four-oh-four.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { AuthGuardService } from './services/auth-guard.service';
import { SingleAppareilComponent } from './components/single-appareil/single-appareil.component';
import { UserListComponent } from './components/user-list/user-list.component';

const routes: Routes = [
  { path: 'appareils', component: AppareilViewComponent, canActivate: [AuthGuardService] },
  { path: 'appareils/:id', component: SingleAppareilComponent, canActivate: [AuthGuardService] },
  { path: 'edit', component: EditAppareilComponent, canActivate: [AuthGuardService] },
  { path: 'auth', component: AuthComponent },
  { path: 'users', component: UserListComponent },
  { path: 'new-user', component: NewUserComponent },
  { path: '', component: AppareilViewComponent, canActivate: [AuthGuardService] },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
