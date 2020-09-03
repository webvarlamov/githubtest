import { Injectable } from '@angular/core';
import {DataAccessService} from './data-access.service';
import {map, tap} from 'rxjs/operators';
import {DataAdapterService} from './data-adapter.service';
import {ListReportItem} from '../store/types/list-report/list-report-item';
import {Observable} from 'rxjs';
import {ObjectPageEvent} from '../store/types/object-page/object-page-event';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  constructor(
    private dataAccessService: DataAccessService,
    private dataAdapterService: DataAdapterService
  ) { }

  public getListItems(search: string, filters?: any): Observable<ListReportItem[]> {
    return this.dataAccessService.getListItems(search, filters).pipe(
      map(response => response.items),
      map(items => this.dataAdapterService.toListReportItem(items))
    );
  }

  public getEventList(eventsURL: string): Observable<ObjectPageEvent[]> {
    return this.dataAccessService.getEventsList(eventsURL).pipe(
      map((events: any[]) => this.dataAdapterService.toObjectEvents(events))
    );
  }
}
