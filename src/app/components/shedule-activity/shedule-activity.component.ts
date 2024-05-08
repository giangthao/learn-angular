import { Component, Input } from '@angular/core';

@Component({
      selector: 'app-shedule-activity',
      templateUrl: './shedule-activity.component.html',
      styleUrl: './shedule-activity.component.scss',
})
export class SheduleActivityComponent {
      @Input() iconUrl!: string;
      @Input() label!: string;
      @Input() description?: string;
}
