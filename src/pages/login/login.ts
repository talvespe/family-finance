import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage({name: "Login"})
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class Login {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad Login');
    }

    login() {
        //Api connections
        this.navCtrl.push("Tabs");
    }

}
