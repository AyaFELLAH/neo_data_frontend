import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { ButtonComponent } from './button/button.component';
import { AddClientComponent } from './add-client/add-client.component';

@NgModule({
  declarations: [
    AppComponent
  
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ButtonComponent,
    ClientComponent,
    AddClientComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
