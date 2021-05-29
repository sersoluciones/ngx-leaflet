import { Component } from '@angular/core';
import { LeafletMap } from '../../../../src/main/map';
import { BaseView } from '../base/base-view';
import * as examples from './examples';

@Component({
    selector: 'showcase-basic',
    templateUrl: './basic.component.html',
    styleUrls: ['./basic.component.scss']
})
export class BasicComponent extends BaseView {

    examples = examples;
    leafletInstance: LeafletMap;

    afterInit() {
        super.afterInit();

        this.leafletInstance = new LeafletMap({
            container: 'map'
        });
    }

}
