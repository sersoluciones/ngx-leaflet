import { Component, Injector } from '@angular/core';
import { BaseView } from './base/base-view';
import * as examples from './app.examples';
import { PrefersColorSchemeService } from '@sersol/ngx';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseView {

    examples = examples;

    constructor(protected injectorObj: Injector, public colorScheme: PrefersColorSchemeService) {
        super(injectorObj);
    }

    init() {

        console.log('%cPowered by SER', 'color: white;background-color: #653182;padding: 8px; border-radius: 4px;margin: 8px 0;');
        console.log('https://www.sersoluciones.com/');
        console.log('%c📟 DEBUG MODE ENABLED', 'color: limegreen;border: 1px solid limegreen;padding: 8px; border-radius: 4px;margin: 8px 0;');
    }

    afterInit() {
        super.afterInit();
    }
}
