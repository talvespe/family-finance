import {Component} from '@angular/core';
import {IonicPage, ModalController, NavController} from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-finance-trending',
    templateUrl: 'finance-trending.html'
})
export class FinanceTrending {

    constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    }

    walletDetail() {
        const walletDetailModal = this.modalCtrl.create("WalletDetail");
        walletDetailModal.present();
    }
}
