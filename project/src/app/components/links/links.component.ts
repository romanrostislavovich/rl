import {Component, OnInit} from '@angular/core';
import {ServicesService} from "../../services/services.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {

  constructor(
    public translate: TranslateService,
    public service: ServicesService,
  ) {
  }

  ngOnInit() {

    console.log(this.translate.currentLang)
  }

  onChangeLang(lang: string) {
    this.translate.use(lang);
  }
}
