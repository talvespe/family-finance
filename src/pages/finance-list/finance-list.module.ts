import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {FinanceList} from "./finance-list";
import {PipesModule} from "../../app/pipes.module";
import {DirectivesModule} from "../../app/directives.module";

@NgModule({
    declarations: [
        FinanceList,
    ],
    imports: [
        IonicPageModule.forChild(FinanceList),
        PipesModule,
        DirectivesModule
    ],
    exports: [
        FinanceList
    ]
})
export class FinanceListModule {
}
