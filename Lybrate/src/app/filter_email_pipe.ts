import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'FilterEmailPipe'
})
export class FilterEmailPipe implements PipeTransform {
  transform(items: Emp[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter( it => 
        {
            return it.email.includes(searchText);
        });
   }
}

class Emp{
    fname!: string;
    email!: string;
}