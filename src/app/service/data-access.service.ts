import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataAccessService {
  private repositoriesSearchEndpoint = 'https://api.github.com/search/repositories';
  private repositoryContentEndpoint = 'https://api.github.com/repositories';
  private queryParamKey = 'q';

  constructor(
    private httpClient: HttpClient
  ) { }

  public getListItems(search: string, page: number, filters?: string): Observable<any> {
    return this.httpClient.get(
      [
        this.repositoriesSearchEndpoint + '?' + 'page=' + page + '&' + this.queryParamKey + '=' + (search ? search : ''),
        filters
      ].join('+'), {
          headers: this.getAuthHeaders()
    });
  }

  public getEventsList(eventsURL: string) {
    return this.httpClient.get(eventsURL, {
      headers: this.getAuthHeaders()
    });
  }

  private getAuthHeaders() {
    const headers = new HttpHeaders();
    headers.append('Authorization', 'Basic d2ViLnZhcmxhbW92QHlhbmRleC5ydTpFbmRwb3NpdGlvbjE5OTM=');
    return headers;
  }

  public getObjectPageContent(id: string) {
    return this.httpClient.get(this.repositoryContentEndpoint + '/' + id, {
      headers: this.getAuthHeaders()
    });
  }
}
