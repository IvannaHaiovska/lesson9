import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';

import { TextBlockComponent } from './block/text-block/text-block.component';
import { ButtonBlockComponent } from './block/button-block/button-block.component';
import { StyleBlockComponent } from './block/style-block/style-block.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SafeHtmlPipe } from './shared/pipe/safe-html.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TextBlockComponent,
    ButtonBlockComponent,
    StyleBlockComponent,
    SafeHtmlPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
