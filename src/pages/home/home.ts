import {Component} from '@angular/core';
import {App, IonicPage, ModalController, NavController} from 'ionic-angular';
import {WALLETS} from "../../mock/wallets";
import {Wallet} from "../../model/wallet";
import {WalletUtil} from "../../util/wallet-util";

@IonicPage()
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class Home {


    wallets: Array<any> = WALLETS;
    currentWallet: Wallet;
    lastWallet: Wallet;

    constructor(public navCtrl: NavController, public app: App, public modalCtrl: ModalController) {
        this.currentWallet = WalletUtil.getCurrentWallet(this.wallets);
        this.lastWallet = WalletUtil.getLastWallet(this.currentWallet, this.wallets);
    }

    settings() {
        const settingsModal = this.modalCtrl.create("Settings");
        settingsModal.present()
    }

    processCurrentBalance() {
        if (this.currentWallet != null) {
            return WalletUtil.getBalance(this.currentWallet, this.wallets);
        }
    }

    processLastBalance() {
        if (this.lastWallet != null) {
            return WalletUtil.getBalance(this.lastWallet, this.wallets);
        }
    }
}
