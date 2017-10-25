import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {WalletDetail} from "./wallet-detail";
import {PipesModule} from "../../app/pipes.module";
import {DirectivesModule} from "../../app/directives.module";

@NgModule({
    declarations: [
        WalletDetail,
    ],
    imports: [
        IonicPageModule.forChild(WalletDetail),
        PipesModule,
        DirectivesModule
    ],
    exports: [
        WalletDetail
    ]
})
export class WalletDetailModule {
}
