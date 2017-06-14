import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Person } from './person.type';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MyServiceService {


  constructor(private readonly http: Http) { }

  getPeople(): Observable<Array<Person>> {
    return this.http.get('../assets/data.json')
          .map(res => res.json())
          .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
