import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {
  NbAuthComponent,
  NbLoginComponent,
  NbRegisterComponent,
  NbLogoutComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';
import {ProfileComponent} from "./pages/profile/profile.component";
import {DrinkDetailsComponent} from "./pages/drink-details/drink-details.component";
import {UserGroupsComponent} from "./pages/user-groups/user-groups.component";
import {UserEventsComponent} from "./pages/user-events/user-events.component";

const routes: Routes = [

  {path: '', component: MainComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'drink-details/:id', component: DrinkDetailsComponent},
  {path: 'groups', component: UserGroupsComponent},
  {path: 'events', component: UserEventsComponent},

  //Auth routes
  {
    path: 'auth',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        component: NbLoginComponent,
      },
      {
        path: 'login',
        component: NbLoginComponent,
      },
      {
        path: 'register',
        component: NbRegisterComponent,
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      },
      {
        path: 'request-password',
        component: NbRequestPasswordComponent,
      },
      {
        path: 'reset-password',
        component: NbResetPasswordComponent,
      },
    ],
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
