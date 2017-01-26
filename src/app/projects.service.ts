import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class ProjectsService {

  constructor(private http: Http) { }

  getProjects(): Observable<any[]>{
    const token = 'bRgNN9ygYv8Q8nWqxR7A';
    return this.http
      .get(`http://194.3.27.74/api/v3/projects/all?private_token=${token}&per_page=10000`)
      .map(reponse => reponse.json() as any[]);
  }

}
