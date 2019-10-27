import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { OfficeService } from '../../office.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  credentials ;

  constructor(private router: Router, private formBuilder: FormBuilder, private office: OfficeService) {
    this.credentials = this.formBuilder.group({
      email: '',
      password:''
    });
  }

	onSubmit() {
    this.office.login(this.credentials.value).subscribe(() => {
      window.location.reload();
      // this.router.navigateByUrl('office', {
			// 	skipLocationChange: true }).then(() => {
    	// this.router.navigate(['office']);
			// });
    }, (err) => {
      console.error(err);
    });
  }
}
