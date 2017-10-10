import {Component} from "@angular/core";
import {IonicPage, NavController, ViewController} from "ionic-angular";

@IonicPage()
@Component({
    selector: 'page-settings',
    templateUrl: 'settings.html'
})
export class Settings {

    constructor(private nav: NavController, private viewController: ViewController) {
    }


    ionViewWillEnter() {
        console.debug('ionViewWillEnter');
    }


    logout() {
        this.viewController.dismiss();
    }

}
