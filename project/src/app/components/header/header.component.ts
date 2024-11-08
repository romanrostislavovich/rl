import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {ServicesService} from "../../services/services.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(
    public translate: TranslateService,
    public service: ServicesService,
  ) {
  }


  onChangeLang(lang: string) {
    this.translate.use(lang);
  }
}
