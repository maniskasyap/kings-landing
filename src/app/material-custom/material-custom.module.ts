import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MdButtonModule, MdCheckboxModule, MdDatepickerModule, MdInputModule, MdNativeDateModule} from '@angular/material';

@NgModule({
  imports: [MdButtonModule, MdCheckboxModule, MdDatepickerModule, MdInputModule, MdNativeDateModule],
  exports: [MdButtonModule, MdCheckboxModule, MdDatepickerModule, MdInputModule, MdNativeDateModule]
})

export class MaterialCustomModule { }