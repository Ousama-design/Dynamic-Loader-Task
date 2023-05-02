import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ComponentA } from './component-a/component-a.component';
import { ComponentB } from './component-b/component-b.component';
import { NewComponent } from './new/new.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentA,
    ComponentB,
    NewComponent
  ],
  entryComponents: [ComponentA,ComponentB],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
