import { Component } from '@angular/core';
import { OfficeService } from '../../office.service';

@Component({
  selector: 'app-office-home',
  templateUrl: './office-home.component.html',
  styleUrls: ['./office-home.component.sass']
})
export class OfficeHomeComponent {

  constructor(private office: OfficeService) { }

  logout() {
    this.office.logout();
  }

}
