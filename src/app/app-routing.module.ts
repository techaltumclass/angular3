import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { BlogComponent } from "./Blog/blog/blog.component";
import { BlogDetailsComponent } from "./Blog/blog-details/blog-details.component";
import { ContactComponent } from "./contact/contact.component";
import { CreateBlogComponent } from './Blog/create-blog/create-blog.component';
import { RegisterComponent } from './users/register/register.component';
import{LoginComponent} from './users/login/login.component'
import { AuthGuard } from './core/auth.guard';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "blogs-list",
    component: BlogComponent
  },
  {
    path: "blogDetails/:id",
    component: BlogDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "create-new-blog",
    component: CreateBlogComponent,
    canActivate: [AuthGuard]
  },
  {
    path:"blogs-list/update-blog/:id",  
    component:CreateBlogComponent
  },
  {
     path:'register',
     component:RegisterComponent,
  },
  {
    path:'login',
    component:LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
