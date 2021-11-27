import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { LoginRequest } from '../../models/LoginRequest.model';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent { 

    form: FormGroup = this.fb.group({
        user: [null, [Validators.required]],
        password: [null, [Validators.required, Validators.minLength(6)]]
    });

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router
      ) { }

    login(): void {
        const { user, password } = this.form.value;
        const request: LoginRequest = {
            User_Code: user,
            User_Password: password,
            Token: '',
            Device: ''
        }
        this.authService.login(request)
            .subscribe(data => {
                    localStorage.setItem('token', data.token!);
                    this.router.navigate(['/sucursales']);
            },
            () => {
                Swal.fire('Error', 'Usuario o contraseña incorrecta.', 'error')
            });
    }
}