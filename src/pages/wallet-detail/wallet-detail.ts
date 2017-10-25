import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavParams, Slides} from "ionic-angular";
import {Wallet} from "../../model/wallet";
import {User} from "../../model/user";
import {Entry} from "../../model/entry";
import {AngularFirestore} from "angularfire2/firestore";
import {MonthEnum} from "../../model/month-enum";

@IonicPage()
@Component({
    templateUrl: 'wallet-detail.html',
    selector: 'page-wallet-detail'
})
export class WalletDetail {

    @ViewChild('mySlider')
    slider: Slides;

    wallets: Array<Wallet>;
    currentWallet: Wallet;
    currentUser: User;
    entries: Array<Entry>;

    selectedSegment: string = "0";

    constructor(private navParams: NavParams, public afs: AngularFirestore) {
        this.currentUser = navParams.get("currentUser");
        this.currentWallet = navParams.get("currentWallet");
        this.wallets = navParams.get("wallets");

        this.selectedSegment = this.currentWallet.month.toString();
    }


    getMonth(month: number) {
        return MonthEnum[month];
    }

    onSegmentChanged(segmentButton) {
        this.slider._slides.forEach((item, index) => {
            if (item.id == segmentButton.value) {
                this.slider.slideTo(index);
            }
        });

    }

    onSlideChanged(slider) {
        this.selectedSegment = slider._slides[this.slider.realIndex].id;
    }


}
