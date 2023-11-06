import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { AdminRoutingModule } from '../dashboard/admin/admin-routing.module';

@NgModule({
     declarations: [LayoutComponent, SidebarComponent],
     imports: [CommonModule, RouterModule],
})
export class SharedModule {}
