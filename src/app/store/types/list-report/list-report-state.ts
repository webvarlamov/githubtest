import {ListReportItem} from './list-report-item';

export interface ListReportState {
  totalCount: number;
  scrollTo: number;
  listReportItems: {[key: string]: ListReportItem[]};
  loadingCounter: number;
}
