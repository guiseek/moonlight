import { Component } from '@angular/core';
import { AppService } from './app.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from './services/user.service';
import { Observable, map, startWith, switchMap } from 'rxjs';
import { Municipio } from './app.types';

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

  myControl = new FormControl<Municipio | string>('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<(Municipio)[]>;

  constructor(readonly service: AppService, readonly userService: UserService) {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      switchMap((value) => {
        const name = typeof value === 'string' ? value : value?.nome;
        return this._filter(name as string);
      })
    );
  }

  displayFn(municipio: Municipio): string {
    return municipio && municipio.nome ? municipio.nome : '';
  }

  private _filter(value: string) {
    const filterValue = value.toLowerCase();

    return this.service
      .municipios()
      .pipe(
        map((municipios) =>
          municipios.filter((option) =>
            option.nome.toLowerCase().includes(filterValue)
          )
        )
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
