import { Component } from '@angular/core';
import { AppService } from './app.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from './services/user.service';
import { Observable, map, startWith } from 'rxjs';

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

  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  constructor(readonly service: AppService, readonly userService: UserService) {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }

  buscaEstados(name: string) {
    return this
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  hasError<K extends keyof typeof this.form.controls>(key: K, code: string) {
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
