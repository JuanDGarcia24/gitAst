import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'formatDegrees'})
export class FormatDegreesPipe implements PipeTransform {
  transform(value: string): string {
    let Formato: string = parseFloat(value).toFixed(4) + '';
      return Formato;
  }
}