import {BarcodeScanner }from '@ionic-native/barcode-scanner/ngx'; 
import {NgModule }from '@angular/core'; 
import {CommonModule }from '@angular/common'; 
import {FormsModule }from '@angular/forms'; 

import {IonicModule }from '@ionic/angular'; 

import {ScanQrCodePageRoutingModule }from './scanQrCode-routing.module'; 

import {ScanQrCodePage }from './scanQrCode.page'; 

@NgModule( {
imports:[CommonModule, FormsModule, IonicModule, ScanQrCodePageRoutingModule], 
declarations:[ScanQrCodePage], 
providers:[BarcodeScanner]
})
export class ScanQrCodePageModule {}
