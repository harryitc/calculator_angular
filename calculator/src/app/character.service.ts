import { Injectable } from '@angular/core';
import { CHARACTERS } from './mock-characters';
@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  characters = CHARACTERS
  message = ''

  lengthMessage(message: string): number {
    return message.length
  }
  clickMessage(id: number): string {
    this.message = this.characters[id - 1].char
    return this.message
  }
  clearMessage(message: string): string {
    message = ''
    return message
  }

  // plus
  characterPlus(message: string): number {
    console.log(`${message}`)
    let index = message.indexOf('+');
    if (index === -1) {
      return -1
    }
    let ketqua = 0
    let sum = 0
    for (let i = 0; i < message.length; i++) {
      if (message[i] === '+') {
        sum += ketqua

        ketqua = 0
        continue
      }
      ketqua = ketqua * 10 + parseInt(message[i])
      if (i === message.length - 1) {
        sum += ketqua
      }
    }
    return sum
  }



  constructor() { }


}
