import {Pipe, PipeTransform} from "@angular/core";
import {Wallet} from "../model/wallet";

@Pipe({
    name: 'walletBalance'
})
export class WalletBalancePipe implements PipeTransform {

    transform(value: Wallet, type: string): number {
        let total: number = 0

        // for (let entry of value.entries) {
        //     total = total + entry.value;
        // }

        return total;
    }

}
