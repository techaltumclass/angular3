import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PopularPostComponent } from './shared/popular-post/popular-post.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './Blog/blog/blog.component';
import { BlogDetailsComponent } from './Blog/blog-details/blog-details.component';
import { ContactComponent } from './contact/contact.component';
import { CreateBlogComponent } from './Blog/create-blog/create-blog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlogService } from './Blog/blog.service';
import { RegisterComponent } from './users/register/register.component';
import{LoginComponent} from './users/login/login.component';
import { UserService } from './users/user.service';
import { AuthGuard } from './core/auth.guard';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PopularPostComponent,
    HomeComponent,
    BlogComponent,
    BlogDetailsComponent,
    ContactComponent,
    LoginComponent,
    CreateBlogComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    BlogService,
    UserService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
