import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-signup',
    templateUrl: 'signup.html',
})
export class Signup {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad Signup');
    }

    signup() {
        //Api connections
        this.navCtrl.push("Tabs");
    }

}
