import { Commit } from './commit';

export class CommitsResponse {
  public totalCount: number;
  public data: Commit[];
}