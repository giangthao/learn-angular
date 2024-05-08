import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Tour } from '../../models/tour';
import { TourService } from '../../services/tour.service';
import { environment } from '../../environments/environment';
import { NgForm } from '@angular/forms';
import { Guest } from '../../models/guest';
import { categoriesOfTour, locations } from '../../fake-data/fake-data';
import { provideNativeDateAdapter } from '@angular/material/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TourRender } from '../../fake-data/fake-data';

@Component({
   selector: 'app-tours',
   templateUrl: './tours.component.html',
   styleUrl: './tours.component.scss',
   providers: [provideNativeDateAdapter()],
})
export class ToursComponent implements OnInit, AfterViewInit {
   @ViewChild('filterForm') filterForm!: NgForm;

   //@ViewChild('picker') picker!: MatDatepicker<Date>;

   _MINPRICE: number = 0;
   _MAXPRICE: number = 500;
   minPrice: number = this._MINPRICE;
   maxPrice: number = this._MINPRICE;

   // fake data
   fakeTourList!: Observable<TourRender[]>;
   fakeLocation = locations;
   fakeActivity = categoriesOfTour;

   // date picker
   date?: number;
   month?: number;
   year?: number;
   //  dateToString?: string;

   // propertíe filter form
   seachValue: string = '';
   dateOn: string = '';
   destination: string = '';
   city: string = '';
   numberOfGuuest!: Guest[];
   activity!: string;
   numberOfAdult: number = 0;
   numberOfYouth: number = 0;
   numberOfChildren: number = 0;
   totalGuest: number = 0;
   startPriceValue: number = 0;
   endPriceValue: number = 0;

   // end property filter form

   //Sort
   sortSeq: string = 'desc' || 'asc';
   sortColumn!: string;
   //end sort

   // Tour Data
   tours: Tour[] = [];
   currentPage: number = 1;
   itemsPerPage: number = 6;
   pages: number[] = [];
   totalPages: number = 0;
   visiblePages: number[] = [];

   // Popper Agency
   isShowPopperOnBelow: boolean = false; // default show on top
   idTourPresentHover: number = 0;
   headerElementHeight: number = 0;

   // Options filtering
   isShowOptionsFilter: boolean = false;
   typeFilter!: string;

   // Locaion render
   locationRender: any = locations;
   cityRender: any = [];
   destinationInputOnfocus: boolean = true;
   cityInputOnfocus: boolean = false;

   constructor(private tourService: TourService, private router: Router) {}

   ngOnInit() {
      this.getTours(this.currentPage, this.itemsPerPage);
      this.fakeTourList = this.tourService.tours$;
   }

   ngAfterViewInit(): void {
      this.getHeightHeader();
      //  this.getWidthFilterForm();
   }

   // onchange
   onSearchValueChange() {
      console.log(this.seachValue);
   }

   onDestinationChange() {
      console.log(this.destination);
      if (this.city !== '') {
         this.setCity('');
      }

      const key = this.destination.trim().toLocaleLowerCase();

      const arraySearch = this.fakeLocation.filter((item) => item.destination.toLocaleLowerCase().includes(key));

      console.log(arraySearch);
      this.locationRender = arraySearch;
      console.log(this.locationRender);

      if (arraySearch.length > 0) {
         const cityList = arraySearch.map((item) => {
            console.log(item.cities);
         });

         //this.destination = arraySearch[0].destination;
      } else {
         this.cityRender = [];
      }
   }

   onCityChange() {
      console.log(this.city);

      console.log(this.cityRender);
      if (this.cityRender.length > 0) {
         const key = this.city.trim().toLocaleLowerCase();
         const filterSearch = this.cityRender.filter((item: any) => item.name.toLocaleLowerCase().includes(key));

         this.cityRender = filterSearch;
      }
   }

   onDestinationFocus() {
      this.destinationInputOnfocus = true;
      this.cityInputOnfocus = false;
      console.log('destination focus');
   }

   onCityFocus() {
      console.log(this.cityRender);
      this.cityInputOnfocus = true;
      this.destinationInputOnfocus = false;
      console.log('city focus');

      if (this.destination.trim() !== '') {
         const list = this.locationRender.filter(
            (item: any) =>
               this.trimStringAndConvertToLowerCase(item.destination) ==
               this.trimStringAndConvertToLowerCase(this.destination),
         );
         if (list.length > 0) {
            console.log(list);
            this.cityRender = list[0].cities;
         }
      }
   }

   onPageChange(page: number) {
      // debugger
      this.currentPage = page;
      this.getTours(this.currentPage, this.itemsPerPage);
   }

   onTotalGuestChange(groupPerson: string, type: string) {
      const _type = this.trimStringAndConvertToLowerCase(type);
      const _groupPerson = this.trimStringAndConvertToLowerCase(groupPerson);
      const INCREASE = 'INCREASE'.trim().toLocaleLowerCase();
      const DECREASE = 'DECREASE'.trim().toLocaleLowerCase();

      const ADULT = 'ADULT'.trim().toLocaleLowerCase();
      const YOUTH = 'YOUTH'.trim().toLocaleLowerCase();
      const CHILDREN = 'CHILDREN'.trim().toLocaleLowerCase();

      if (!_type.match(INCREASE) && !_type.match(DECREASE)) {
         return;
      }

      if (_groupPerson.match(ADULT) && _groupPerson.match(YOUTH) && _groupPerson.match(CHILDREN)) {
         return;
      }

      switch (_groupPerson) {
         case ADULT: {
            if (_type === DECREASE) {
               if (this.numberOfAdult === 0) return;
               this.numberOfAdult = this.numberOfAdult - 1;
               this.setTotalOfGuest();
            } else {
               this.numberOfAdult = this.numberOfAdult + 1;
               this.setTotalOfGuest();
            }
            break;
         }

         case YOUTH: {
            if (_type === DECREASE) {
               if (this.numberOfYouth === 0) return;
               this.numberOfYouth = this.numberOfYouth - 1;
               this.setTotalOfGuest();
            } else {
               this.numberOfYouth = this.numberOfYouth + 1;
               this.setTotalOfGuest();
            }
            break;
         }
         case CHILDREN: {
            if (_type === DECREASE) {
               if (this.numberOfChildren === 0) return;
               this.numberOfChildren = this.numberOfChildren - 1;
               this.setTotalOfGuest();
            } else {
               this.numberOfChildren = this.numberOfChildren + 1;
               this.setTotalOfGuest();
            }
            break;
         }

         default:
            break;
      }
   }

   onSubmitFormFilter() {
      const objectFilter = {
         key: this.seachValue,
         date: this.date?.toString() + '/' + this.month?.toString() + '/' + this.year?.toString(),
         minPrice: this.minPrice,
         maxPrice: this.maxPrice,
         location: this.destination + ',' + this.city,
         numberOfGuest: this.numberOfGuuest,
         type: this.activity,
         orderBy: this.typeFilter,
      };

      console.log('Filter', objectFilter);
   }

   // fetch API
   getTours(page: number, limit: number) {
      this.tourService.getTours(page, limit).subscribe({
         next: (response: any) => {
            // debugger
            response.products.forEach((tour: Tour) => {
               tour.url = `${environment.apiBaseUrl}/products/images/${tour.thumbnail}`;
            });

            this.tours = response.products;
            this.totalPages = response.totalPages;
            this.visiblePages = this.generateVisiblePageArray(this.currentPage, this.totalPages);
         },

         complete: () => {
            //  debugger
         },
         error: (error: any) => {
            //   debugger
            console.log('Error fetching Tours: ', error);
         },
      });
   }

   generateVisiblePageArray(currentPage: number, totalPages: number) {
      const maxVisiblePage = 3;
      const halfVisiblePages = Math.floor(maxVisiblePage / 2);

      let startPage = Math.max(currentPage - halfVisiblePages, 1);
      let endPage = Math.min(startPage + maxVisiblePage - 1, totalPages);

      if (endPage - startPage + 1 < maxVisiblePage) {
         startPage = Math.max(endPage - maxVisiblePage + 1, 1);
      }
      return new Array(endPage - startPage + 1).fill(0).map((_, index) => startPage + index);
   }

   //getter
   getHeightHeader() {
      const header = document.getElementById('header');
      if (header) {
         this.headerElementHeight = header.clientHeight;
      }
   }

   // setter
   setSortBy(column: string, order?: string) {
      if (!order) {
         order = 'desc';
      }
      this.sortColumn = column;
      this.sortSeq = order;
   }

   setSortByToString(column: string, order?: string): string {
      let result = '';
      if (!order) order = 'desc';

      switch (column) {
         case 'like': {
            result = order === 'desc' ? 'Most Favourite' : '';
            break;
         }
         case 'budget': {
            result = order === 'desc' ? 'Budget descending' : 'Budget ascending';
            break;
         }
         case 'location': {
            result = 'Location';
            break;
         }
         case 'number_of_booking': {
            result = 'Number of booking';
            break;
         }
         case 'created_at': {
            result = 'Creation date';
            break;
         }
         case 'updated_at': {
            result = 'Modification date';
            break;
         }

         default:
            break;
      }

      return result;
   }

   setCity(city: string) {
      this.city = city;
   }
   setDestination(destination: string) {
      this.destination = destination;
   }

   setActivity(activity: string) {
      this.activity = activity;
   }

   setTotalOfGuest() {
      this.totalGuest = this.numberOfAdult + this.numberOfChildren + this.numberOfYouth;
   }

   // clear
   clearSort() {
      this.sortColumn = '';
      this.sortSeq = 'desc';
   }

   clearLocation() {
      this.destination = '';
      this.city = '';
   }

   clearSearchValue() {
      this.seachValue = '';
   }

   clearActivity() {
      this.activity = '';
   }

   clearTotalOfGuest() {
      this.numberOfAdult = 0;
      this.numberOfChildren = 0;
      this.numberOfYouth = 0;
   }

   clearDatePicker() {
      this.date = undefined;
      this.month = undefined;
      this.year = undefined;
   }

   clearPriceRange() {
      this.startPriceValue = 0;
      this.endPriceValue = 0;
      this.minPrice = 0;
      this.maxPrice = 0;
   }

   // checker
   isDestinationValid(): boolean {
      const array = this.fakeLocation.filter(
         (item) => item.destination.trim().toLocaleLowerCase() === this.destination.trim().toLocaleLowerCase(),
      );

      if (array.length > 0) {
         return true;
      }

      return false;
   }

   isCityValid(): boolean {
      if (this.isDestinationValid() === false) return false;

      if (this.cityRender.length === 0) return false;

      const array = this.cityRender.filter(
         (item: any) =>
            this.trimStringAndConvertToLowerCase(item.name) === this.trimStringAndConvertToLowerCase(this.city),
      );

      if (array.length > 0) return true;
      return false;
   }

   // handler
   handlerClickOutside(type: string) {
      //  console.log('click outside');

      if (type === this.typeFilter) {
         this.isShowOptionsFilter = false;
      }
   }

   handlerSetDestination(location: any) {
      this.setDestination(location.destination);

      if (this.city !== '') this.setCity('');

      console.log(location.cities);
      this.cityRender = location.cities;
   }

   applyRangePrice() {
      //  console.log(this.maxPrice, this.minPrice);

      if (this.minPrice === 0 && this.maxPrice === 0) {
         return;
      }
      this.startPriceValue = this.minPrice;
      this.endPriceValue = this.maxPrice;
   }

   // handler DOM
   setInputMinPriceChange(value: number) {
      //  console.log('Min:', value);
      this.minPrice = value;
   }
   setInputMaxPrice(value: number) {
      //   console.log('Max: ', value);
      this.maxPrice = value;
   }

   showPopper(event: MouseEvent, idTour: number) {
      // console.log(event);
      this.idTourPresentHover = idTour;

      const target = event.target as HTMLElement; // element
      // console.log(target);

      //console.log(target.children[0]);
      // console.log(target.children[1]);

      const elementHover = target.children[0];
      const popperElement = target.children[1];

      const heightPopper = popperElement.clientHeight;
      //  console.log('Height: ', heightPopper);

      const heightToTop = elementHover.getBoundingClientRect().top;
      const heightToBottom = window.innerHeight - elementHover.getBoundingClientRect().bottom;

      // console.log('Top: ', heightToTop);
      // console.log('Bottom: ', heightToBottom);
      // console.log('Height popper: ', heightPopper);

      if (heightToTop - this.headerElementHeight < heightPopper) {
         this.isShowPopperOnBelow = true;
      } else {
         this.isShowPopperOnBelow = false;
      }

      console.log('showBelow?  ', this.isShowPopperOnBelow);
      console.log('tourId: ', this.idTourPresentHover);
   }

   toggleShowOptionsFiltering(type: string) {
      if (type !== this.typeFilter) {
         this.typeFilter = type;
         this.isShowOptionsFilter = true;
         return;
      }

      this.isShowOptionsFilter = !this.isShowOptionsFilter;
      console.log(this.isShowOptionsFilter);
   }

   trimStringAndConvertToLowerCase(text: string): string {
      return text.trim().toLocaleLowerCase();
   }

   convertDateToString(date: number, month: number, year: number): string {
      const monthNames = [
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

      let result = date + ' ' + monthNames[month] + ' ' + year;
      return result;
   }

   navigateToDetailsTours(slug: string) {
      this.router.navigate([`tours/${slug}`]);
   }
}

// appClickOutside
// (clickOutside)="handlerClickOutside()"
