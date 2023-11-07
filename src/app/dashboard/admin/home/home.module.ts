import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';

import { RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PrimengModule } from 'src/app/primeng/primeng.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardStatsComponent } from './components/card-stats/card-stats.component';
import { CommunitiesModule } from '../communities/communities.module';
import { EventsModule } from '../events/events.module';

@NgModule({
     declarations: [HomeScreenComponent, SidebarComponent, CardStatsComponent],
     imports: [
          CommonModule,
          RouterModule,
          PrimengModule,
          SharedModule,
          CommunitiesModule,
          EventsModule,
     ],
     exports: [HomeScreenComponent, SidebarComponent],
})
export class HomeModule {}
