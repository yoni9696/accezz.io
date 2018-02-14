import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Activity} from './activity-list/activity';
import {Observable} from 'rxjs/Observable';
import {Link} from './links-list/link';

@Injectable()
export class DataCollectorService {

  constructor(private http: HttpClient) { }

  getActivities(): Observable<Activity[]> {
    return this.http.get<Activity[]>('/javascripts/activities.json');
  }
  getLinks(): Observable<Link[]> {
    return this.http.get<Link[]>('/javascripts/links.json');
  }
}



