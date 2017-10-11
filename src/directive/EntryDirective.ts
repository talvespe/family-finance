import {AfterViewInit, Directive, ElementRef, Input} from "@angular/core";
import {Entry} from "../model/entry";

@Directive({
    selector: '[entry]'
})
export class EntryDirective implements AfterViewInit {

    @Input()
    entry: Entry;

    constructor(private elRef: ElementRef) {
    }

    ngAfterViewInit(): void {
        let valueString = this.elRef.nativeElement.innerHTML.replace('R$', '').replace(',', '');
        if (this.entry.plus) {
            this.elRef.nativeElement.className = 'success'
        } else {
            this.elRef.nativeElement.className = 'danger'
        }
    }
}