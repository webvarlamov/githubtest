import {listReportReducer} from './reducers/list-report.reducer';
import {searchReducer} from './reducers/search.reducer';
import {objectPageReducer} from './reducers/object-page.reducer';
import {ListReportState} from './types/list-report/list-report-state';
import {SearchState} from './types/list-report/search-state';
import {ObjectPageState} from './types/object-page/object-page-state';

export interface AppState {
  listReport: ListReportState;
  search: SearchState;
  objectPage: ObjectPageState;
}
