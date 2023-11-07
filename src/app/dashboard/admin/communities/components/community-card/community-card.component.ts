import { Component, Input } from '@angular/core';
import { ICommunity } from '../../interfaces/community.interface';

@Component({
     selector: 'communities-community-card',
     templateUrl: './community-card.component.html',
     styleUrls: ['./community-card.component.css'],
})
export class CommunityCardComponent {
     @Input() community!: ICommunity;
}
