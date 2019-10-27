import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../../../book.service';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.sass']
})
export class SearchBookComponent {
  bookForm;
  books;

  constructor(private formBuilder: FormBuilder, private router: Router,   private book: BookService) {
    this.bookForm = this.formBuilder.group({
      title: '',
      author:''
    });
  }

  onSubmit() {
    let searchData = this.bookForm.value.title + '+inauthor:'+this.bookForm.value.author;
    this.book.search(searchData).subscribe(data => {
      this.books = data.items;
      });
  }

  selectBook(book) {
    this.book.selected = book;
    this.router.navigateByUrl('office/add-book');
  }

}
