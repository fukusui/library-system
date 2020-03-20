import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { RootStoreModule } from './root-store.module';
// import { OfficeModule } from './office/office.module';
// import { CoreModule } from '@core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // CoreModule,
    HomeModule,
    // OfficeModule,
    AppRoutingModule,
    RootStoreModule
  ],
  bootstrap: [AppComponent],
  providers: [
  ]
})
export class AppModule { }
