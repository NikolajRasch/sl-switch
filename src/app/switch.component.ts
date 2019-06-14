import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'switch',
  templateUrl: './switch.component.html',
  styleUrls: [ './switch.component.scss' ]
})
export class SwitchComponent  {
  @Input() title: string = 'title';
  @Input() value: boolean = false;
  @Output() change: EventEmitter<any> = new EventEmitter();
}
