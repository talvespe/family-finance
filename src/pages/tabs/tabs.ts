import {Component} from '@angular/core';
import {Events, IonicPage, NavController, NavParams} from "ionic-angular";
import {User} from "../../model/user";
import {CommonConstants} from "../../constants/CommonConstants";
import {Storage} from "@ionic/storage";

@IonicPage()
@Component({
    templateUrl: 'tabs.html'
})
export class Tabs {

    home = "Home";
    financeList = "FinanceList";
    financeTrending = "FinanceTrending";
    currentUser: User;
    private logoutHandler;

    constructor(private navCtrl: NavController, private navParams: NavParams, private events: Events, private storage: Storage) {
        this.currentUser = navParams.get("currentUser");
        console.log("currentUser = " + this.currentUser.name);
        storage.set(CommonConstants.CURRENT_USER, this.currentUser);

        this.subscribeEvents();
    }

    private subscribeEvents() {
        console.log("SUBSCRIBE Home");

        this.logoutHandler = () => {
            this.navCtrl.popToRoot();
        };

        this.events.subscribe(CommonConstants.EVENT_LOGOUT, this.logoutHandler);
    }
}