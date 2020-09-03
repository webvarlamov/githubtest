import { Injectable } from '@angular/core';
import {ListReportItem} from '../store/types/list-report/list-report-item';
import {ObjectPageEvent} from '../store/types/object-page/object-page-event';

@Injectable({
  providedIn: 'root'
})
export class DataAdapterService {

  constructor() { }

  toListReportItem(items: any[]): ListReportItem[] {
    return items.map(item => {
      return {
        id: item.id,
        login: item.login,
        description: item.description,
        language: item.language,
        fullName: item.full_name,
        eventsURL: item.events_url
      };
    });
  }

  toObjectEvents(events: any []): ObjectPageEvent[] {
    return events.map(e => {
      return {
        action: e.payload.action,
        createAt: e.created_at,
        name: e.repo.name
      };
    });
  }
}
