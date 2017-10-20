import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {User} from "../../model/user";
import {AngularFirestore} from "angularfire2/firestore";
import {Observable} from "rxjs/Observable";

@IonicPage({name: "Login"})
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class Login {
    users: Observable<any[]>;
    email;
    password;

    constructor(public navCtrl: NavController, public afs: AngularFirestore) {
        this.users = afs.collection<User>('users').valueChanges();
    }

    login() {
        this.afs.collection("users", ref => ref.where("email", '==', this.email).where("password", "==", this.password)).snapshotChanges().subscribe(users => {
            if (users.length > 0) {
                const user = users[0].payload.doc.data() as User;
                const id = users[0].payload.doc.id;
                user.id = id;
                if (user != null) {
                    this.navCtrl.push("Tabs", {
                        currentUser: user
                    });
                }
            }
        });
        /* this.afs.collection("users", ref => ref.where("email", '==', this.email).where("password", "==", this.password)).snapshotChanges().subscribe(users => {
             console.log("items$ > " + JSON.stringify(users[0].type.));
             if (users.length > 0) {
                 this.navCtrl.push("Tabs", {
                     currentUser: users[0]
                 });
             }
         });*/
    }

}
