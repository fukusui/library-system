import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { OfficeService } from '../../../../office.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent {
  @Input() users;
  constructor(private office: OfficeService,
    private router: Router) { }

  selectUser(user) {
    this.office.selected = user;
    this.router.navigateByUrl('office/user');
  }
}
