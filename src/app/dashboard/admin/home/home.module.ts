import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';

import { RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PrimengModule } from 'src/app/primeng/primeng.module';

@NgModule({
     declarations: [HomeScreenComponent, SidebarComponent],
     imports: [CommonModule, RouterModule, PrimengModule],
     exports: [HomeScreenComponent, SidebarComponent],
})
export class HomeModule {}
