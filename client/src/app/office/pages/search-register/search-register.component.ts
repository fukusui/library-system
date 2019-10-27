import { Component, Input } from '@angular/core';
import { BookService } from '../../../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-register',
  templateUrl: './search-register.component.html',
  styleUrls: ['./search-register.component.sass']
})
export class SearchRegisterComponent {
  @Input() books;
  constructor(private book: BookService, private router: Router) { }

  getBooks(evt) {
    this.books = evt;
  }

  selectBook(evt) {
    this.router.navigateByUrl('/office/create-instance');
  }

}
