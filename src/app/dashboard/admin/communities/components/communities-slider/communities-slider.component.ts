import { Component } from '@angular/core';
import { CommunitiesService } from '../../services/communities.service';
import { ICommunity } from '../../interfaces/community.interface';

@Component({
     selector: 'communities-communities-slider',
     templateUrl: './communities-slider.component.html',
     styleUrls: ['./communities-slider.component.css'],
})
export class CommunitiesSliderComponent {
     public numVisible = 3;
     public numScroll = 4;
     constructor(private communitiesService: CommunitiesService) {}

     get communities(): ICommunity[] {
          return this.communitiesService.communities;
     }
}
