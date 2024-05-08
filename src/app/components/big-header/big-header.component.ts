import { Component } from '@angular/core';

@Component({
      selector: 'app-big-header',
      templateUrl: './big-header.component.html',
      styleUrl: './big-header.component.scss',
})
export class BigHeaderComponent {
      totalTrip = 224;
      timesTraveled = 40;
      listStats = [
            {
                  id: 1,
                  title: 'Year Experiences',
                  value: 10,
                  icon: '../../../assets/icons/experience.png',
            },
            {
                  id: 2,
                  title: 'Awards Gained',
                  value: 29,
                  icon: '../../../assets/icons/award.png',
            },
            {
                  id: 3,
                  title: 'Property Build',
                  value: 735,
                  icon: '../../../assets/icons/buildings.png',
            },
      ];
}
