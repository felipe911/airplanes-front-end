import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vendas'
})
export class VendasPipe implements PipeTransform {

  transform(value: boolean): string {
    if(value){
      return 'done';
    } else {
      return 'close';
    }
  }

}
