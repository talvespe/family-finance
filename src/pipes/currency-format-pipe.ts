import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'currencyFormat'
})
export class CurrencyFormatPipe implements PipeTransform {
  transform(value: number, locale?: string, currency_symbol?: boolean, number_format?: string): string {
    return new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(value);
  }

  parse(model): string {
    model = model.replace(/\D+/g, '');
    return (model / 100).toFixed(2);
  }
}
