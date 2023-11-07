import { Component, Input } from '@angular/core';
import { makeColorOpaque } from 'src/app/shared/helpers/convert-color/convert-color';

@Component({
     selector: 'home-card-stats',
     templateUrl: './card-stats.component.html',
     styleUrls: ['./card-stats.component.css'],
})
export class CardStatsComponent {
     @Input() title!: string;
     @Input() data!: number;
     @Input() color!: string;
     @Input() iconColor!: string;
}
