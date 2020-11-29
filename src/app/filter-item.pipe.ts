import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterItem'
})
export class FilterItemPipe implements PipeTransform {

  transform(itemList: any, searchContent: any): unknown {
    if (searchContent.length !== 0) {
      return itemList.filter(item => {
        if(item.name.toLowerCase().includes(searchContent.toLowerCase())) {
          return item;
        }
      })
    }
    return itemList;
  }

}
