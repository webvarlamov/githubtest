import { Injectable } from '@angular/core';
import {DataAccessService} from './data-access.service';
import {map, tap} from 'rxjs/operators';
import {DataAdapterService} from './data-adapter.service';
import {ListReportItem} from '../store/types/list-report/list-report-item';
import {Observable} from 'rxjs';
import {ObjectPageEvent} from '../store/types/object-page/object-page-event';
import {ObjectPageContent} from '../store/types/object-page/object-page-content';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  constructor(
    private dataAccessService: DataAccessService,
    private dataAdapterService: DataAdapterService
  ) { }

  public getListItems(search: string, page: number, filters?: string): Observable<{totalCount: number, items: ListReportItem[]}> {
    return this.dataAccessService.getListItems(search, page, filters).pipe(
      map(response => {
        return {
          totalCount: response.total_count,
          items: this.dataAdapterService.toListReportItem(response.items)
        };
      }),
    );
  }

  public getEventList(eventsURL: string): Observable<ObjectPageEvent[]> {
    return this.dataAccessService.getEventsList(eventsURL).pipe(
      map((events: any[]) => this.dataAdapterService.toObjectEvents(events))
    );
  }

  public getObjectPageContent(id: any): Observable<ObjectPageContent> {
    return this.dataAccessService.getObjectPageContent(id).pipe(
      map(response => this.dataAdapterService.toObjectPageContent(response))
    );
  }
}
