import {AfterViewInit, Directive, ElementRef} from "@angular/core";

@Directive({
    selector: '[balance]'
})
export class BalanceDirective implements AfterViewInit {

    constructor(private elRef: ElementRef) {
    }

    ngAfterViewInit(): void {
        let value: number = +this.elRef.nativeElement.innerHTML;
        console.log('Valor:' + value);
        if (value < 0) {
            this.elRef.nativeElement.style.color = '#d9534f';
        } else {
            this.elRef.nativeElement.style.color = '#5cb85c';
        }
    }
}