import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {FinanceTrending} from "./finance-trending";
import {PipesModule} from "../../app/pipes.module";

@NgModule({
    declarations: [
        FinanceTrending,
    ],
    imports: [
        IonicPageModule.forChild(FinanceTrending),
        PipesModule
    ],
    exports: [
        FinanceTrending
    ]
})
export class FinanceTrendingModule {
}
