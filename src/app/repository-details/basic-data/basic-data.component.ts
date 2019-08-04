import { Component, OnInit } from '@angular/core';
import { BasicDataService } from './basic-data.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-basic-data',
  templateUrl: './basic-data.component.html',
  styleUrls: ['./basic-data.component.scss']
})
export class BasicDataComponent implements OnInit {

  repository: string;
  loading: boolean = true;
  readme: any;

  private paramMapSub: Subscription;

  constructor(
    private service: BasicDataService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.paramMapSub = this.activatedRoute.paramMap.subscribe(params => {
      this.repository = params.get('repository');
      this.loadData();
    });
  }

  ngOnDestroy(): void {
    this.paramMapSub.unsubscribe();
  }

  loadData(): void {
    this.service.fetchReadme(this.repository).subscribe(result => {
      this.readme = result;
      this.loading = false;
    });
  }

}
