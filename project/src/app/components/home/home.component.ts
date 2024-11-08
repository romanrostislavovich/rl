import {Component, OnInit} from '@angular/core';
import {Tab} from "../../enums/tab";
import {Services, ServiceSingle, ServicesService} from "../../services/services.service";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements  OnInit {
  title = 'rl';
  list: Services = {};

  activeList?: ServiceSingle = {}
  servicesTabs = Tab;
  activeServiceTab: Tab = Tab.individual;
  constructor(
    private dialog: MatDialog,
    private services: ServicesService,
  ) {
  }

  ngOnInit(): void {
    this.services.list().subscribe((data) => {
      console.log(data);
      this.list = data;
      this.activeList = this.list[Tab.individual];
    });
  }

  openDetailsPopup() {

  }

  changeTab(name: Tab): void {
    this.activeServiceTab = name;
    this.activeList = this.list[name];
  }
}
