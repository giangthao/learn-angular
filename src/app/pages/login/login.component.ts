import { Component, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { LoginDTO } from '../../dtos/user/login.dto';
import { NgForm } from '@angular/forms';
import { LoginResponse } from '../../responses/user/login.response';
import { Router } from '@angular/router';
import { TokenService } from '../../services/token.service';

@Component({
      selector: 'app-login',
      templateUrl: './login.component.html',
      styleUrl: './login.component.scss',
})
export class LoginComponent {
      @ViewChild('loginForm') loginForm!: NgForm;
      phoneNumber: string;
      password: string;

      isShowFormLoginInMobile: boolean = false;

      constructor(private userService: UserService, private router: Router, private tokenService: TokenService) {
            // this.phoneNumber = '123456789';
            // this.password = 'admin';
            this.phoneNumber = '';
            this.password = '';
      }
      onPhoneNumberChange() {}

      login() {
            const loginDTO: LoginDTO = {
                  phone_number: this.phoneNumber,
                  password: this.password,
            };

            this.userService.login(loginDTO).subscribe({
                  next: (response: LoginResponse) => {
                        console.log(response);
                        debugger;
                        if (response) {
                              let token = response.token;

                              this.tokenService.setToken(token);

                              //  this.router.navigate(['/']);
                        }
                  },
                  complete: () => {
                        debugger;
                  },
                  error: (error: any) => {
                        debugger;
                        console.error('Error register: ', error);
                  },
            });
      }

      toggleShowFormLoginInMobile() {
            this.isShowFormLoginInMobile = true;
      }
}
