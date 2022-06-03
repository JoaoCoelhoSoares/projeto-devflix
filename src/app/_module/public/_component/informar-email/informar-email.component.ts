import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-informar-email',
  templateUrl: './informar-email.component.html',
  styleUrls: ['./informar-email.component.scss']
})
export class InformarEmailComponent implements OnInit {

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
      localStorage.setItem('email', this.form.value.email);
      this._router.navigate(['../home']);
      this.formInvalid = false;
      return;
    }
    this.formInvalid = true;
  }

}
