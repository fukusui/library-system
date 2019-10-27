import { Injectable } from '@angular/core';
import { BookService } from '../../../../book.service';
import { OfficeService } from '../../../office.service';

@Injectable()
export class BookCheckOutService {

  constructor(private book: BookService,
    private office: OfficeService) {}

  getBooks(user) {
    user.books = [];
    for (let id of user.due_books) {
      this.book.instanceId(id).subscribe(bookInstance => {
        this.book.getById(bookInstance.book).subscribe(book => {
          let bookInfo = {book: book, instance: bookInstance};
          user.books.push(bookInfo);
        });});}}
}
