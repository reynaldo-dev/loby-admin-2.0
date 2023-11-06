import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { AllowedRoles } from 'src/app/shared/enums/allowed-roles.enum';
import { IRoute } from '../../interfaces/route.interface';
import { SidebarService } from 'src/app/shared/services/sidebar.service';

@Component({
     selector: 'home-sidebar',
     templateUrl: './sidebar.component.html',
     styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
     @Input()
     isVisible: boolean = false;

     public routes: IRoute[] = [];

     constructor(
          private authService: AuthService,
          private sidebarService: SidebarService
     ) {}

     get authState() {
          return this.authService.authState;
     }
     ngOnInit(): void {
          if (
               this.authState?.user &&
               this.authState?.user.role === AllowedRoles.ADMIN
          ) {
               this.routes = [
                    {
                         name: 'Inicio',
                         icon: 'pi pi-home mr-4',
                         path: '/dashboard/inicio',
                    },
                    {
                         name: 'Usuarios',
                         icon: 'pi pi-user mr-4',
                         path: '/dashboard/usuarios',
                    },
                    {
                         name: 'Eventos',
                         icon: 'pi pi-calendar-plus mr-4',
                         path: '/dashboard/eventos',
                    },
                    {
                         name: 'Retos',
                         icon: 'pi pi-check-circle mr-4',
                         path: '/dashboard/retos',
                    },
                    {
                         name: 'Comunidades',
                         icon: 'pi pi-users mr-4',
                         path: '/dashboard/comunidades',
                    },

                    {
                         name: 'Cupones',
                         icon: 'pi pi-ticket mr-4',
                         path: '/dashboard/cupones',
                    },
                    {
                         name: 'Alianzas',
                         icon: 'pi pi-th-large mr-4',
                         path: '/dashboard/alianzas',
                    },
                    {
                         name: 'Canjeables',
                         icon: 'pi pi-gift mr-4',
                         path: '/dashboard/canjeables',
                    },
               ];
          }

          if (
               this.authState?.user &&
               this.authState.user.role === AllowedRoles.SPONSOR
          ) {
               this.routes = [
                    {
                         name: 'Inicio',
                         icon: 'pi pi-home mr-4',
                         path: '/dashboard/inicio',
                    },
                    {
                         name: 'Eventos',
                         icon: 'pi pi-calendar-plus mr-4',
                         path: '/dashboard/eventos',
                    },
               ];
          }
     }

     handleToggleMenu() {
          this.sidebarService.handleToggleMenu();
     }

     logout() {
          this.authService.logout();
     }
}
