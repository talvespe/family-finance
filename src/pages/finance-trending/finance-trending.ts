import {Component} from '@angular/core';
import {IonicPage, ModalController, NavController} from 'ionic-angular';
import {Wallet} from "../../model/wallet";
import {WALLETS} from "../../mock/wallets";
import {MonthEnum} from "../../model/month-enum";

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

    getBallance(wallet: Wallet) {
        let total: number = this.getWalletBalance(wallet);
        let lastWallet: Wallet = this.wallets.filter((walletFilter) => {
            let mesAnterior: number;
            let anoAnterior: number;
            if (wallet.mes == 1) {
                mesAnterior = 12;
                anoAnterior = wallet.ano - 1;
            } else {
                mesAnterior = wallet.mes - 1;
                anoAnterior = wallet.ano;
            }
            return walletFilter.ano == anoAnterior && walletFilter.mes == mesAnterior;
        })[0];

        if (lastWallet != null) {
            total = total + this.getBallance(lastWallet);
            console.log(wallet.ano + " - " + wallet.mes + "=" + total);
        }

        return total;
    }


    getWalletBalance(wallet: Wallet) {
        let total: number = 0;

        for (let entry of wallet.entries) {
            if (entry.plus) {
                total = total + entry.value;
            } else {
                total = total - entry.value;
            }
        }

        return total;
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
