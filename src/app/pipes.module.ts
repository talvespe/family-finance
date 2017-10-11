import {NgModule} from "@angular/core";
import {WalletBalancePipe} from "../pipes/wallet-balance-pipe";

@NgModule({
    declarations: [
        WalletBalancePipe
    ],
    imports: [],
    exports: [
        WalletBalancePipe
    ]

})
export class PipesModule {
}
