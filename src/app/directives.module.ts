import {NgModule} from "@angular/core";
import {BalanceDirective} from "../directive/BalanceDirective";
import {EntryDirective} from "../directive/EntryDirective";

@NgModule({
    declarations: [
        BalanceDirective,
        EntryDirective
    ],
    exports: [
        BalanceDirective,
        EntryDirective
    ]

})
export class DirectivesModule {
}
