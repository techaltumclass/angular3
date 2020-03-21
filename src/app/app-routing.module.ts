import { NgModule, Injectable } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { RegisterComponent } from './users/register/register.component';
import { LoginComponent } from './users/login/login.component'
import { AuthGuard } from './core/auth.guard';
import { AuthInterceptor } from './core/auth.interceptor';
import { CreateBlogComponent } from './Blog/create-blog/create-blog.component';

@Injectable()
export class canLoadService {

  canLoad() {
    return false;
  }
}

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "contact",
    component: ContactComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'blogs',
    loadChildren: './Blog/blog.module#BlogModule'
  },
  {
    path: '**',
    component: LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

