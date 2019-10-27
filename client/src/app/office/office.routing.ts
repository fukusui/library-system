import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddBookComponent, SearchUserPageComponent, CreateInstanceComponent, LoginComponent, OfficeHomeComponent, SearchBookComponent, SearchRegisterComponent, UserPageComponent} from './pages';

import { OfficeGuard } from './auth/office.guard';
import { OfficeNonGuard } from './auth/office.non-guard';

export const routes:Routes = [
  {
    path: 'office/login',
    component: LoginComponent,
    canActivate: [OfficeNonGuard]
  },
  { path: 'office', component: OfficeHomeComponent,
    canActivateChild: [OfficeGuard],
    children: [
      { path: '', component: HomeComponent },
      { path: 'search-book', component: SearchBookComponent },
      { path: 'add-book', component: AddBookComponent },
      { path: 'search-registered', component: SearchRegisterComponent },
      { path: 'create-instance', component: CreateInstanceComponent },
      { path: 'checkout', component: SearchUserPageComponent },
      { path: 'user', component: UserPageComponent }
    ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class OfficeRoutingModule {}
