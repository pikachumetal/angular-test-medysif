import { Component } from '@angular/core';
import { MyServiceService } from './my-service.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Person } from './person.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  people: Person[];

  constructor(private readonly service: MyServiceService) {
    this.service.getPeople().subscribe(people => this.people = people);
  }
}
