import { AfterViewInit, Component, DoCheck, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TourRender } from '../../fake-data/fake-data';
import { TourService } from '../../services/tour.service';
import { Observable, filter, map, pluck, switchMap } from 'rxjs';
import { TypeParticipant } from '../../components/select-participants/select-participants.component';
import { TotalParticipant } from '../../pipes/total-participant-to-string.pipe';

@Component({
   selector: 'app-tour-details',
   templateUrl: './tour-details.component.html',
   styleUrl: './tour-details.component.scss',
})
export class TourDetailsComponent implements OnInit, DoCheck, AfterViewInit {
   detailTour$!: Observable<TourRender | undefined>;
   stars: number = 3.7;
   thumbnail!: string | undefined;
   thumbnailArray: string[] = [];
   featureArray = [
      {
         icon: '../../../assets/icons/tick-v-icon.svg',
         title: 'Free cancellation',
         content: 'Cancel up to 24 hours in advance for a full refund',
      },
      {
         icon: '../../../assets/icons/pay-icon.svg',
         title: 'Reserve now & pay later',
         content: 'Keep your travel plans flexible — book your spot and pay nothing today.',
      },
      {
         icon: '../../../assets/icons/time.svg',
         title: 'Duration 1.5 hours',
         content: 'Check availability to see starting times.',
      },
      {
         icon: '../../../assets/icons/click-send.svg',
         title: 'Skip the ticket line',
      },
      {
         icon: '../../../assets/icons/group-person.svg',
         title: 'Live tour guide',
         content: 'English',
      },
   ];
   checkedInput: boolean = false;

   typeAdult: TypeParticipant = TypeParticipant.aldult;
   typeYoung: TypeParticipant = TypeParticipant.young;
   typeChildren: TypeParticipant = TypeParticipant.children;

   initNumberOfAdult: number = 1;
   numberOfAdult: number = this.initNumberOfAdult;
   numberOfYoung: number = 0;
   numberOfChildren: number = 0;
   initArrayParticipant = [
      {
         type: this.typeAdult,
         numberOfPerson: 0,
      },
      {
         type: this.typeYoung,
         numberOfPerson: 0,
      },
      {
         type: this.typeChildren,
         numberOfPerson: 0,
      },
   ];
   participantChanges: TotalParticipant[] = this.initArrayParticipant;

   // date picker
   day?: number;
   month?: number;
   year?: number;

   @ViewChild('formCheckAvailability') formCheckAvailability!: ElementRef<any>;
   @ViewChild('wrapperGoogleMap') wrapperMap!: ElementRef<any>;

   openFormCheckAvailability() {
      this.checkedInput = true;
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

      let result = date + ' ' + monthNames[month].slice(0, 3) + ', ' + year;
      return result;
   }

   scrollToTop(): void {
      if (this.formCheckAvailability) {
         console.log(this.formCheckAvailability);
         this.openFormCheckAvailability();
         this.formCheckAvailability.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
   }

   constructor(private readonly activatedRoute: ActivatedRoute, private readonly tourSevice: TourService) {}

   ngDoCheck(): void {
      const stateArray = [
         {
            type: this.typeAdult,
            numberOfPerson: this.numberOfAdult,
         },
         {
            type: this.typeYoung,
            numberOfPerson: this.numberOfYoung,
         },
         {
            type: this.typeChildren,
            numberOfPerson: this.numberOfChildren,
         },
      ];

      this.participantChanges =
         this.numberOfAdult === 0 && this.numberOfYoung === 0 && this.numberOfChildren === 0
            ? this.initArrayParticipant
            : stateArray;
   }

   ngOnInit(): void {
      this.getTourDetail();
      this.setDefaultDatePicker();

      // set default date picker
   }

   ngAfterViewInit(): void {
      const elementTag = this.wrapperMap.nativeElement;
      const elementWidth = elementTag.offsetWidth - 30;
      // console.log(elementWidth);
      elementTag.style.height = `${elementWidth}px`;

      console.log('Width goolemap: ', elementWidth);
   }

   private getTourDetail() {
      this.detailTour$ = this.activatedRoute.params.pipe(
         pluck('slug'),
         switchMap((slug) => this.tourSevice.getTourBySlug(slug)),
         filter((tour) => !!tour),
      );
      this.activatedRoute.params
         .pipe(
            pluck('slug'),
            switchMap((slug) => this.tourSevice.getImagesBySlug(slug)),
            filter((image) => !!image),
         )
         .subscribe((thumb) => (this.thumbnail = thumb));

      console.log(this.thumbnail);

      // add fake details images
      if (this.thumbnail !== undefined) {
         this.thumbnailArray.push(this.thumbnail);
         this.thumbnailArray.push('../../../assets/images/tour-11.jpg');
         this.thumbnailArray.push('../../../assets/images/tour-6.jpg');
         this.thumbnailArray.push('../../../assets/images/tour-7.jpg');
         this.thumbnailArray.push('../../../assets/images/tour-9.jpg');
         this.thumbnailArray.push('../../../assets/images/tour-5.jpg');
         this.thumbnailArray.push('../../../assets/images/tour-11.jpg');
         this.thumbnailArray.push('../../../assets/images/tour-6.jpg');
         this.thumbnailArray.push('../../../assets/images/tour-7.jpg');
         this.thumbnailArray.push('../../../assets/images/tour-9.jpg');
         this.thumbnailArray.push('../../../assets/images/tour-5.jpg');
         console.log(this.thumbnailArray);
      }
   }

   private setDefaultDatePicker() {
      const date = new Date();
      this.day = date.getDate();
      this.month = date.getMonth();
      this.year = date.getFullYear();

      //  console.log({ day: day, month: month, year: year });
   }
}
