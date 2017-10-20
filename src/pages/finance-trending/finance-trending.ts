import {Component} from '@angular/core';
import {IonicPage, ModalController, NavController} from 'ionic-angular';
import {Wallet} from "../../model/wallet";
import {MonthEnum} from "../../model/month-enum";
import {User} from "../../model/user";
import {CommonConstants} from "../../constants/CommonConstants";
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "angularfire2/firestore";
import {Storage} from "@ionic/storage";
import {WalletUtil} from "../../util/wallet-util";

@IonicPage()
@Component({
    selector: 'page-finance-trending',
    templateUrl: 'finance-trending.html'
})
export class FinanceTrending {
    private userDoc: AngularFirestoreDocument<User>;

    private walletsCollection: AngularFirestoreCollection<Wallet>;
    // wallets: Observable<any[]>;

    wallets: Array<Wallet> = new Array<Wallet>();
    currentUser: User;

    constructor(public navCtrl: NavController, public modalCtrl: ModalController, private storage: Storage, public afs: AngularFirestore) {
        storage.get(CommonConstants.CURRENT_USER).then(user => {
            this.currentUser = user;
            console.log("currentUser = " + this.currentUser.name);


            this.userDoc = this.afs.doc<User>("/users/" + user.id);
            this.walletsCollection = this.userDoc.collection<Wallet>('wallets');
            this.walletsCollection.snapshotChanges().map(actions => {
                return actions.map(w => {
                    const wallet = w.payload.doc.data() as Wallet;
                    const id = w.payload.doc.id;
                    wallet.id = id;
                    this.wallets.push(wallet);
                });
            }).subscribe(wallet => {
                this.sortWallet();
            });
        });


    }

    sortWallet() {
        this.wallets.sort((wallet1, wallet2) => {
            if (wallet1.year < wallet2.year) {
                return 1;
            }

            if (wallet1.year == wallet2.year && wallet1.month < wallet2.month) {
                return 1;
            }

            if (wallet1.year > wallet2.year) {
                return -1;
            }

            if (wallet1.year == wallet2.year && wallet1.month > wallet2.month) {
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
        walletDetailModal.present();
    }
}
