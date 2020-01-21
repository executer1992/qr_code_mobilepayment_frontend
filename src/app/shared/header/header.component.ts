import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() title: string;

  constructor(private translate: TranslateService) {}

  public isEnglish: boolean = true;

  useLanguage() {
    this.isEnglish = !this.isEnglish;
    this.isEnglish ? this.translate.use('en') : this.translate.use('pl');
  }
}
