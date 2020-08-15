import { Pipe, PipeTransform } from '@angular/core';
import { Monster } from 'src/app/types';

@Pipe({
  name: 'sortMonsters'
})
export class SortMonstersPipe implements PipeTransform {

  transform(value: any[], ...args: unknown[]): unknown {
    value.sort(
      function(a, b) {
        let nameA = a.value.name.toUpperCase();
        let nameB = b.value.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      }
    )
    return value;
  }

}
