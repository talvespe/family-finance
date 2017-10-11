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
        this.wallets.sort((wallet1, wallet2) => {
            if(wallet1.year < wallet2.year){
                return 1;
            }

            if(wallet1.year == wallet2.year && wallet1.month < wallet2.month ){
                return 1;
            }

            if(wallet1.year > wallet2.year){
                return -1;
            }

            if(wallet1.year == wallet2.year && wallet1.month > wallet2.month ){
                return -1;
            }

            return 0;
        });

    }

    getMonth(month: number) {
        return MonthEnum[month];
    }

    proccessBalance(wallet: Wallet) {
        return WalletUtil.getBalance(wallet, this.wallets);
    }

    walletDetail() {
        const walletDetailModal = this.modalCtrl.create("WalletDetail");
        let ww: Wallet = {
            year: 205,
            month: 5,
            entries: new Array()
        };
        walletDetailModal.present();
    }
}
