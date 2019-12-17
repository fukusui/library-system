import { Component } from '@angular/core';
import { Router } from '@angular/router';

const links = [
  { name: "Add Data", url: "/office/create-data"},
  { name: "Add Book", url: "/office/create-book"},
  { name: "CheckInOut", url: "/office/checkinout"},
]

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  officeLinks = links;
  constructor(private router: Router) {}
}
