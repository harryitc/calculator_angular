import { Injectable } from '@angular/core';
import * as math from 'mathjs';
import { CauTrucBanPhim } from './CauTrucBanPhim';

@Injectable({
  providedIn: 'root'
})
export class BanphimService {

  constructor() { }

  listBanPhim: CauTrucBanPhim[] = [
    // row 1
    { id: 1, name: '%' }, { id: 2, name: 'CE' },
    { id: 3, name: 'Clear' }, { id: 4, name: 'Delete' },

    // row 2
    { id: 5, name: '1/x' }, { id: 6, name: 'x^2' },
    { id: 7, name: 'sqrt(' }, { id: 8, name: '/' },

    // row 3
    { id: 9, name: '7' }, { id: 10, name: '8' },
    { id: 11, name: '9' }, { id: 12, name: '*' },

    // row 4
    { id: 13, name: '4' }, { id: 14, name: '5' },
    { id: 15, name: '6' }, { id: 16, name: '-' },

    // row 5
    { id: 17, name: '1' }, { id: 18, name: '2' },
    { id: 19, name: '3' }, { id: 20, name: '+' },

    // row 6
    { id: 21, name: '+/-' }, { id: 22, name: '0' },
    { id: 23, name: '.' }, { id: 24, name: '=' }
  ]

  // lấy danh sách bàn phím
  getListBanPhim(): CauTrucBanPhim[] {
    return this.listBanPhim
  }

  getCharacter(id: number): string {
    return this.listBanPhim[id - 1].name
  }

  // tính kết quả khi nhập số
  getResult(message: string): number {
    return math.evaluate(message)
  }

  // xóa màn hình
  clearScreen(): string {
    return ''
  }


}
