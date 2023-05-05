import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { AppService } from './app.service';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService, UserServiceImpl, Http } from './services';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
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
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
