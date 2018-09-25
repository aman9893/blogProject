import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
searchText = searchText.toLowerCase();
return items.filter( it => {
      return it.toLowerCase().includes(searchText);
    });
   }
}

@Pipe({
    name: 'filterdata'
  })
  export class FilterdataPipe implements PipeTransform {
   
    transform(items: any[], value: string, label:string): any[] {
      if (!items) return [];
      if (!value) return  items;
      if (value == '' || value == null) return [];
      return items.filter(e => e[label].toLowerCase().indexOf(value) > -1 );
      
    }
  }
  