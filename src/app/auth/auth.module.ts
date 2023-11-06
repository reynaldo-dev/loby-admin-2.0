import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './screens/login/login.component';
import { PrimengModule } from '../primeng/primeng.module';

@NgModule({
     declarations: [LayoutComponent, LoginComponent],
     imports: [
          CommonModule,
          PrimengModule,
          AuthRoutingModule,
          ReactiveFormsModule,
     ],
})
export class AuthModule {}
