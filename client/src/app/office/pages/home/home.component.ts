import { Component, OnInit } from '@angular/core';
import { OfficeService } from '../../office.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(private office: OfficeService) { }

  ngOnInit() {
		this.office.profile().subscribe(admin => {
    }, (err) => {
      console.error(err);
    });
  }

  logout() {
    this.office.logout();
  }

}
