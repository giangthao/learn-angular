import { Component, Input } from '@angular/core';

@Component({
      selector: 'top-destination',
      templateUrl: './top-destination.component.html',
      styleUrl: './top-destination.component.scss',
})
export class TopDestinationComponent {
      destinations = [
            {
                  id: 1,
                  ranking: 3.5,
                  agency: 'Worefall',
                  destination: 'Vietnam',
                  thumbnailUrl: '../../../assets/images/top-destination-1.png',
            },
            {
                  id: 2,
                  ranking: 3.5,
                  agency: 'Worefall',
                  destination: 'Vietnam',
                  thumbnailUrl: '../../../assets/images/top-destination-2.png',
            },
            {
                  id: 3,
                  ranking: 3.5,
                  agency: 'Worefall',
                  destination: 'Vietnam',
                  thumbnailUrl: '../../../assets/images/top-destination-3.png',
            },
            {
                  id: 4,
                  ranking: 3.5,
                  agency: 'Worefall',
                  destination: 'Vietnam',
                  thumbnailUrl: '../../../assets/images/top-destination-4.png',
            },
            {
                  id: 5,
                  ranking: 3.5,
                  agency: 'Worefall',
                  destination: 'Vietnam',
                  thumbnailUrl: '../../../assets/images/top-destination-5.png',
            },
            {
                  id: 6,
                  ranking: 3.5,
                  agency: 'Worefall',
                  destination: 'Vietnam',
                  thumbnailUrl: '../../../assets/images/top-destination-6.png',
            },
      ];
}
