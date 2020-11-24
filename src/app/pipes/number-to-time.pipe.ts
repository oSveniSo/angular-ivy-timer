import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "numberToTime"
})
export class NumberToTimePipe implements PipeTransform {
  transform(value: number): string {
    var date = new Date(null);
    date.setSeconds(value); // specify value for SECONDS here
    return date.toISOString().substr(11, 8);
  }
}
