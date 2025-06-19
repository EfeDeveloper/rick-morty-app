import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'fallback',
})
export class FallbackPipe implements PipeTransform {
  transform<T>(value: T, fallback: T): T {
    return value === undefined || value === null || value === '' ? fallback : value
  }
}
