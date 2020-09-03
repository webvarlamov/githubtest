import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataAccessService {
  private repositoriesSearchEndpoint = 'https://api.github.com/search/repositories';
  private queryParamKey = 'q';

  constructor(
    private httpClient: HttpClient
  ) { }

  getListItems(search: string, filters?: any): Observable<any> {
    const headers = new HttpHeaders();
    headers.append('Authorization', 'Basic d2ViLnZhcmxhbW92QHlhbmRleC5ydTpFbmRwb3NpdGlvbjE5OTM=');
    return this.httpClient.get(this.repositoriesSearchEndpoint + '?' + this.queryParamKey + '=' + search,
      { headers }
      );
  }

  getEventsList(eventsURL: string) {
    const headers = new HttpHeaders();
    headers.append('Authorization', 'Basic d2ViLnZhcmxhbW92QHlhbmRleC5ydTpFbmRwb3NpdGlvbjE5OTM=');
    return this.httpClient.get(eventsURL, {
      headers
    });
  }
}
