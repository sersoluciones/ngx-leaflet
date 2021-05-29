import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SerUiModule } from '@sersol/ngx';


const modules = [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HighlightModule,
    SerUiModule
];

@NgModule({
    declarations: [],
    imports: modules,
    exports: modules
})
export class SharedModule { }
