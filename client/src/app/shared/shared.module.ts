import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchTitleComponent } from './search-title/search-title.component';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './book/book.component';

@NgModule({
  declarations: [SearchTitleComponent, BooksComponent, BookComponent],
  imports: [
    CommonModule,
    FormsModule,
		ReactiveFormsModule,
  ],
  exports: [
    SearchTitleComponent, BookComponent, BooksComponent
  ]
})
export class SharedModule { }
