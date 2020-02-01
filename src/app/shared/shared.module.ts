import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ClickMessageDirective } from './click-message.directive';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ClickMessageDirective],
  imports: [
    CommonModule, RouterModule
  ],
  exports:[HeaderComponent, FooterComponent, ClickMessageDirective]
})
export class SharedModule { }
