import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AgmComponent } from './agm/agm.component';
import { AgmCoreModule } from '@agm/core';
import { AgmWithSearchComponent } from './agm-with-search/agm-with-search.component';

@NgModule({
  declarations: [
    AppComponent,
    AgmComponent,
    AgmWithSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      // apiKey: 'PASTE YOUR GOOGLE MAP API KEY HERE'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
