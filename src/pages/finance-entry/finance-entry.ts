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
        value: null,
        entryFixed: null,
        category: null,
        name: '',
        date: new Date()
    };

    constructor(public navCtrl: NavController, private navParams: NavParams, public viewController: ViewController, public afs: AngularFirestore) {
        this.plus = this.navParams.get('plus');
        this.currentUser = navParams.get("currentUser");
        this.currentWallet = navParams.get("currentWallet");

        console.log("user > " +JSON.stringify(this.currentUser));
        console.log("entry > " +JSON.stringify(this.currentWallet));


        let walletDoc: AngularFirestoreDocument<Wallet> = this.afs.doc<Wallet>(`/users/${this.currentUser.id}/wallets/${this.currentWallet.id}`);
        this.entryCollection = walletDoc.collection<Entry>('entries');
        this.entryCollection.valueChanges().subscribe(entries =>{
           console.log(entries);
        });
    }

    save() {
        if (this.plus) {
            this.entry.value = Math.abs(this.entry.value);
        } else {
            this.entry.value = -Math.abs(this.entry.value);
        }
        console.log( this.entry);
        this.entryCollection.add(this.entry).then(ref => {
            this.viewController.dismiss();
        });
    }
}
