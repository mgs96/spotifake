import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the NopicturePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'nopicture',
})
export class NopicturePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
   transform(images: any[], picture: number = 1): any {
     let noImage = 'assets/imgs/noimage.png';
     if(!images) {
       return noImage;
     }
     return (images.length > 0)? images[picture].url : noImage;
   }
}
