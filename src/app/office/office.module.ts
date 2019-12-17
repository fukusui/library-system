import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OfficeRoutingModule } from './office.routing';
import { SearchDataComponent, CreateDataComponent, CreateBookComponent, HomeComponent, LoginComponent, OfficeHomeComponent, BookDataComponent, CheckAuthorComponent, CheckInOutComponent, UserComponent, UsersComponent, SearchUsersComponent } from './pages/index';

import { OfficeService } from './services/office.service';
import { BookDataService } from './services/bookData.service';
import { CheckInOutService } from './services/checkInOut.service';

import { OfficeGuard } from './guard/office.guard';
import { OfficeNonGuard } from './guard/office.non-guard';

import { SharedModule } from '../shared/shared.module';
import { ReturnButtonComponent } from './return-button/return-button.component';

@NgModule({
  declarations: [LoginComponent, HomeComponent, OfficeHomeComponent, CreateDataComponent, SearchDataComponent, BookDataComponent, CheckAuthorComponent, CreateBookComponent, CheckInOutComponent, UserComponent, UsersComponent, SearchUsersComponent, ReturnButtonComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OfficeRoutingModule,
    SharedModule,
  ],
  providers: [
    OfficeService,
    BookDataService,
    CheckInOutService,
		OfficeGuard,
		OfficeNonGuard
  ]
})
export class OfficeModule { }
