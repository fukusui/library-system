import { Component, Input } from '@angular/core';
import { BookInfoService } from '../../../bookInfo.service';

@Component({
  selector: 'search-author',
  templateUrl: './search-author.component.html',
  styleUrls: ['./search-author.component.sass']
})
export class SearchAuthorComponent {
  @Input()authors;

  constructor(private bookInfo: BookInfoService) { }

  replace(author) {
    this.bookInfo.data.authors.splice(this.bookInfo.data.authors.indexOf(author), 1);
    this.bookInfo.data.authors.push(author);
    this.authors.splice(this.authors.indexOf(author), 1);
  }

}
