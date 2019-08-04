export interface Filter {
  [property: string]: any[]
}

export interface DataQuery {
  orderBy?: string;
  sortOrder?: 'asc' | 'desc';
  filter?: Filter;
  skip?: number;
  take?: number;
}
