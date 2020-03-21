import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ClickMessageDirective } from './click-message.directive';
import { IpxTextboxComponent } from './controls/ipx-textbox/ipx-textbox.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ClickMessageDirective, IpxTextboxComponent],
  imports: [
    FormsModule,
    CommonModule, RouterModule
  ],
  exports:[HeaderComponent, FooterComponent, ClickMessageDirective, IpxTextboxComponent]
})
export class SharedModule { }
