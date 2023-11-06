import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './screens/login/login.component';

const routes: Routes = [
     {
          path: '',
          component: LayoutComponent,

          title: 'Auth',
          children: [
               {
                    path: 'login',
                    title: 'Login',
                    component: LoginComponent,
                    canActivate: [],
               },
          ],
     },
];

@NgModule({
     imports: [RouterModule.forChild(routes)],
     exports: [RouterModule],
})
export class AuthRoutingModule {}
