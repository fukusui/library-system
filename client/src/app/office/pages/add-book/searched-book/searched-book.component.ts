import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BookInfoService } from '../../../bookInfo.service';
import { OfficeService } from '../../../office.service';

@Component({
  selector: 'searched-book',
  templateUrl: './searched-book.component.html',
  styleUrls: ['./searched-book.component.sass']
})
export class SearchedBookComponent implements OnInit {
  @Input() bookData;
  @Input() authors;
  book;
  savedBook;


  constructor(private router: Router, private bookInfo: BookInfoService, private office: OfficeService) { }

  ngOnInit() {
    let bookInfo = this.bookData.volumeInfo;
    if(bookInfo.industryIdentifiers[0].identifier){
      this.book = this.bookInfo.sort(bookInfo);
      this.authors = this.book.savedAuthors;
    } else {
      this.book = null;
    }
  }

  saveBook () {
    this.office.saveBook(this.bookInfo.data).subscribe(data => {
      this.router.navigateByUrl('office/search-book');
    });
  }

}
