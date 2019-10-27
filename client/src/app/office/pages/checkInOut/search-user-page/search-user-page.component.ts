import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { OfficeService } from '../../../office.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-user-page',
  templateUrl: './search-user-page.component.html',
  styleUrls: ['./search-user-page.component.sass']
})
export class SearchUserPageComponent {
  @Input() users;
  userForm;

  constructor(private office: OfficeService, private formBuilder: FormBuilder,
    private router: Router) {
      this.userForm = this.formBuilder.group({
        first: '',
        last:''
      });
  }

  onSubmit() {
    let user = ({name: {
      last: this.userForm.value.last,
      first: this.userForm.value.first}
    });
    this.office.searchUser(user).subscribe(data => {
      if(data.length>0){
        this.users = data;
      }
    });
  }
}
