import {Component} from '@angular/core';
import {IonicPage} from "ionic-angular";

@IonicPage()
@Component({
    templateUrl: 'tabs.html'
})
export class Tabs {

    home = "Home";
    financeList = "FinanceList";
    financeTrending = "FinanceTrending";

    constructor() {

    }
}
