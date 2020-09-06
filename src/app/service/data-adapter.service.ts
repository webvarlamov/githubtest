import { Injectable } from '@angular/core';
import {ListReportItem} from '../store/types/list-report/list-report-item';
import {ObjectPageEvent} from '../store/types/object-page/object-page-event';
import {ObjectPageContent} from '../store/types/object-page/object-page-content';

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
        createAt: this.getDateTime(e.created_at),
        name: e.repo.name
      };
    });
  }

  toObjectPageContent(response: any): ObjectPageContent {
    return {
      id: response.id,
      description: response.description,
      name: response.name,
      fullName: response.full_name,
      owner: {
        login: response.owner.login,
        avatarUrl: response.owner.avatar_url
      },
      eventsURL: response.events_url,
      createdAt: this.getDateTime(response.created_at),
      forks: response.forks,
      openIssues: response.open_issues
    };
  }

  private getDateTime(createdAt: string) {
    let result = '';
    try {
      result = createdAt.replace('T', ' ').replace('Z', '');
    } catch (ignored) {}
    return result;
  }
}
