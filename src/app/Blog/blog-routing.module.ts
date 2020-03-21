import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BlogComponent } from './blog/blog.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { AuthGuard } from '../core/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: BlogComponent,
        canActivateChild: [AuthGuard],
        children: [
            {
                path: 'blogDetails',
                component: BlogDetailsComponent
            },
            {
                path: 'create-new-blog',
                component: CreateBlogComponent
            }
        ]
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BlogRoutingModule { }
