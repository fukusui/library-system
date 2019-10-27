import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../../../book.service';
import { OfficeService } from '../../office.service';
import { BookInfoService } from '../../bookInfo.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.sass']
})
export class AddBookComponent {
  @Input() bookData;

  constructor(private book: BookService, private bookInfo: BookInfoService, private office: OfficeService,
    private router: Router) {
    if(!this.book.selected) {
      this.router.navigateByUrl('office/search-book');
    }else {
      this.bookData = this.book.selected;
    }
  }
}
