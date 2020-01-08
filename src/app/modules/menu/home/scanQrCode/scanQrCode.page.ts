import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scan-qr-code',
  templateUrl: './scanQrCode.page.html',
  styleUrls: ['./scanQrCode.page.scss']
})
export class ScanQrCodePage implements OnInit {
  public scannedCode = null;
  constructor(private barcodeScanner: BarcodeScanner) {}

  ngOnInit() {}

  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
    });
  }
}
