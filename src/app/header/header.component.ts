import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header', /* has to be app-header to be unique; header is an HTML component */
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
