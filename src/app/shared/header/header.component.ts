import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title: string;

  constructor(private translate: TranslateService) {}


  ngOnInit() {}

  isEn = true;

  useLanguage() {
    this.isEn = !this.isEn;
    this.isEn ? this.translate.use('en') : this.translate.use('pl');
  }
}
