import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../../../book.service';
import { OfficeService } from '../../office.service';

@Component({
  selector: 'app-create-instance',
  templateUrl: './create-instance.component.html',
  styleUrls: ['./create-instance.component.sass']
})
export class CreateInstanceComponent implements OnInit {
  @Input() bookData;
  instanceForm;

  constructor(private book: BookService, private formBuilder: FormBuilder, private office: OfficeService,
    private router: Router) {
      if(!this.book.selected) {
        this.router.navigateByUrl('office/search-registered');
      }
      this.instanceForm = this.formBuilder.group({
        quantity: '',
      });
  }

  ngOnInit() {
    this.bookData = this.book.selected;
  }

  onSubmit() {
    let bookInstance = {
      book: this.bookData._id,
      availability: "available"
    }
    for (let i = 0; i< this.instanceForm.value.quantity; i++) {
      this.office.saveInstance(bookInstance).subscribe(data => {
        console.log(data);
      });
    }
    this.router.navigateByUrl('office');
  }
}
