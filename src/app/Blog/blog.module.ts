import { NgModule } from '@angular/core';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlogService } from './blog.service';
import { RouterModule } from '@angular/router';
import { BlogRoutingModule } from './blog-routing.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [BlogComponent, BlogDetailsComponent, CreateBlogComponent],
    imports: [FormsModule, ReactiveFormsModule, CommonModule, BlogRoutingModule, SharedModule],
    providers: [BlogService]
}
)
export class BlogModule {

}