import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initiative'
})
export class InitiativePipe implements PipeTransform {

  transform(groups: unknown, ...args: unknown[]): unknown {
    let result = [];
    if (!groups) return [];
    Object.keys(groups).forEach(
      (key) => {
        let i = 0;
        while (i < result.length && result[i].value.initiative >= groups[key].initiative) {
          i = i + 1;
        }
        result.splice(i, 0, { key, value: groups[key] });
      }
    )
    return result;
  }

}
