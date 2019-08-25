import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any) : number {
    let today:Date = new Date(); //get current date and time
    let todayWithNoTime:any = new Date(today.getFullYear(), today.getMonth(),today.getDate())
    var dateDifference = Math.abs(value - todayWithNoTime) //returns value for miliseconds
    const secondsInDay = 86400; //60 seconds * 60 Minutes in an hour * 24 hours in a day
    var dateDifferenceSeconds = dateDifference*0.001; //converts  iliseconds to seconds
    var dateCounter = Math.floor(dateDifferenceSeconds/secondsInDay);

    if (dateCounter >= 1 && value > todayWithNoTime){
      return dateCounter;
    }else {
        return 0;
      }
  }

}
