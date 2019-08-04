import { Component, OnInit, ViewChild } from '@angular/core';
import { Repository } from './repository';
import { RepositoryService } from './repository.service';
import { Router } from '@angular/router';
import { ClrDatagridStateInterface, ClrDatagrid } from '@clr/angular';
import { DataQuery } from '../common/data-query';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent implements OnInit {

  public repos: Repository[] = [];
  currentPageSize: 6;
  total: number;
  loading: boolean = true;

  constructor(
    private service: RepositoryService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  refresh(state: ClrDatagridStateInterface) {
    this.loading = true;
    const query: DataQuery = {
      filter: {},
      orderBy: <string>(state.sort && state.sort.by),
      sortOrder: state.sort && state.sort.reverse ? 'desc' : 'asc',
      skip: state.page && state.page.from,
      take: state.page && state.page.size
    };
    let filters: { [prop: string]: any[] } = {};
    if (state.filters) {
      for (let filter of state.filters) {
        let { property, value } = <{ property: string, value: any }>filter;
        filters[property] = [].concat(value);
      }
    }
    query.filter = filters;

    this.service.fetchRepositories(query).subscribe(result => {
      this.total = result.totalCount;
      this.repos = result.data;
      this.loading = false;
    });
  }

  trackRepo(repo) {
    return repo.id;
  }

  repoClicked(repository) {
    this.router.navigate(['repositories', repository.name]);
  }
}
