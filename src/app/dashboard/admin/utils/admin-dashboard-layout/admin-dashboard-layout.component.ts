import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { SidebarService } from 'src/app/shared/services/sidebar.service';

@Component({
     selector: 'app-admin-dashboard-layout',
     templateUrl: './admin-dashboard-layout.component.html',
     styleUrls: ['./admin-dashboard-layout.component.css'],
})
export class AdminDashboardLayoutComponent {
     constructor(
          private sidebarService: SidebarService,
          private authService: AuthService
     ) {}

     get isVisible(): boolean {
          return this.sidebarService.isOpen;
     }

     handleToggleMenu() {
          this.sidebarService.handleToggleMenu();
     }

     logout() {
          this.authService.logout();
     }
}
