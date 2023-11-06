import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AuthService } from '../../services/auth.service';

@Component({
     selector: 'app-login',
     templateUrl: './login.component.html',
     styleUrls: ['./login.component.css'],
     providers: [MessageService],
})
export class LoginComponent {
     public loginForm = this.fb.group({
          email: ['reynaldo@gmail.com', Validators.required],
          password: ['12345678', Validators.required],
     });

     constructor(
          private fb: FormBuilder,
          private messageService: MessageService,
          private authService: AuthService
     ) {}

     login() {
          this.authService
               .login(
                    this.loginForm.value.email as string,
                    this.loginForm.value.password as string
               )
               .subscribe({
                    error: (err) => {
                         this.messageService.add({
                              severity: 'error',
                              summary: 'Error',
                              detail: err,
                         });
                    },
               });
     }
}
