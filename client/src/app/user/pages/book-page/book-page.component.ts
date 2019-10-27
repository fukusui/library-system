import { Component, Input, OnInit } from '@angular/core';
import { BookService } from '../../../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.sass']
})
export class BookPageComponent implements OnInit {
  @Input() bookData;
  constructor(private book: BookService, private router: Router) {
    if(!this.book.selected) {
      this.router.navigateByUrl('/');
    }
  }

  ngOnInit() {
    this.bookData = this.book.selected;
  }
}
