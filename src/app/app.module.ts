import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { OfficeModule } from './office/office.module';
import { SharedModule } from './shared/shared.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    OfficeModule,
    SharedModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
  providers: [
		// {
    // 	provide: HTTP_INTERCEPTORS,
    //  	useClass: HttpErrorInterceptor,
    //  	multi: true
   	// }
  ]
})
export class AppModule { }
