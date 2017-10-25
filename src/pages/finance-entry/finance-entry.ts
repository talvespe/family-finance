import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {Wallet} from "../../model/wallet";
import {User} from "../../model/user";
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "angularfire2/firestore";
import {Entry} from "../../model/entry";

@IonicPage()
@Component({
    selector: 'page-finance-entry',
    templateUrl: 'finance-entry.html'
})
export class FinanceEntry {

    currentWallet: Wallet;
    currentUser: User;
    plus: boolean;
    private entryCollection: AngularFirestoreCollection<Entry>;


    entry: Entry = {
        value: 0,
        entryFixed: null,
        category: null,
        user: this.currentUser,
        name: '',
        date: new Date()
    };

    constructor(public navCtrl: NavController, private navParams: NavParams, public viewController: ViewController, public afs: AngularFirestore) {
        this.plus = this.navParams.get('plus');
        this.currentUser = navParams.get("currentUser");
        this.currentWallet = navParams.get("currentWallet");


        let walletDoc: AngularFirestoreDocument<Wallet> = this.afs.doc<Wallet>(`/users/${this.currentUser.id}/wallets/${this.currentWallet.id}`);
        this.entryCollection = walletDoc.collection<Entry>('entries');
    }

    save() {
        if (this.plus) {
            this.entry.value = Math.abs(this.entry.value);
        } else {
            this.entry.value = -Math.abs(this.entry.value);
        }

        this.entryCollection.add(this.entry).then(ref => {
            this.viewController.dismiss();
        });
    }
}
