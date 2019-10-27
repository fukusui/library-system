import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../../../book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']

})
export class HomeComponent {
  @Input() books;
  constructor(private book: BookService, private router: Router) {}

  getBooks(evt) {
    this.books = evt;
  }

  selectBook(evt) {
    this.router.navigateByUrl('book');
  }

}
