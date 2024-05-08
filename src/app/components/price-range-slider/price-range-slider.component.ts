import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
      selector: 'app-price-range-slider',
      templateUrl: './price-range-slider.component.html',
      styleUrl: './price-range-slider.component.scss',
})
export class PriceRangeSliderComponent implements OnInit {
      @Input() min?: number;
      @Input() max?: number;

      @Input() startValue?: number;
      @Input() endValue?: number;

      @Output() dataMinPriceChange: EventEmitter<number> = new EventEmitter<number>();
      @Output() dataMaxPriceChange: EventEmitter<number> = new EventEmitter<number>();

      constructor() {
            this.startValue = this.min;
            this.endValue = this.min;
      }

      ngOnInit(): void {}

      // onStartValueChange() {
      //       //  console.log(this.startValue);
      //       this.dataMinPriceChange.emit(this.startValue);
      // }
      // onEndValueChange() {
      //       //   console.log(this.endValue);
      //       this.dataMaxPriceChange.emit(this.endValue);
      // }
}
