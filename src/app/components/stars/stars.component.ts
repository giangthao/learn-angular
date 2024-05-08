import { Component, Input, OnInit } from '@angular/core';

@Component({
      selector: 'app-stars',
      templateUrl: './stars.component.html',
      styleUrl: './stars.component.scss',
})
export class StarsComponent implements OnInit {
      @Input() numberOfStars!: number;
      @Input() size!: string;

      starsArray!: number[];

      constructor() {}

      ngOnInit(): void {
            const integerPart = Math.floor(this.numberOfStars);
            const decimalPart = this.numberOfStars - integerPart;

            this.starsArray = Array(integerPart)
                  .fill(1)
                  .concat(decimalPart >= 0.5 ? [0.5] : []);
      }
}
