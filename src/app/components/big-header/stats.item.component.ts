import { Component, Input } from '@angular/core';

@Component({
      selector: 'stats-item',
      template: `
            <span class="big-header__stats-wrap-icon">
                  <img class="big-header__stats-icon" alt="" src="{{ statsItem.icon }}"
            /></span>
            <span class="big-header__stats-details">
                  <span class="big-header__stats-number">{{ statsItem.value }}</span>
                  <span class="big-header__stats-type">{{ statsItem.title }}</span>
            </span>
      `,
      styleUrl: './big-header.component.scss',
})
export class StatsItemComponent {
      @Input() statsItem: any;
}
