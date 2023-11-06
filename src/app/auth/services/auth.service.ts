import { Injectable } from '@angular/core';
import { IAuthState, ILoginResponse } from '../interfaces/auth-state.interface';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, of, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
     providedIn: 'root',
})
export class AuthService {
     private _authState: IAuthState = {
          isAuthenticated: false,
          user: null,
     };
     private lastRoute = localStorage.getItem('url') || '/dashboard/home';
     private _headers!: HttpHeaders;

     constructor(private router: Router, private http: HttpClient) {
          this._headers = new HttpHeaders({
               Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          });

          this.whoAmI().subscribe();
     }

     get authState(): IAuthState | null {
          return this._authState;
     }

     login(email: string, password: string): Observable<boolean> {
          const payload = { email, password };

          return this.http
               .post<ILoginResponse>(`${environment.apiUrl}/auth`, payload)
               .pipe(
                    tap((res) => {
                         this._authState.user = res.user;
                         this._authState.isAuthenticated = true;
                         localStorage.setItem('access_token', res.access_token);
                    }),
                    tap(() => {
                         this.router.navigateByUrl(this.lastRoute);
                    }),
                    map(() => true),

                    catchError((err) => {
                         console.log('err', err);
                         return throwError(() => err.error.message);
                    })
               );
     }

     whoAmI() {
          return this.http
               .get<ILoginResponse>(`${environment.apiUrl}/auth/whoami`, {
                    headers: this._headers,
               })
               .pipe(
                    tap((res) => {
                         this._authState.user = res.user;
                         this._authState.isAuthenticated = true;
                    }),
                    tap(() => {
                         this.router.navigateByUrl(this.lastRoute);
                    }),
                    map(() => true),
                    catchError((err) => {
                         console.log(err);
                         return of(false);
                    })
               );
     }

     logout() {
          localStorage.removeItem('access_token');
          localStorage.removeItem('url');

          this._authState = {
               isAuthenticated: false,
               user: null,
          };

          this.router.navigate(['auth/login']);
     }
}
