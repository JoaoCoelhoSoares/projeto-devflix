import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-esqueci-senha',
  templateUrl: './esqueci-senha.component.html',
  styleUrls: ['./esqueci-senha.component.scss']
})
export class EsqueciSenhaComponent implements OnInit {
  public form!: FormGroup;
  public formInvalid!: boolean;

  constructor(private _formBuilder: FormBuilder,
    private _router: Router) { }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      email: [null, [Validators.required, Validators.email]]
    })
  }

  public onSubmit() {
    if (this.form.valid) {
      this._router.navigate(['../home']);
      this.formInvalid = false;
      return;
    }
    this.formInvalid = true;
  }

}
