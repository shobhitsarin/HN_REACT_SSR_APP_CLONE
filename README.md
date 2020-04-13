# HN_REACT_SSR_APP_CLONE

- Application is deployed on https://hn-react-ssr-app-clone.herokuapp.com/
- Application is configured with Travis CI - 
[![Build Status](https://travis-ci.com/shobhitsarin/HN_REACT_SSR_APP_CLONE.svg?branch=master)](https://travis-ci.com/shobhitsarin/HN_REACT_SSR_APP_CLONE)
- Application shows 90+ lighthouse score for all Performance, Seo, Accessibility


Tech Stack -

1) View Library - React JS
2) Node Server Fwk - Express
3) State Management - Nothing, Managed by JS & React API only
4) API - Fetch
5) Package Management - Yarn
6) Responsive design system: Managed by flex-box
7) Code Quality - Eslint and Prettier
8) Performance - Lighthouse

PS -

- Application supports device of minimum width 375px and above
- Application shows 25 rows at a time because using front_page tag API but it has 30 stories only and Other API doesn't have the complete set of data
  hitsPerPage can be changed by setting env variable
- Making application MPA, On click of More a new page is returned
- Application doesn't use Redux or Next JS Fwk as they are power house for larger apps, and would have been over kill here
- upvote or hiding row is stored in local storage but the change will be valid till that session; Reflecting upVote or Hidden row on next refresh would have thrown the hydration error and break the SSR.





