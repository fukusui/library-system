import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OfficeService } from '../../services/office.service';

const headerLinks = [
  { name: "Add Data", url: "/office/create-data"},
  { name: "Add Book", url: "/office/create-book"},
  { name: "CheckInOut", url: "/office/checkinout"},
  { name: "Home", url: "/"}
]

@Component({
  selector: 'app-office-home',
  templateUrl: './office-home.component.html',
  styleUrls: ['./office-home.component.sass']
})
export class OfficeHomeComponent {
  links = headerLinks;
  constructor(private office: OfficeService, private router: Router) {
  }

  logout() {
    this.office.logout();
  }
}
