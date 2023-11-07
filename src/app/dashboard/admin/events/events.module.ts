import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventCardComponent } from './components/event-card/event-card.component';
import { RouterModule } from '@angular/router';
import { PrimengModule } from 'src/app/primeng/primeng.module';

@NgModule({
     declarations: [EventCardComponent],
     imports: [CommonModule, RouterModule, PrimengModule],
     exports: [EventCardComponent],
})
export class EventsModule {}
