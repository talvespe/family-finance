import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {SuperTabsModule} from "ionic2-super-tabs";
import {AngularFireModule} from "angularfire2";
import {AngularFirestoreModule} from "angularfire2/firestore";
import {IonicStorageModule} from "@ionic/storage";

export const firebaseConfig = {
    apiKey: "AIzaSyBCKamko-cfc4m_fGSnXaK8iUanGJFDb9M",
    authDomain: "family-finance-c8652.firebaseapp.com",
    databaseURL: "https://family-finance-c8652.firebaseio.com",
    projectId: "family-finance-c8652",
    storageBucket: "family-finance-c8652.appspot.com",
    messagingSenderId: "926669380238"
};

@NgModule({
    declarations: [
        MyApp,
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        SuperTabsModule.forRoot(),
        AngularFirestoreModule,
        AngularFireModule.initializeApp(firebaseConfig),
        IonicStorageModule.forRoot()
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}
