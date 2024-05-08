import { Component, Input } from '@angular/core';

@Component({
      selector: 'tour-card-details',
      template: `
            <div class="tour-card">
                  <a href="#!">
                        <img class="tour-card__thumbnail" alt="" src="{{ tourCard.thumbnail }}" />
                  </a>
                  <div class="tour-card__content">
                        <div class="tour-card__price">$ {{ tourCard.price }}/day</div>
                        <h3 class="tour-card__name">{{ tourCard.position }}</h3>
                        <div class="tour-card__row">
                              <img alt="" src="../../../assets/icons/location.svg" />
                              <p class="tour-card__desc">{{ tourCard.location }}</p>
                        </div>
                        <div class="tour-card__bottom">
                              <div class="tour-card__row">
                                    <img alt="" src="../../../assets/icons/calendar.svg" />
                                    <p class="tour-card__desc">{{ tourCard.startDate }}</p>
                              </div>
                              <div class="tour-card__row">
                                    <img alt="" src="../../../assets/icons/time.svg" />
                                    <p class="tour-card__desc">{{ tourCard.duration }} Days</p>
                              </div>
                        </div>
                  </div>
            </div>
      `,
      styleUrl: './best-tours.component.scss',
})
export class TourCardDetailsComponent {
      @Input() tourCard: any;
}
