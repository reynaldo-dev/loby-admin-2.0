import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../../events/services/events.service';
import { IEventsAtDate } from '../../../events/interfaces/event.interface';
import { MenuItem } from 'primeng/api';
import { AllowedRoles } from 'src/app/shared/enums/allowed-roles.enum';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
     selector: 'app-home-screen',
     templateUrl: './home-screen.component.html',
     styleUrls: ['./home-screen.component.css'],
})
export class HomeScreenComponent implements OnInit {
     public items: MenuItem[] | [] = [];
     constructor(
          private eventsService: EventsService,
          private authService: AuthService
     ) {}

     ngOnInit(): void {
          if (this.authService.authState?.user?.role === AllowedRoles.SPONSOR) {
               this.items = [
                    {
                         label: 'Evento',
                         icon: 'pi pi-calendar-plus',
                         command: () => {
                              this.createEvent();
                         },
                    },
               ];
          }

          if (this.authService.authState?.user?.role === AllowedRoles.ADMIN) {
               this.items = [
                    {
                         label: 'Comunidad',
                         icon: 'pi pi-users',
                         command: () => {
                              this.createCommunity();
                         },
                    },
                    {
                         label: 'Evento',
                         icon: 'pi pi-calendar-plus',
                         command: () => {
                              this.createEvent();
                         },
                    },
               ];
          }
     }

     get eventsAtDate(): IEventsAtDate[] | null {
          return this.eventsService.eventsAtDate;
     }
     get activeEvents(): number | null {
          return this.eventsService.activeEvents;
     }

     get inactiveEvents(): number | null {
          return this.eventsService.inactiveEvents;
     }

     createEvent() {}

     createCommunity() {}
}
