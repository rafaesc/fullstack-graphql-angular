import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { queryBuilder } from '../utils/helpers';
import { Thought } from '../models/thought.model';

const GRAPHQL_API = 'http://localhost:3000';

@Injectable()
export class ThoughtsService {
  constructor(private http: HttpClient) {}

  public getList() {
    return this.http
      .post(
        GRAPHQL_API,
        queryBuilder({
          type: 'query',
          operation: 'thoughts',
          fields: ['id', 'name', 'thought']
        })
      )
      .map((res: any) => res.data.thoughts);
  }

  public get(id: Number) {
    return this.http
      .post(
        GRAPHQL_API,
        queryBuilder({
          type: 'query',
          operation: 'thought',
          data: { id },
          fields: ['id', 'name', 'thought']
        })
      )
      .map((res: any) => res.data.thought);
  }

  public create(data: Thought) {
    return this.http
      .post(
        GRAPHQL_API,
        queryBuilder({
          type: 'mutation',
          operation: 'thoughtCreate',
          data,
          fields: ['id']
        })
      )
      .map((res: any) => res.data.thoughts);
  }

  public remove(data: Thought) {
    return this.http
      .post(
        GRAPHQL_API,
        queryBuilder({
          type: 'mutation',
          operation: 'thoughtRemove',
          data: { id: data.id },
          fields: ['id']
        })
      )
      .map((res: any) => res.data.thoughts);
  }
}
