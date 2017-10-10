import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {Tabs} from "./tabs";
import {SharedModule} from "../../app/shared.module";

@NgModule({
    declarations: [
        Tabs,
    ],
    imports: [
        IonicPageModule.forChild(Tabs),
        SharedModule
    ],
    exports: [
        Tabs
    ]
})
export class TabsModule {
}
