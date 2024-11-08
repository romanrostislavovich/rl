import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export class Services {
  individual?: ServiceSingle;
  company?: ServiceSingle;
  group?: ServiceSingle;
  volunteering?: ServiceSingle;
}
export class ServiceSingle {
  inProgress?: boolean;
  items?: ServiceItem[]
}
export class ServiceItem {
  title?: string;
  inProgress?: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(
    private http: HttpClient,
  ) { }

  list(): Observable<Services> {
    return this.http.get('./assets/files/services.json');
  }

  static get defaultLang(): string {
    return 'ua';
  }
  languageList(): string[] {
    return [
      'ua',
      'en',
      'ru',
    ]
  }
}
