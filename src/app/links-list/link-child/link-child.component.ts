import {Component, Input, OnInit} from '@angular/core';
import {Link} from '../link';

@Component({
  selector: 'app-link-child',
  templateUrl: './link-child.component.html',
  styleUrls: ['./link-child.component.scss']
})
export class LinkChildComponent implements OnInit {
  @Input() link: Link;
  constructor() { }

  ngOnInit() {
  }

}
