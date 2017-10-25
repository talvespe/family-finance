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
        if (this.entry.value > 0) {
            this.elRef.nativeElement.className = 'success'
        } else if (this.entry.value < 0) {
            this.elRef.nativeElement.className = 'danger'
        } else{
            this.elRef.nativeElement.className = 'info'
        }
    }
}