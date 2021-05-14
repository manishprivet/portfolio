export interface userDetails {
  totalContributions: number;
  contributions: number[];
  name: string;
  noOfRepositories: number;
  stars: number;
  issues: number;
  pullRequests: number;
  commits: number;
  pullRequestReviews: number;
  commitRepos: number;
  issueRepos: number;
  reviewRepos: number;
  pullRequestRepos: number;
  contributedTo: number;
}

export interface TrackDetails {
  name: string;
  albumArt: string;
  preview: string;
  url: string;
  artist: string;
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

export interface GithubContributionsResponse {
  data: {
    user: {
      name: string;
      repositories: {
        totalCount: number;
        nodes: {
          stargazers: {
            totalCount: number;
          };
        }[];
      };
      repositoriesContributedTo: {
        totalCount: number;
      };
      contributionsCollection: {
        totalIssueContributions: number;
        totalPullRequestContributions: number;
        totalCommitContributions: number;
        restrictedContributionsCount: number;
        totalPullRequestReviewContributions: number;
        totalRepositoriesWithContributedCommits: number;
        totalRepositoriesWithContributedIssues: number;
        totalRepositoriesWithContributedPullRequestReviews: number;
        totalRepositoriesWithContributedPullRequests: number;
        totalRepositoryContributions: number;
        contributionCalendar: {
          totalContributions: number;
          weeks: week[];
        };
      };
    };
  };
}

export interface Track {
  track: {
    album: {
      images: {
        height: number;
        url: string;
        width: number;
      }[];
    };
    name: string;
    artists: {
      name: string;
    }[];
    preview_url: string;
    external_urls: {
      spotify: string;
    };
  };
}

export interface SpotifyResponse {
  items: Track[];
}
