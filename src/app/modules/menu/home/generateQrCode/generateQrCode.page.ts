import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generate-qr-code',
  templateUrl: './generateQrCode.page.html',
  styleUrls: ['./generateQrCode.page.scss']
})
export class GenerateQrCodePage implements OnInit {
  public qrData = null;
  public createdCode = null;
  constructor() {}

  ngOnInit() {}

  createCode() {
    this.createdCode = this.qrData;
  }
}
