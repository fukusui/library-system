import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';

import { SearchAuthorComponent } from './component/search-author/search-author.component';
import { SearchGenreComponent } from './component/search-genre/search-genre.component';

import { BookPageComponent } from './pages/book-page/book-page.component';
import { UserRoutingModule } from './user.routing';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [HomeComponent, SearchAuthorComponent, SearchGenreComponent, BookPageComponent],
  imports: [
    CommonModule,
    FormsModule,
		ReactiveFormsModule,
    SharedModule,
    UserRoutingModule
  ]
})
export class UserModule { }
