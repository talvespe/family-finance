import {Component} from '@angular/core';
import {App, IonicPage, NavController, ViewController} from 'ionic-angular';
import {Wallet} from "../../model/wallet";
import {WalletUtil} from "../../util/wallet-util";
import {WALLETS} from "../../mock/wallets";

@IonicPage()
@Component({
    selector: 'page-finance-entry',
    templateUrl: 'finance-entry.html'
})
export class FinanceEntry {


    wallets: Array<any> = WALLETS;
    currentWallet: Wallet;

    constructor(public navCtrl: NavController, public app: App, public viewController: ViewController) {
        this.currentWallet = WalletUtil.getCurrentWallet(this.wallets);
    }

    save() {
        this.viewController.dismiss();
    }
}
