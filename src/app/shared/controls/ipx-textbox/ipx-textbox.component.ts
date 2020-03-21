import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'ipx-textbox',
  templateUrl: './ipx-textbox.component.html',
  styleUrls: ['./ipx-textbox.component.scss']
})
export class IpxTextboxComponent implements OnInit {

  @Output() changeEv = new EventEmitter<any>();
  value: any;
  constructor() { }

  // writeValue(obj: any): void {
  //   throw new Error("Method not implemented.");
  // }
  // registerOnChange(fn: any): void {
  //   throw new Error("Method not implemented.");
  // }
  // registerOnTouched(fn: any): void {
  //   throw new Error("Method not implemented.");
  // }
  // setDisabledState?(isDisabled: boolean): void {
  //   throw new Error("Method not implemented.");
  // }

  ngOnInit() {
    this.value = {
      key: 123,
      code: '123'
    }
  }

  onChange(event) {
    this.value.code = event.target.value;
    this.changeEv.emit(this.value);
    console.log(event);
  }

}
