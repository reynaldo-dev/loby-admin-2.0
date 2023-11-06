import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { DividerModule } from 'primeng/divider';

import { ToastModule } from 'primeng/toast';

@NgModule({
     declarations: [],
     imports: [
          CommonModule,
          ButtonModule,
          ToastModule,
          SidebarModule,
          DividerModule,
     ],
     exports: [ButtonModule, ToastModule, SidebarModule, DividerModule],
})
export class PrimengModule {}
