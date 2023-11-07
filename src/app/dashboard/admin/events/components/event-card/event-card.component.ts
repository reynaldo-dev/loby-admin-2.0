import { Component, Input } from '@angular/core';
import { IEventsAtDate } from '../../interfaces/event.interface';
import { getFormattedDate } from 'src/app/shared/helpers/formatted-date/get-formatted-date';

@Component({
     selector: 'events-event-card',
     templateUrl: './event-card.component.html',
     styleUrls: ['./event-card.component.css'],
})
export class EventCardComponent {
     @Input() event!: IEventsAtDate;
     @Input() communityColor!: string;

     getFormattedDate(date: string): string {
          return getFormattedDate(date);
     }
}
