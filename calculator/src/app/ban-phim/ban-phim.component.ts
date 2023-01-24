import { Component, OnInit } from '@angular/core';
import { BanphimService } from '../banphim.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ban-phim',
  templateUrl: './ban-phim.component.html',
  styleUrls: ['./ban-phim.component.scss']
})
export class BanPhimComponent {
  constructor(private banPhimService: BanphimService) { }

  // lấy danh sách bàn phím và hiển thị ra
  listBanPhim = this.banPhimService.getListBanPhim()

  // ouput ID
  @Output() getIdByClick = new EventEmitter<number>()

  // lấy dữ liệu khi nhấn click
  getDataFromChildComponent_inHere(id: number) {
    this.getIdByClick.emit(id)
  }

}
