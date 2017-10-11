import {Component} from '@angular/core';
import {App, IonicPage, NavController} from 'ionic-angular';
import {Wallet} from "../../model/wallet";
import {WalletUtil} from "../../util/wallet-util";
import {WALLETS} from "../../mock/wallets";

@IonicPage()
@Component({
    selector: 'page-finance-list',
    templateUrl: 'finance-list.html'
})
export class FinanceList {


    wallets: Array<any> = WALLETS;
    currentWallet: Wallet;

    constructor(public navCtrl: NavController, public app: App) {
        this.currentWallet = WalletUtil.getCurrentWallet(this.wallets);
    }

    processCurrentBalance() {
        if (this.currentWallet != null) {
            return WalletUtil.getBalance(this.currentWallet, this.wallets);
        }
    }
}
