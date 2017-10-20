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

    constructor(public navCtrl: NavController, public afs: AngularFirestore) {
        this.userCollection = afs.collection<User>('users');
    }

    signup() {
        let now: Date = new Date();
        let nextWallet: Wallet = {
            id: this.afs.createId(),
            month: (now.getMonth()+2),
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
            this.walletsCollection.add(nextWallet);
            this.walletsCollection.add(currentWallet);
        });

        this.navCtrl.push("Tabs", {
            currentUser: this.user
        });
    }

}
