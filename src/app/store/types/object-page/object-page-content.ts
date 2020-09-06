export interface ObjectPageContent {
  id: string;
  description: string,
  name: string;
  fullName: string;
  owner: {
    login: string;
    avatarUrl: string;
  };
  eventsURL: string;
  createdAt: string;
  forks: string;
  openIssues: string;
}
