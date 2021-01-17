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
  errors = {
    email: false,
    password: false
  }
  errorMessage = '';

  get validForm(): boolean {
    return !this.errors.email && !this.errors.password;
  }

  validateField(field?: 'email' | 'password'): void {
    if (!field) {
      this.errors.email = this.form.email === '';
      this.errors.password = this.form.password === '';
      return;
    }
    this.errors[field] = this.form[field] === '';
  }

  submit(): void {
    this.validateField();
    if (!this.validForm) {
      this.errorMessage = 'Incorrect email address or password. Please try again.';
      return;
    }

    console.log('Login attemtp.\nEmail: ', this.form.email, '\nPassword: ', this.form.password);
  }

  updateForm(field: 'email' | 'password', event: any): void {
    this.errorMessage = '';
    this.form = {
      ...this.form,
      [field]: event.target.value
    };
    this.validateField(field);
    console.log('form: ', this.form);
  }

  checkForEnter(event: any): void {
    if (event.key === 'Enter') {
      this.submit();
    }
  }
}
