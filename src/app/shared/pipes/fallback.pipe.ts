import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fallback',
})
export class FallbackPipe implements PipeTransform {
  transform(value: any, fallback: string = 'N/A'): any {
    return value === undefined || value === null || value === ''
      ? fallback
      : value;
  }
}
