import {Component} from '@angular/core';
import {App, IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
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
    plus:boolean;

    constructor(public navCtrl: NavController, private navParams: NavParams, public viewController: ViewController) {
        this.currentWallet = WalletUtil.getCurrentWallet(this.wallets);
        this.plus = this.navParams.get('plus');
    }

    save() {
        this.viewController.dismiss();
    }
}
