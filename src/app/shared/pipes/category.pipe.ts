import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category',
})
export class CategoryPipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case 'Front-end':
        return 'code';
      case 'Linguagem de programação':
        return 'code';
      case 'Back-end':
        return 'computer';
    }
    return 'code';
  }
}
