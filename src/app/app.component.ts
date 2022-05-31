import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { tree, treemap } from 'd3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  title = 'D3';
  
  constructor(){}

  ngOnInit(): void {
    
  }
}