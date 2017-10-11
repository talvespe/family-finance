import {Component} from '@angular/core';
import {IonicPage, ModalController, NavController} from 'ionic-angular';
import {Wallet} from "../../model/wallet";
import {WALLETS} from "../../mock/wallets";
import {MonthEnum} from "../../model/month-enum";
import {WalletUtil} from "../../util/wallet-util";

@IonicPage()
@Component({
    selector: 'page-finance-trending',
    templateUrl: 'finance-trending.html'
})
export class FinanceTrending {

    wallets: Array<any> = WALLETS;

    constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    }

    getMonth(month: number) {
        return MonthEnum[month];
    }

    proccessBallance(wallet: Wallet) {
        return WalletUtil.getBallance(wallet, this.wallets);
    }

    walletDetail() {
        const walletDetailModal = this.modalCtrl.create("WalletDetail");
        let ww: Wallet = {
            ano: 205,
            mes: 5,
            entries: new Array()
        };
        walletDetailModal.present();
    }
}
