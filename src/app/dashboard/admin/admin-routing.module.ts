import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeScreenComponent } from './home/screens/home-screen/home-screen.component';
import { AdminDashboardLayoutComponent } from './utils/admin-dashboard-layout/admin-dashboard-layout.component';

const routes: Routes = [
     {
          path: '',
          component: AdminDashboardLayoutComponent,
          title: 'Admin',
          children: [
               {
                    path: 'home',
                    title: 'Home',
                    component: HomeScreenComponent,
               },
          ],
     },
];

@NgModule({
     imports: [RouterModule.forChild(routes)],
     exports: [RouterModule],
})
export class AdminRoutingModule {}
