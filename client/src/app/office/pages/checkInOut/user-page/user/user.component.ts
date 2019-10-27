import { Component, EventEmitter, Input, OnChanges,
  Output} from '@angular/core';
import { BookCheckOutService } from '../bookCheckOut.service';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnChanges {
  @Input() user;
  @Output() returnEvent = new EventEmitter();
  constructor(private bookCheckOut: BookCheckOutService) { }

  ngOnChanges() {
    if(this.user.due_books.length > 0) {
      this.bookCheckOut.getBooks(this.user);
    }
  }

  returnBook(book) {
    let bookInstance = book.instance;
    this.returnEvent.emit(bookInstance);
  }
}
