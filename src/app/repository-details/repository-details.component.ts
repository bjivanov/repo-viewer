import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-repository-details',
  templateUrl: './repository-details.component.html',
  styleUrls: ['./repository-details.component.scss']
})
export class RepositoryDetailsComponent implements OnInit, OnDestroy {
  currentTab: string;
  repository: string;

  private paramMapSub: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.paramMapSub = this.activatedRoute.paramMap.subscribe(params => {
      this.repository = params.get('repository');
      this.currentTab = params.get('tab');
    })
  }

  ngOnDestroy(): void {
    this.paramMapSub.unsubscribe();
  }

  selectTab(tab: string): void {
    this.router.navigate(['repositories', this.repository, tab]);
  }

  onBackToPinnedReposClicked(): void {
    this.router.navigate(['repositories']);
  }
}
