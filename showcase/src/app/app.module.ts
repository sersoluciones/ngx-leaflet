import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeEs from '@angular/common/locales/es-CO';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { SerUiModule } from '@sersol/ngx';

registerLocaleData(localeEs, 'es-CO');

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SerUiModule,
        HttpClientModule,
        HighlightModule,
        SharedModule
    ],
    providers: [
        { provide: LOCALE_ID, useValue: 'es-CO' },
        {
            provide: HIGHLIGHT_OPTIONS,
            useValue: {
              coreLibraryLoader: () => import('highlight.js/lib/core'),
              lineNumbersLoader: () => import('highlightjs-line-numbers.js'), // Optional, only if you want the line numbers
              languages: {
                typescript: () => import('highlight.js/lib/languages/typescript'),
                css: () => import('highlight.js/lib/languages/css'),
                xml: () => import('highlight.js/lib/languages/xml')
              }
            }
          }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
