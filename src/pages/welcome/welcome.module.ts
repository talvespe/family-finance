import {NgModule} from '@angular/core';
import {Welcome} from "./welcome";
import {IonicPageModule} from "ionic-angular";

@NgModule({
    declarations: [
        Welcome,
    ],
    imports: [
        IonicPageModule.forChild(Welcome),
    ],
    exports: [
        Welcome,
    ],
})
export class WelcomeModule {
}
