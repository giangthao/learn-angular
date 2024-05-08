import { Component, Output, Input, EventEmitter, OnInit } from '@angular/core';

@Component({
   selector: 'app-calender',
   templateUrl: './calender.component.html',
   styleUrl: './calender.component.scss',
})
export class CalenderComponent implements OnInit {
   _daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
   _monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
   ];
   currentToday: number = new Date().getDate();
   currentYear: number;
   currentMonth: number;
   daysOfMonth: number[] = [];
   daysOfPreviosMonth: number[] = [];

   @Input() dayPicked?: number;
   @Input() monthPicked?: number;
   @Input() yearPicked?: number;

   @Output() dayPickedChange = new EventEmitter<number>();
   @Output() monthPickedChange = new EventEmitter<number>();
   @Output() yearPickedChange = new EventEmitter<number>();

   constructor() {
      let date = new Date();
      const currentYear = date.getFullYear();
      const currentMonth = date.getMonth();

      this.currentMonth = currentMonth;
      this.currentYear = currentYear;
   }

   ngOnInit(): void {
      this.renderCalender();
   }

   renderCalender = () => {
      const ulElement = document.querySelector('.calender__day-in-month');
      if (!ulElement) {
         console.log('not tag');
         return;
      }
      let firstDayOfMonth = new Date(this.currentYear, this.currentMonth, 1).getDay(); // full day
      const lastDateOfMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
      const lasDateOfLastMonth = new Date(this.currentYear, this.currentMonth, 0).getDate();
      //   console.log(lastDateOfMonth);
      //   console.log(firstDayOfMonth);
      //   console.log(lasDateOfLastMonth);
      let arrDaysPreMonth = [];
      for (let i = 0; i < firstDayOfMonth; i++) {
         arrDaysPreMonth[i] = lasDateOfLastMonth - i;
      }

      //  console.log(arrDaysPreMonth);
      this.daysOfPreviosMonth = arrDaysPreMonth.reverse();

      let arrTmp = [];
      for (let i = 0; i < lastDateOfMonth; i++) {
         arrTmp[i] = i + 1;
      }
      this.daysOfMonth = arrTmp;
   };

   onNextMonth() {
      if (this.currentMonth === 11) {
         this.currentMonth = 0;
         this.currentYear = this.currentYear + 1;
         return;
      }
      this.currentMonth = this.currentMonth + 1;
      //  console.log(this.currentMonth);
      this.renderCalender();
   }
   onPrevMonth() {
      if (this.currentMonth === 0) {
         this.currentMonth = 11;
         this.currentYear = this.currentYear - 1;
         return;
      }
      this.currentMonth = this.currentMonth - 1;
      // console.log(this.currentMonth);
      this.renderCalender();
   }

   isToday(day: number): boolean {
      const date = new Date();
      if (
         day === date.getDate() &&
         this.currentMonth === new Date().getMonth() &&
         this.currentYear === new Date().getFullYear()
      ) {
         return true;
      }

      return false;
   }

   setDatePicker(valueDay: number) {
      // check date >= now
      const today = new Date();

      const datePick = new Date(this.currentYear, this.currentMonth, valueDay);

      if (datePick < today) {
         console.log('invalid date picked');

         return;
      }

      this.dayPicked = valueDay;
      this.monthPicked = this.currentMonth;
      this.yearPicked = this.currentYear;
      // console.log(this.getDatePickerToString());
      this.dayPickedChange.emit(valueDay);
      this.monthPickedChange.emit(this.monthPicked);
      this.yearPickedChange.emit(this.yearPicked);
   }
   getDatePickerToString(date: number, month: number, year: number): string {
      let dateToString = '';

      dateToString = date + ' ' + this._monthNames[month] + ' ' + year;

      return dateToString;
   }

   clearDatePicked() {
      this.dayPicked = undefined;
      this.monthPicked = undefined;
      this.yearPicked = undefined;
   }
}
