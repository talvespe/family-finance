import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {PipesModule} from "../../app/pipes.module";
import {DirectivesModule} from "../../app/directives.module";
import {FinanceEntry} from "./finance-entry";

@NgModule({
    declarations: [
        FinanceEntry,
    ],
    imports: [
        IonicPageModule.forChild(FinanceEntry),
        PipesModule,
        DirectivesModule
    ],
    exports: [
        FinanceEntry
    ]
})
export class FinanceEntryModule {
}
