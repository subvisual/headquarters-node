"use strict";

var APIBaseURL = "https://hq.groupbuddies.com";
var APIMembersPath = "/members";
var APIEmailPath = "/emails";
var APITokenPath = "/oauth/authorize";

var Github = {
  APIPullRequestPath: "/github/pull_requests"
};

var Constants = {
  APIBaseURL: APIBaseURL,
  APITokenPath: APITokenPath,
  APITokenURL: APIBaseURL + APITokenPath,
  APIMembersPath: APIMembersPath,
  APIMembersURL: APIBaseURL + APIMembersPath,
  APIEmailPath: APIEmailPath,
  APIEmailURL: APIBaseURL + APIEmailPath,
  Github: {
    APIPullRequestPath: Github.APIPullRequestPath,
    APIPullRequestURL: APIBaseURL + Github.APIPullRequestPath
  }
};

module.exports = Constants;