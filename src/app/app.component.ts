import { Component } from '@angular/core';
import { DataService } from './data.service';
import {NGXLogger} from 'ngx-logger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Twitter trends of my location ';
  cards = {};
  trends = [];

  constructor(private dataService: DataService,
              private logger: NGXLogger) { }


  ngOnInit() {

    this.dataService.sendGetRequest().subscribe((data: any[])=>{
      const response = data[0]
      this.cards = response;
      this.trends = response.trends;
    })  
  }
}
