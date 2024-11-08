import {Component, OnInit} from '@angular/core';
import {ServiceItem, Services, ServiceSingle, ServicesService} from "./services/services.service";
import {Tab} from "./enums/tab";
import {MatDialog} from "@angular/material/dialog";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rl';
  list: Services = {};

  activeList?: ServiceSingle = {}
  servicesTabs = Tab;
  activeServiceTab: Tab = Tab.volunteering;
  constructor(
    private dialog: MatDialog,
    private translate: TranslateService,
    private services: ServicesService,
  ) {
  }

  ngOnInit(): void {
    this.translate.use(ServicesService.defaultLang);
  }

}
