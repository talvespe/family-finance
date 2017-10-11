import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {Home} from "./home";
import {PipesModule} from "../../app/pipes.module";
import {DirectivesModule} from "../../app/directives.module";

@NgModule({
    declarations: [
        Home,
    ],
    imports: [
        IonicPageModule.forChild(Home),
        PipesModule,
        DirectivesModule
    ],
    exports: [
        Home
    ]
})
export class HomeModule {
}
