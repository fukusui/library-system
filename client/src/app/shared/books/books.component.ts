import { Component, EventEmitter, Input, Output, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../../book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.sass']
})
export class BooksComponent implements OnChanges {
  @Input() books;
  @Output() bookEvent = new EventEmitter();
  constructor(private book: BookService, private router: Router) {}

  ngOnChanges() {
    for(let book of this.books) {
      for(let author of book.author) {
        this.book.searchAuthor({_id: author}).subscribe(data => {
          book.authorName = data;
        });}}
  }

  selectBook(book) {
    this.book.selected = book;
    this.bookEvent.emit();
  }

}
