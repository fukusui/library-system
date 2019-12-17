import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckInOutComponent, CreateDataComponent, CreateBookComponent, HomeComponent, LoginComponent, OfficeHomeComponent } from './pages/index';

import { OfficeGuard } from './guard/office.guard';
import { OfficeNonGuard } from './guard/office.non-guard';

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
      { path: 'checkinout', component: CheckInOutComponent },
      { path: 'create-data', component: CreateDataComponent },
      { path: 'create-book', component: CreateBookComponent },
    ]
	}
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
