import { Component } from '@angular/core';

import { BanphimService } from '../banphim.service';

enum Button {
  Clear = 3,
  Submit = 24
}

@Component({
  selector: 'app-khung',
  templateUrl: './khung.component.html',
  styleUrls: ['./khung.component.scss']
})
export class KhungComponent {
  constructor(private banPhimService: BanphimService) {
  }
  message = ''
  result = 0

  recieveDataFromChildComponent(id: number) {
    // Nếu nhấn Clear thì xóa màn hình
    if (id === Button.Clear) {
      this.message = this.banPhimService.clearScreen()
      this.result = 0
      return;
    }

    // Nếu nhấn dấu '=' thì tính kết quả
    if (id === Button.Submit) {
      this.result = this.banPhimService.getResult(this.message)
      return;
    }

    // hiển thị message ra ngoài
    this.message += this.banPhimService.getCharacter(id)
  }
}
