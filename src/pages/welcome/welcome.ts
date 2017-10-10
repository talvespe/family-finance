import {IonicPage, NavController, NavParams} from "ionic-angular";
import {Component} from "@angular/core";

@IonicPage({name: "Welcome"})
@Component({
    selector: 'page-welcome',
    templateUrl: 'welcome.html',
})
export class Welcome {
    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad Welcome');
    }

    login() {
        this.navCtrl.push("Login");
    }

    signup() {
        this.navCtrl.push("Signup", {}, {animate: false});
    }
}