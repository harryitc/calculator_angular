import { Component, OnInit } from '@angular/core';
import { BanphimService } from '../banphim.service';
import * as math from 'mathjs';

enum Button {
  clear = 3,
  submit = 24
}

@Component({
  selector: 'app-ban-phim',
  templateUrl: './ban-phim.component.html',
  styleUrls: ['./ban-phim.component.scss']
})
export class BanPhimComponent implements OnInit {
  constructor(private banPhimService: BanphimService) {
  }
  ngOnInit(): void {
  }

  // lấy danh sách bàn phím và hiển thị ra
  listBanPhim = this.banPhimService.getListBanPhim()

  // khai báo biến lấy 1 ký tự khi nhập vào
  getCharClick?: string
  // hiển thị message ra ngoài
  message = ''
  // hiển thị kết quả
  result?: number

  // event khi nhấn
  onClick(id: number): void {
    // Nhấn 1 button sẽ truyền id vào
    // Nếu id trùng với button clear thì -> xóa màn hình
    if (id === Button.clear) {
      this.message = this.banPhimService.clearScreen()
      this.result = this.message.length
      return;
    }

    // Nếu id trùng với nút BẰNG (hay còn gọi là nút submit tính toán)
    // thì sẽ in ra kết quả
    if (id === Button.submit) {
      this.result = math.evaluate(this.message)
      return;
    }

    // thêm vào message -> hiển thị
    this.message += this.banPhimService.showMessageOnScreen(id)
  }

}
