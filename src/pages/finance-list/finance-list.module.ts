import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {FinanceList} from "./finance-list";

@NgModule({
    declarations: [
        FinanceList,
    ],
    imports: [
        IonicPageModule.forChild(FinanceList),
    ],
    exports: [
        FinanceList
    ]
})
export class FinanceListModule {
}
