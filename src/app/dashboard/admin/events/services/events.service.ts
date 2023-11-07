import { Injectable } from '@angular/core';
import { IEventsAtDate } from '../interfaces/event.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable({
     providedIn: 'root',
})
export class EventsService {
     private _eventsAtDate!: IEventsAtDate[] | null;
     private _headers!: HttpHeaders;
     private _activeEvents!: number | null;
     private _inactiveEvents!: number | null;

     constructor(private http: HttpClient) {
          this._headers = new HttpHeaders({
               Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          });

          this.getEventsAtDate(new Date().toISOString()).subscribe();
          this.getActiveEventsCount().subscribe();
          this.getInActiveEventsCount().subscribe();
     }

     get eventsAtDate(): IEventsAtDate[] | null {
          return this._eventsAtDate;
     }

     get activeEvents(): number | null {
          return this._activeEvents;
     }

     get inactiveEvents(): number | null {
          return this._inactiveEvents;
     }

     getEventsAtDate(date: string): Observable<IEventsAtDate[]> {
          return this.http
               .get<IEventsAtDate[]>(
                    `${environment.apiUrl}/events/at-date?fromDate=${date}`,
                    {
                         headers: this._headers,
                    }
               )
               .pipe(
                    tap((res) => {
                         this._eventsAtDate = res;
                    })
               );
     }

     getActiveEventsCount() {
          return this.http
               .get<{ activeEvents: number }>(
                    `${environment.apiUrl}/events/active-events`,
                    {
                         headers: this._headers,
                    }
               )
               .pipe(
                    tap((data) => {
                         this._activeEvents = data.activeEvents;
                    }),
                    catchError((err) => {
                         return throwError(() => err.error.message);
                    })
               );
     }

     getInActiveEventsCount() {
          return this.http
               .get<{ inactiveEvents: number }>(
                    `${environment.apiUrl}/events/inactive-events`,
                    {
                         headers: this._headers,
                    }
               )
               .pipe(
                    tap((data) => {
                         this._inactiveEvents = data.inactiveEvents;
                    }),
                    catchError((err) => {
                         return throwError(() => err.error.message);
                    })
               );
     }
}
