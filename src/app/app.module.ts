import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, canLoadService } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopularPostComponent } from './shared/popular-post/popular-post.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './users/register/register.component';
import { LoginComponent } from './users/login/login.component';
import { UserService } from './users/user.service';
import { AuthGuard } from './core/auth.guard';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BlogModule } from './Blog/blog.module';
import { SharedModule } from './shared/shared.module';
import { BlogService } from './Blog/blog.service';
import { HttpErrorInterceptor } from './core/error.interceptor';
import { AuthInterceptor } from './core/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    PopularPostComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule

  ],
  exports: [],
  providers: [
    UserService,
    AuthGuard,
    BlogService,
    canLoadService,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: HttpErrorInterceptor,
    //   multi: true,
    // },
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
