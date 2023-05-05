import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Http, UserService, UserServiceImpl } from './services';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppService } from './app.service';
import { ReactiveFormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      declarations: [AppComponent],
      providers: [
        {
          provide: Http,
          useClass: HttpClient,
        },
        {
          provide: AppService,
          useClass: AppService,
          deps: [Http],
        },
        {
          provide: UserService,
          useClass: UserServiceImpl,
          deps: [Http],
        },
      ]
    }).compileComponents();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(
      compiled.querySelector('h1')?.textContent
    ).toContain(
      'Welcome front-end'
    );
  });

  it('should display errors', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    let compiled = fixture.nativeElement as HTMLElement;

    let output = compiled.querySelector('output')
    expect(output).toBeNull()

    app.onSubmit()

    fixture.detectChanges();

    output = compiled.querySelector('output')
    expect(output).toBeInstanceOf(HTMLOutputElement)

  })

  it('should display errors', () => {


    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    jest.spyOn(app.userService, 'create')

    app.form.setValue({
      username: 'demo',
      password: '123456'
    })

    app.onSubmit()

    expect(app.userService.create).toHaveBeenCalledWith({
      username: 'demo',
      password: '123456'
    })

  })

  it(`should have as title 'front-end'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('front-end');
  });
});
