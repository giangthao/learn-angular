import { Component, Input } from '@angular/core';

@Component({
      selector: 'destination-details',
      template: `
            <img class="masony-img" alt="" src="{{ destination.thumbnailUrl }}" />
            <span class="top-destination__star"> {{ destination.ranking }} </span>
            <span class="top-destination__location">
                  <h3>{{ destination.destination }}</h3>
                  <p>{{ destination.agency }}</p>
            </span>
      `,
      styleUrl: './top-destination.component.scss',
})
export class DestinationDetailsComponent {
      @Input() destination: any;
}
