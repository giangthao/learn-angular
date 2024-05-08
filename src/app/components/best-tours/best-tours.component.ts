import { Component } from '@angular/core';

@Component({
      selector: 'app-best-tours',
      templateUrl: './best-tours.component.html',
      styleUrl: './best-tours.component.scss',
})
export class BestToursComponent {
      tours = [
            {
                  id: 1,
                  price: 150,
                  position: 'Cairms Travel',
                  location: 'Carrms QLD, Australia',
                  startDate: 'Octorber 28, 2023',
                  duration: 5,
                  thumbnail: '../../../assets/images/tour-1.png',
            },
            {
                  id: 2,
                  price: 110,
                  position: 'Orlando Travel',
                  location: 'Orlando, FL, USA',
                  startDate: 'Octorber 28, 2023',
                  duration: 3,
                  thumbnail: '../../../assets/images/tour-2.png',
            },
            {
                  id: 1,
                  price: 136,
                  position: 'Malaysia',
                  location: 'Malaysia',
                  startDate: 'Octorber 28, 2023',
                  duration: 5,
                  thumbnail:
                        'https://images.squarespace-cdn.com/content/v1/5cb9ef147eb88c5caefa30b3/1588959849622-MUSD6COUOEJFIOSU1ULU/1+Tu+Nguyen+Masai+Mara+Kenya+87.jpg?format=1500w',
            },
      ];
}
