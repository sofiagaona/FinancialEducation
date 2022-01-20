import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})

export class QuizComponent implements OnInit {

  value: number = 50;
  options: Options = {
    floor: 0,
    ceil: 100,
    showSelectionBar: true,
    getSelectionBarColor: (value: number): string => {
      if (value <= 25) {
          return 'red';
      }
      if (value <= 50) {
          return 'orange';
      }
      if (value <= 75) {
          return 'yellow';
      }
      return '#2AE02A';
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
