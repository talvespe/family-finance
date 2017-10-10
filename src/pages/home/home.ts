import {Component} from '@angular/core';
import {App, IonicPage, ModalController, NavController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {

  constructor(public navCtrl: NavController, public app: App,public modalCtrl: ModalController) {
  }

  settings() {
      const settingsModal = this.modalCtrl.create("Settings");
      settingsModal.present()
  }
}
