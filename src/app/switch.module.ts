import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { SwitchComponent } from './switch.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ SwitchComponent ],
  bootstrap:    [ SwitchComponent ]
})
export class SwitchModule { }
