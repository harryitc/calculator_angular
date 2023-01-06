import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-man-hinh',
  templateUrl: './man-hinh.component.html',
  styleUrls: ['./man-hinh.component.scss']
})
export class ManHinhComponent {

  // pass data from parent to child component
  @Input() message = ''
  @Input() result?: number
  constructor() { }

}
