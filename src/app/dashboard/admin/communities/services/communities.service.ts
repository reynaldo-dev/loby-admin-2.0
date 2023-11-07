import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICommunity } from '../interfaces/community.interface';
import { environment } from 'src/environments/environment';
import { catchError, tap, throwError } from 'rxjs';

@Injectable({
     providedIn: 'root',
})
export class CommunitiesService {
     private _headers!: HttpHeaders;
     private _communities: ICommunity[] | [] = [];

     constructor(private http: HttpClient) {
          this._headers = new HttpHeaders({
               Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          });

          this.getCommunities().subscribe();
     }

     get communities(): ICommunity[] {
          return this._communities;
     }

     getCommunities() {
          return this.http
               .get<ICommunity[]>(
                    `${environment.apiUrl}/communities?withUsers=true`
               )
               .pipe(
                    tap((res) => {
                         this._communities = res;
                         console.log(this._communities);
                    }),
                    catchError((err) => {
                         return throwError(() => err.error.message);
                    })
               );
     }
}
