import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Longest SubArray is {{longest}}</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent implements OnInit {
  @Input() name: string;
  longest: number;
  arr: Array<number> = [4,6,5,5,5,6,5,3,1]//[1, 2, 2, 3, 1, 2];
  constructor(){
  }
  ngOnInit(){
    this.longest = this.longestSubArray(this.arr);
  }

  longestSubArray(arr: Array<number>): number{
    let temp = []; // stores the number of times a value is repeated in array
    arr.forEach((value) => temp[value] = (temp[value] || 0) + 1);
    let max = 0;
    temp.forEach((value, index) => {
      const max1 = value + temp[index + 1];
      if(max1 > max){
        max = max1;
      }
    });
    return max;
  }
}
