import {NgModule} from "@angular/core";
import {WalletBalancePipe} from "../pipes/wallet-balance-pipe";
import {CurrencyFormatPipe} from "../pipes/currency-format-pipe";

@NgModule({
    declarations: [
        WalletBalancePipe,
        CurrencyFormatPipe
    ],
    imports: [],
    exports: [
        WalletBalancePipe,
        CurrencyFormatPipe
    ]

})
export class PipesModule {
}
