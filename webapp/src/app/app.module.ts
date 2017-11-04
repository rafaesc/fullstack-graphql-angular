import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';


import { CoreModule } from './@core/core.module';
import { CoreComponent } from './@core/core.component';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    BrowserModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [CoreComponent]
})
export class AppModule { }
