import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { RepositoriesResponse } from './repositories-response';
import { DataQuery } from '../common/data-query';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class RepositoryService {
  constructor(private http: HttpClient) {
  }

  public fetchRepositories(query: DataQuery) {
    return this.http.post<RepositoriesResponse>(`${environment.apiUrl}/repos`, query);
  }
}