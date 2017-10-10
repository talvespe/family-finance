import {Component} from '@angular/core';
import {App, IonicPage, NavController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-finance-list',
  templateUrl: 'finance-list.html'
})
export class FinanceList {

  constructor(public navCtrl: NavController, public app: App) {

  }

  logout(){
    //Api Token Logout 
    const root = this.app.getRootNav();
    root.popToRoot();
  }

}
