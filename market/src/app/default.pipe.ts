import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultPipe implements PipeTransform {

  transform(value: string, fallback: string) {
    let image =""
    if(value){
      image = value
    } else{
      image = fallback
    }
    return image;
  }

}
