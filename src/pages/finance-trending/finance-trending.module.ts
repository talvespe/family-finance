import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {FinanceTrending} from "./finance-trending";

@NgModule({
    declarations: [
        FinanceTrending,
    ],
    imports: [
        IonicPageModule.forChild(FinanceTrending),
    ],
    exports: [
        FinanceTrending
    ]
})
export class FinanceTrendingModule {
}
