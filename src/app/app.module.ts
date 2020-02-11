import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TareaModule } from './tarea/tarea.module';
import { WebService } from './service/webservice.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TareaModule
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
