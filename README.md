# Space X -

Please visit the live site here: https://space-x-ebon.vercel.app/

## Introduction

This project is a Single Page Application which aims to inform users of upcoming launches to Mars and provide a countdown to the next planned launch. Our new home.

## Functionality

- A live countdown to the next launch to Mars.
- A list of upcoming launches to Mars.
- The ability to save your favourite launches to the "My Launches" tab.
- The ability to delete favourited launches in the "My Launches" tab that persists between page refreshes.
- Sharing feature, to post about the upcoming launch via social media.

## Technologies

- JavaScript
- React
- create-react-app
- HTML
- Tailwind CSS
- Jest
- React Testing Library
- Vercel - for deployment

## Additional NPM Packages

- react-router-dom
- pretty-ms - used to help format the time left until next launch
- react-share - used to help create the social media share feature

## Current Issues

1. The solution found to create the countdown was quite over-complex.
2. The countdown counter is directly within the "Upcoming Launch" component - making it unable to be reused.
3. The "liked" launches is successfully saved to local storage and therefore appears in the "My Launches" tab. However, if a launch is removed from within this tab, it isn't reflected in the "All launches" tab as the state is not connected.
4. The current share to social media feature, although working, may not be the most reliable way to create this solution. Also as it is an external dependency, it is hard to test.
5. There are a few dependencies I didn't use that need to be removed - but I have left them in just in case removing them breaks my application.
6. The seconds aspect of the countdown timer sometimes displays "s".
7. The API endpoint for the next launch had a launch date in the past. Which meant my countdown would have been buggy.
8. If there is an error fetching the data, although the error is logged in the console, the user is not given this information.
9. The components have within them logic that could be split out into separate components and made reusable - for example the Header and Footer icons.
10. The LaunchesTable can be refactored so that it can be reused to display both the AllLaunches data and the MyLaunches data - to remove repeated code in LikedLaunch.js which could be deleted in its entirety once the refactor is complete (DRY).
11. Having just icons in the navbar on smaller screens could lead to a steep user learning curve RE navigating the application.
12. For the upcoming launches and liked launches tables, if there were many launches, this page could become very long.
13. The current testing suites for the common components are very basic and not very comprehensive.
14. Fetching from API is done in two different components - a centralised place to request and store this data is preferred - and then passing down to child components/components that need this data.
15. As the /next API Endpoint was sending a launch in the past, I ended up "hacking together" a solution, which isn't written in the best, most clear and succinct way.

## Planned Solutions - corresponding to the issues noted above

1. If I had more time, I would find a much more intuitive, clean way of adding the "live" functionality to the site.
2. Extract this logic into a separate "Countdown" component, which could then be reused.
3. Refactor and rewrite some aspects of state, which may include lifting the state up, in order to make this connection.
4. Look into different npm packages, plugins or dependencies which give this feature, or aspects of it. Compare this to the time-cost efficiency of writing my own solution.
5. I would safely remove these dependencies - "uuid" and "react-media-sharing".
6. This links into the over-complex, potentially buggy way I have coded up this feature. I would find a better solution.
7. I instead hardcoded the use of the next launch from the /upcoming API endpoint. But this is not a long term fix. Either the API will need updating, or I would write a function to loop through all of the upcoming launches, compare this with today's date, and use the launch which was nearest to today's date for the countdown to next launch.
8. I would create a snackbar or some other component that is displayed on the screen if there is a fetching error - with instructions for the user to try to debug this issue - e.g. check internet connection, refresh the page, etc.
9. Split the logic that can be made into separate components.
10. Complete the refactor of the LaunchesTable and the LaunchEntry component, and delete the LikedLaunch component.
11. On smaller screens, replace the icons with a hamburger icon which when clicked, makes a side menu be visible to the user.
12. Implement pagination on all tables.
13. Flesh out the existing tests to expand the test coverage of these three components.
14. Fetching the data is another file (for example App.js to handle all fetching, or better yet, a file dedicated solely to fetching data from the API), and then using prop drilling or context to pass this down to the components that need it.
15. Rewrite all fetching data code, even if left in the files they're currently in.

## Potential New Features in Future Updates

- Expand the test suite - that covers not just the common components but instead, all components - to increase the test coverage.
- The ability to undo the deletion of a mission from the "My Launches" tab.
- The ability to delete multiple/all missions from the "My Launches" tab at once.

## Setup

To run this project, please either:

Clone the repo: https://github.com/JayMcK/Space-X.git

or

Download the ZIP file

At the Command Line cd into the project then run:

```sh
npm install
npm start
```

To run the test suites in this project, open the command line within the project then run:

```sh
npm run test
```
