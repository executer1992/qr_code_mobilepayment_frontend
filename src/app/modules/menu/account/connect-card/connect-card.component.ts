import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-connect-card',
  templateUrl: './connect-card.component.html',
  styleUrls: ['./connect-card.component.scss']
})
export class ConnectCardComponent {
  @Output() connect: EventEmitter<any> = new EventEmitter<any>();

  public connectCard(creditCardForm) {
    this.connect.emit(creditCardForm.value);
  }
}
