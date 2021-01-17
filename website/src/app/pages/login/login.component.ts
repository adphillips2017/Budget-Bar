import { Component, HostBinding } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @HostBinding('class') readonly clsName = 'app-login';
  form = {
    email: '',
    password: ''
  }

  validateForm(): void {
  }

  submit(): void {
  }

  updateForm(field: string, event: any): void {
    this.validateForm();
    this.form = {
      ...this.form,
      [field]: event.target.value
    };
    console.log('form: ', this.form);
  }
}
