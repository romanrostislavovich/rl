import {Component, OnInit} from '@angular/core';
import {ServicesService} from "./services/services.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rl';
  list = {};

  activeTab = 'individual';
  constructor(
    private services: ServicesService
  ) {
  }

  ngOnInit(): void {
    this.list = this.services.list();
  }

  changeTab(name: string): void {
    this.activeTab = name;
  }

  get activeList(): any[] {
    // @ts-ignore
    return this.list[this.activeTab];
  }
}
