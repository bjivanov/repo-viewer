import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class BasicDataService {
  constructor(private http: HttpClient) {
  }

  public fetchReadme(repository: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/repos/${repository}/readme`, { responseType: 'text' });
  }

  public fetchPackageJson(repository: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/repos/${repository}/package.json`, { responseType: 'text' });
  }
}