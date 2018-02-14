import { Component, OnInit } from '@angular/core';
import {Link} from './link';
import {DataCollectorService} from '../data-collector.service';

@Component({
  selector: 'app-links-list',
  templateUrl: './links-list.component.html',
  styleUrls: ['./links-list.component.scss']
})
export class LinksListComponent implements OnInit {
  links: Link[];
  constructor(private collector: DataCollectorService) { }

  ngOnInit() {
    this.getLinks();
  }

  getLinks(): void {
    this.collector.getLinks()
      .subscribe(links => this.links = links);
  }
}
