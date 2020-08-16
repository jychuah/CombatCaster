import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pip'
})
export class PipPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return new Array(value);
  }

}
