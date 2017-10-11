import {AfterViewInit, Directive, ElementRef, Renderer} from "@angular/core";

@Directive({
    selector: '[balance]'
})
export class BalanceDirective implements AfterViewInit {

    constructor(private elRef: ElementRef) {
    }

    ngAfterViewInit(): void {
        console.log(this.elRef.nativeElement.innerHTML);
        let valueString = this.elRef.nativeElement.innerHTML.replace('R$', '').replace(',', '');
        let value: number = +(valueString / 100).toFixed(2);
        if (value < 0) {
            this.elRef.nativeElement.className = 'danger'
        } else if (value > 0) {
            this.elRef.nativeElement.className = 'success'
        } else {
            this.elRef.nativeElement.className = 'info'
        }
    }
}