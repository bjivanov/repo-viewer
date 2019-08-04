import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommitsResponse } from './commits-response';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class CommitsService {
  constructor(private http: HttpClient) {
  }

  public fetchCommits(repository: string, skip: number, take: number) {
    return this.http.get<CommitsResponse>(`${environment.apiUrl}/repos/${repository}/commits?skip=${skip}&take=${take}`);
  }

  public downloadPatch(repository: string, commitSha: string) {
    window.location.href = `${environment.apiUrl}/repos/${repository}/commits/${commitSha}/patch`;
  }
}