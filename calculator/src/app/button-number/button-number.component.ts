import { Component } from '@angular/core';
import { characters } from '../mock-characters';
@Component({
  selector: 'app-button-number',
  templateUrl: './button-number.component.html',
  styleUrls: ['./button-number.component.scss']
})
export class ButtonNumberComponent {

  characters = characters
  constructor() { }
}
