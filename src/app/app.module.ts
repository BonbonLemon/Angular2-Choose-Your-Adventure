import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AdventureComponent } from './adventures/adventure.component';

import { AdventureService } from './adventures/adventure.service';

import { AppRoutingModule } from './app-routing.module';
import { AdventureRoutingModule } from './adventures/adventure-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AdventureComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AdventureRoutingModule
  ],
  providers: [AdventureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
