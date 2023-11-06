import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardLayoutComponent } from './utils/admin-dashboard-layout/admin-dashboard-layout.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PrimengModule } from 'src/app/primeng/primeng.module';

@NgModule({
     declarations: [AdminDashboardLayoutComponent],
     imports: [
          AdminRoutingModule,
          CommonModule,
          HomeModule,
          SharedModule,
          PrimengModule,
     ],
     exports: [AdminDashboardLayoutComponent],
})
export class AdminModule {}
