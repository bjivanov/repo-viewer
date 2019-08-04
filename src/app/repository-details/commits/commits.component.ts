import { Component, OnInit, OnDestroy } from '@angular/core';
import { Commit } from './commit';
import { CommitsService } from './commits.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ClrDatagridStateInterface } from '@clr/angular';
import { DataQuery } from 'src/app/common/data-query';

@Component({
  selector: 'app-commits',
  templateUrl: './commits.component.html',
  styleUrls: ['./commits.component.scss']
})
export class CommitsComponent implements OnInit, OnDestroy {

  repository: string;
  commits: Commit[] = [];
  total: number;
  currentPageSize: 10;
  loading: boolean = true;

  private paramMapSub: Subscription;

  constructor(
    private service: CommitsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.paramMapSub = this.activatedRoute.paramMap.subscribe(params => {
      this.repository = params.get('repository');
    });
  }

  ngOnDestroy(): void {
    this.paramMapSub.unsubscribe();
  }

  refresh(state: ClrDatagridStateInterface) {
    this.loading = true;
    if (this.repository) {
      const skip = state.page && state.page.from;
      const take = state.page && state.page.size;
      this.service.fetchCommits(this.repository, skip, take).subscribe(result => {
        this.total = result.totalCount;
        this.commits = result.data;
        this.loading = false;
      });
    }
  }

  downloadPatch(commit: Commit): void {
    this.service.downloadPatch(this.repository, commit.sha);
  }
}
