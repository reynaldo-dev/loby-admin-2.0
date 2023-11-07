import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { DividerModule } from 'primeng/divider';
import { SplitButtonModule } from 'primeng/splitbutton';
import { CarouselModule } from 'primeng/carousel';
import { ChipModule } from 'primeng/chip';
import { TagModule } from 'primeng/tag';
import { ScrollerModule } from 'primeng/scroller';
import { ToastModule } from 'primeng/toast';

@NgModule({
     declarations: [],
     imports: [
          CommonModule,
          ButtonModule,
          ToastModule,
          SidebarModule,
          DividerModule,
          SplitButtonModule,
          CarouselModule,
          ChipModule,
          TagModule,
          ScrollerModule,
     ],
     exports: [
          ButtonModule,
          ToastModule,
          SidebarModule,
          DividerModule,
          SplitButtonModule,
          CarouselModule,
          ChipModule,
          TagModule,
          ScrollerModule,
     ],
})
export class PrimengModule {}
