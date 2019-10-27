import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../../../../book.service';
import { OfficeService } from '../../../office.service';
import { BookCheckOutService } from './bookCheckOut.service';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.sass'],
  providers: [BookCheckOutService]
})
export class UserPageComponent implements OnInit {
  books;
  bookData;
  user;

  constructor(private office: OfficeService, private router: Router,
    private book: BookService, private bookCheckOut: BookCheckOutService) {
    if(!this.office.selected) {
      this.router.navigateByUrl('office/checkout');
    }
  }

  ngOnInit() {
    this.user = this.office.selected;
  }

  getBooks(evt) {
    this.books = evt;
  }

  selectBook(evt) {
    this.books = [];
    this.bookData = this.book.selected;
    this.bookData.checkout = true;
  }

  selectInstance(book) {
    let today = new Date();
    let newDate = new Date();
    newDate.setDate(today.getDate()+12);
    let updateData = {id: book._id, availability: "lent",
      due_date: newDate,
      current_barrower: this.user._id,
      past_barrower: this.user._id
    };
    let updateUser = {id: this.user._id, instanceId: book._id};
    this.office.instanceCheckout(updateData).subscribe(data => {
      this.office.userCheckout(updateUser).subscribe(data => {
        this.user = data;
        delete this.bookData;
      });
    });
  }

  returnBook(bookInstance) {
    let returnData = {id: bookInstance._id, availability: "available"};
    let returnUser = {id: this.user._id, due_books: bookInstance._id};
    this.office.instanceReturn(returnData).subscribe(data => {
      this.office.userReturn(returnUser).subscribe(user => {
        this.user = user;
      });
    });
  }
}
