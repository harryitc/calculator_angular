import { Component } from '@angular/core';
import { CHARACTERS } from '../mock-characters';
import { CharacterService } from '../character.service';
@Component({
  selector: 'app-button-number',
  templateUrl: './button-number.component.html',
  styleUrls: ['./button-number.component.scss']
})
export class ButtonNumberComponent {

  message = ''
  clickMessage = ''
  sum = 0
  characters = CHARACTERS

  onClick(id: number): void {
    if (id === 3) {
      this.message = this.characterService.clearMessage(this.message)
      this.sum = 0
      return;
    }
    // submit =
    if (id === 24) {
      this.sum = this.characterService.characterPlus(this.message)
      return;
      // if (this.characters[id - 1].char === '-') {
      //   this.sum = this.characterService.characterMinus(this.message)
      // }
      // if (this.characters[id - 1].char === 'x') {
      //   this.sum = this.characterService.characterProvide(this.message)
      // }
      // if (this.characters[id - 1].char === '/') {
      //   this.sum = this.characterService.characterDivide(this.message)
      // }
    }
    // click message
    this.showClickMessage(id)

  }

  showClickMessage(id: number): void {
    this.clickMessage = this.characterService.clickMessage(id)
    this.message += this.clickMessage
  }

  constructor(private characterService: CharacterService) { }


}
