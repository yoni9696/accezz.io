import { Component, OnInit } from '@angular/core';
import {Activity} from './activity';
import {DataCollectorService} from '../data-collector.service';
@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.scss']
})
export class ActivityListComponent implements OnInit {
  activities: Activity[];
  constructor(private collector: DataCollectorService) { }

  ngOnInit() {
    this.getActivities();
  }

  getActivities(): void {
    this.collector.getActivities()
      .subscribe(activities => this.activities = activities);
  }

}
