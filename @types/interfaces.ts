export interface userDetails {
  totalContributions: number;
  contributions: number[];
  name: string;
}

export interface contributionCount {
  contributionCount: number;
}

export interface week {
  contributionDays: contributionCount[];
}

export interface query {
  query: string;
  variables: {
    LOGIN: string;
  };
}

export interface responseOfApi {
  data: {
    user: {
      name: string;
      contributionsCollection: {
        contributionCalendar: {
          totalContributions: number;
          weeks: week[];
        };
      };
    };
  };
}
