import { Component } from '@angular/core';
import { AppService } from './app.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from './services/user.service';

@Component({
  selector: 'moonlight-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'front-end';

  api$ = this.service.get();

  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  constructor(
    readonly service: AppService,
    readonly userService: UserService
  ) {}

  hasError<K extends keyof typeof this.form.controls>(
    key: K, code: string
  ) {
    const control = this.form.controls[key];
    return control.hasError(code) && control.touched;
  }

  onSubmit() {
    // prettier-ignore
    this.userService
      .create(this.form.value)
      .subscribe(console.log);
    if (!this.form.valid) {
    }

    this.form.markAllAsTouched();
  }
}
