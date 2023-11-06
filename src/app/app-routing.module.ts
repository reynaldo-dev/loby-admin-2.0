import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { publicGuard } from './auth/guards/public.guard';
import { authGuard } from './auth/guards/auth.guard';
import { roleGuard } from './auth/guards/role.guard';
import { AllowedRoles } from './shared/enums/allowed-roles.enum';

const routes: Routes = [
     {
          path: '',
          redirectTo: 'auth/login',
          pathMatch: 'full',
     },
     {
          path: 'auth',
          canActivate: [publicGuard],
          loadChildren: () =>
               import('./auth/auth.module').then((m) => m.AuthModule),
     },

     {
          path: 'dashboard',
          canActivate: [authGuard, roleGuard],
          data: {
               expectedRole: [AllowedRoles.ADMIN, AllowedRoles.SPONSOR],
          },

          loadChildren: () =>
               import('./dashboard/admin/admin.module').then(
                    (m) => m.AdminModule
               ),
     },
];

@NgModule({
     imports: [RouterModule.forRoot(routes)],
     exports: [RouterModule],
})
export class AppRoutingModule {}
