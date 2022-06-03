import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form!: FormGroup;
  public formInvalid!: boolean;
  public emailLocalStorage!: any;

  constructor(private _formBuilder: FormBuilder,
    private _router: Router,
    private _loginService: LoginService) { }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
    });
    this.emailLocalStorage = localStorage.getItem('email');
  }

  public onSubmit() {
    if (this.form.valid) {
      if (this.form.value.email == this.emailLocalStorage) {
        this._loginService.isLoggedIn = true;
        this._router.navigate(['/privado']);
        this.formInvalid = false;
        return
      }
    }
    this.formInvalid = true;
  }

}
