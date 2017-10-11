import {NgModule} from "@angular/core";
import {BalanceDirective} from "../directive/BalanceDirective";

@NgModule({
    declarations: [
        BalanceDirective,
    ],
    exports: [
        BalanceDirective,
    ]

})
export class DirectivesModule {
}
