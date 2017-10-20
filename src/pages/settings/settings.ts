import {Component} from "@angular/core";
import {Events, IonicPage, ViewController} from "ionic-angular";
import {CommonConstants} from "../../constants/CommonConstants";

@IonicPage()
@Component({
    selector: 'page-settings',
    templateUrl: 'settings.html'
})
export class Settings {

    constructor(private viewController: ViewController, private events: Events) {
    }


    logout() {
        this.events.publish(CommonConstants.EVENT_LOGOUT);
        this.viewController.dismiss();
    }

}
