import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunitiesSliderComponent } from './components/communities-slider/communities-slider.component';
import { PrimengModule } from 'src/app/primeng/primeng.module';
import { CommunityCardComponent } from './components/community-card/community-card.component';

@NgModule({
     declarations: [CommunitiesSliderComponent, CommunityCardComponent],
     imports: [CommonModule, PrimengModule],
     exports: [CommunitiesSliderComponent],
})
export class CommunitiesModule {}
