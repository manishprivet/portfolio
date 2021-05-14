import { fetchContribution } from "../../@types";
import { contributionCount, userDetails } from "../../@types/interfaces";
import { contributionQuery } from "../queries";
import { fetch } from ".";

export const fetchContributions: fetchContribution = async (
  username: string,
  token: string
) => {
  try {
    const apiResponse = await fetch(contributionQuery(username), token);
    const User = apiResponse.data.data.user;

    if (User === null)
      return `Can't fetch any contribution. Please check your username 😬`;

    let userData: userDetails = {
      totalContributions:
        User.contributionsCollection.contributionCalendar.totalContributions,
      contributions: [],
      name: User.name,
      noOfRepositories: User.repositories.totalCount,
      commitRepos:
        User.contributionsCollection.totalRepositoriesWithContributedCommits,
      commits: User.contributionsCollection.totalCommitContributions,
      issueRepos:
        User.contributionsCollection.totalRepositoriesWithContributedIssues,
      issues: User.contributionsCollection.totalIssueContributions,
      pullRequestRepos:
        User.contributionsCollection
          .totalRepositoriesWithContributedPullRequests,
      pullRequests: User.contributionsCollection.totalPullRequestContributions,
      reviewRepos:
        User.contributionsCollection
          .totalRepositoriesWithContributedPullRequestReviews,
      pullRequestReviews:
        User.contributionsCollection.totalPullRequestReviewContributions,
      stars: 0,
      contributedTo: User.repositoriesContributedTo.totalCount,
    };
    //filtering the week data from API response
    const weeks = User.contributionsCollection.contributionCalendar.weeks;
    //slicing last 6 weeks
    weeks
      .slice(weeks.length - 6, weeks.length)
      .map((week) =>
        week.contributionDays.map((contributionCount: contributionCount) =>
          userData.contributions.push(contributionCount.contributionCount)
        )
      );

    //returning data of last 31 days
    const presentDay = new Date().getDay();
    userData.contributions = userData.contributions.slice(
      5 + presentDay,
      36 + presentDay
    );
    const total = User.repositories.nodes.reduce(
      (a, d) => a + d.stargazers.totalCount,
      0
    );
    userData.stars = total;
    return userData;
  } catch (error) {
    console.log(error);
    return error;
  }
};
