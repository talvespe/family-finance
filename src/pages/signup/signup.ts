import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {User} from "../../model/user";
import {Wallet} from "../../model/wallet";
import {Entry} from "../../model/entry";
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "angularfire2/firestore";
import {Observable} from "rxjs/Observable";

@IonicPage()
@Component({
    selector: 'page-signup',
    templateUrl: 'signup.html',
})
export class Signup {

    private userDoc: AngularFirestoreDocument<User>;
    userObservable: Observable<User>;

    private userCollection: AngularFirestoreCollection<User>;
    private walletsCollection: AngularFirestoreCollection<Wallet>;
    wallets: Observable<any[]>;

    user: User = {
        id: '',
        name: '',
        email: '',
        password: '',
        administrator: null,
    };

    constructor(public navCtrl: NavController, public readonly afs: AngularFirestore) {
        this.userCollection = afs.collection<User>('users');
    }

    signup() {
        let now: Date = new Date();
        let nextWallet: Wallet = {
            id: this.afs.createId(),
            month: (now.getMonth() + 2),
            year: now.getFullYear(),
        }

        let currentWallet: Wallet = {
            id: this.afs.createId(),
            month: (now.getMonth() + 1),
            year: now.getFullYear(),
        }

        this.user.id = this.afs.createId();
        this.userCollection.add(this.user).then(user => {
            this.userDoc = this.afs.doc<User>(user.path);
            this.walletsCollection = this.userDoc.collection<Wallet>('wallets');

            this.walletsCollection.add(nextWallet).then(wallet => {
                let walletDoc = this.afs.doc<Wallet>(wallet.path);


                let entry: Entry = {
                    date: new Date(),
                    value: -10.50,
                    name: "Arroz",
                    category: null,
                    entryFixed: null,
                    user: null,
                }
                let entry2: Entry = {
                    date: new Date(),
                    value: -20.50,
                    name: "Supermecado",
                    category: null,
                    entryFixed: null,
                    user: null,
                }
                let entry3: Entry = {
                    date: new Date(),
                    value: 1000,
                    name: "Salário",
                    category: null,
                    entryFixed: null,
                    user: null,
                }

                walletDoc.collection<Entry>('entries').add(entry);
                walletDoc.collection<Entry>('entries').add(entry2);
                walletDoc.collection<Entry>('entries').add(entry3);
            });

            this.walletsCollection.add(currentWallet);
        });

        this.navCtrl.push("Tabs", {
            currentUser: this.user
        });
    }

}
