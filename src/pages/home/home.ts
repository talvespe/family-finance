import {Component, ViewChild} from '@angular/core';
import {App, FabContainer, IonicPage, ModalController, NavController} from 'ionic-angular';
import {WALLETS} from "../../mock/wallets";
import {Wallet} from "../../model/wallet";
import {WalletUtil} from "../../util/wallet-util";
import {AngularFirestore, AngularFirestoreDocument} from "angularfire2/firestore";
import {Storage} from "@ionic/storage";
import {CommonConstants} from "../../constants/CommonConstants";
import {User} from "../../model/user";
import {Entry} from "../../model/entry";

@IonicPage()
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class Home {

    @ViewChild('fabContainer')
    fabContainer: FabContainer;

    wallets: Array<any> = WALLETS;
    currentWallet: Wallet;
    currentUser: User;
    lastWallet: Wallet;

    constructor(public navCtrl: NavController, public app: App, public modalCtrl: ModalController, private storage: Storage, public afs: AngularFirestore) {

        storage.get(CommonConstants.CURRENT_USER).then(user => {
            this.currentUser = user;
            console.log("HOME = " + this.currentUser.name);

            const now = new Date();
            let userDoc = this.afs.doc<User>(`/users/${user.id}`);
            userDoc.valueChanges().subscribe(user =>{
                console.log(user.name);
            });
            const month = now.getMonth()+1;
            let walletsCollection = userDoc.collection<Wallet>('wallets');
            walletsCollection.snapshotChanges().map(actions => {
            // userDoc.collection<Wallet>('wallets', ref => ref.where("month", '==', month)).snapshotChanges().map(actions => {
                return actions.map(w => {
                    const wallet = w.payload.doc.data() as Wallet;
                    const walletId = w.payload.doc.id;
                    wallet.id = walletId;
                    let walletDoc: AngularFirestoreDocument<Wallet> = this.afs.doc<Wallet>(`/users/${user.id}/wallets/${walletId}`);

                    let total = 0;
                    walletDoc.collection<Entry>('entries').valueChanges().subscribe(entries => {
                        console.log(entries);
                        entries.forEach(entry => {
                            total = total + entry.value;
                            console.log(entry);

                        });
                        wallet.balance = total;
                        wallet.entries = entries;
                    });


                    this.currentWallet = wallet;
                });
            });

            // userDoc.collection<Wallet>('wallets', ref => ref.where("month", '==', 10)).snapshotChanges().map(actions => {
            //     return actions.map(w => {
            //         console.log(w);
            //         this.currentWallet = w.payload.doc.data() as Wallet;
            //         const walletId = w.payload.doc.id;
            //         this.currentWallet.id = walletId;
            //
            //         let walletDoc: AngularFirestoreDocument<Wallet> = this.afs.doc<Wallet>(`/users/${user.id}/wallets/${walletId}`);
            //
            //         let total = 0;
            //         walletDoc.collection<Entry>('entries').valueChanges().subscribe(entries => {
            //             console.log(entries);
            //             entries.forEach(entry => {
            //                 total = total + entry.value;
            //                 console.log(entry);
            //
            //             });
            //             this.currentWallet.balance = total;
            //             this.currentWallet.entries = entries;
            //         });
            //     });
            // });
        });

        this.currentWallet = WalletUtil.getCurrentWallet(this.wallets);
        this.lastWallet = WalletUtil.getLastWallet(this.currentWallet, this.wallets);
    }

    settings() {
        const settingsModal = this.modalCtrl.create("Settings");
        settingsModal.present();
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

    entry(plus: boolean) {
        this.fabContainer.close();

        const entryModal = this.modalCtrl.create("FinanceEntry", {
            plus: plus
        });

        entryModal.present();
    }

}
