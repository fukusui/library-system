import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { OfficeRoutingModule } from './office.routing';
import { OfficeService } from './office.service';
import { OfficeGuard } from './auth/office.guard';
import { OfficeNonGuard } from './auth/office.non-guard';
import { BookService } from '../book.service';
import { BookInfoService } from './bookInfo.service';

import { HomeComponent, AddBookComponent, CreateInstanceComponent,
  LoginComponent, OfficeHomeComponent, SearchBookComponent,
  SearchUserPageComponent, SearchRegisterComponent, UserPageComponent, SearchedBookComponent, SearchAuthorComponent, UsersComponent,
  UserComponent} from './pages';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomeComponent, LoginComponent, SearchBookComponent, AddBookComponent, CreateInstanceComponent, SearchRegisterComponent, OfficeHomeComponent, SearchedBookComponent, SearchAuthorComponent, UsersComponent, SearchUserPageComponent, UserPageComponent, UserComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    OfficeRoutingModule
  ],
  providers: [OfficeService, BookService, BookInfoService, OfficeGuard, OfficeNonGuard]
})
export class OfficeModule { }
