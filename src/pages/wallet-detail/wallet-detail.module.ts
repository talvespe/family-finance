import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {WalletDetail} from "./wallet-detail";

@NgModule({
    declarations: [
        WalletDetail,
    ],
    imports: [
        IonicPageModule.forChild(WalletDetail)
    ],
    exports: [
        WalletDetail
    ]
})
export class WalletDetailModule {
}
