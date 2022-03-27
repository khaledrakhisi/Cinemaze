# CINEMAZE

A portal to the **amazing** world of **Cinema!** Cinema + Maz + e = Cinemaze

## Description

CINEMAZE is a great react.js app which is designed as Mobile-First approach and this means it work perfectly on mobile/tablets. using this app you can find annything you want. TV shows, movies, Actors/Actresses, movies posters, trailer videos and comprehensive detailed information. You are able to create your own favourites list and also select some movies and add them to a watch later list.
This app powered by : [themoviedb.org](https://api.themoviedb.org)

## Demo

### Live Demo

[khaledr.ir](https://khaledr.ir)

## Demo snapshots

![Demo snapshot #1](./public/demo3.png)
![Demo snapshot #2](./public/demo4.png)
![Demo snapshot #3](./public/demo2.png)

## Getting Started

## Stack

<div align="center">
<a href="https://reactjs.org/" title="React"><img src="https://github.com/get-icon/geticon/raw/master/icons/react.svg" alt="React" width="32px" height="32px"></a>
<a href="https://www.typescriptlang.org/" title="Typescript"><img src="https://github.com/get-icon/geticon/raw/master/icons/typescript-icon.svg" alt="Typescript" width="32px" height="32px"></a>
<a href="https://redux.js.org/" title="redux"><img src="https://github.com/get-icon/geticon/raw/master/icons/redux.svg" alt="Redux" width="32px" height="32px"></a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" title="JavaScript"><img src="https://github.com/get-icon/geticon/raw/master/icons/javascript.svg" alt="JavaScript" width="32px" height="32px"></a>
<a href="https://material-ui.com/" title="Material UI"><img src="https://github.com/get-icon/geticon/raw/master/icons/material-ui.svg" alt="Material UI" width="32px" height="32px"></a>
<a href="https://git-scm.com/" title="Git"><img src="https://github.com/get-icon/geticon/raw/master/icons/git-icon.svg" alt="Git" width="32px" height="32px"></a>
<a href="https://www.npmjs.com/" title="npm"><img src="https://github.com/get-icon/geticon/raw/master/icons/npm.svg" alt="npm" width="32px" height="32px"></a>
<a href="https://yarnpkg.com/" title="Yarn"><img src="https://github.com/get-icon/geticon/raw/master/icons/yarn.svg" alt="Yarn" width="32px" height="32px"></a>
<a href="https://webpack.js.org/" title="webpack"><img src="https://github.com/get-icon/geticon/raw/master/icons/webpack.svg" alt="webpack" width="32px" height="32px"></a>
<a href="https://eslint.org/" title="ESLint"><img src="https://github.com/get-icon/geticon/raw/master/icons/eslint.svg" alt="ESLint" width="32px" height="32px"></a>
<a href="https://prettier.io/" title="Prettier"><img src="https://github.com/get-icon/geticon/raw/master/icons/prettier.svg" alt="Prettier" width="32px" height="32px"></a>
<a href="https://jestjs.io/" title="Jest"><img src="https://github.com/get-icon/geticon/raw/master/icons/jest.svg" alt="Jest" width="32px" height="32px"></a>
<a href="https://github.com/enzymejs/enzyme" title="Enzyme"><img src="https://github.com/get-icon/geticon/raw/master/icons/enzyme.svg" alt="Enzyme" width="32px" height="32px"></a>
<a href="https://www.cypress.io/" title="Cypress"><img src="https://github.com/get-icon/geticon/raw/master/icons/cypress.svg" alt="Cypress" width="32px" height="32px"></a>
<a href="https://code.visualstudio.com/" title="Visual Studio Code"><img src="https://github.com/get-icon/geticon/raw/master/icons/visual-studio-code.svg" alt="Visual Studio Code" width="32px" height="32px"></a>
<a href="https://www.firebase.com/" title="Firebase"><img src="https://github.com/get-icon/geticon/raw/master/icons/firebase.svg" alt="Firebase" width="32px" height="32px"></a>
</div>

## Overview

![CV APP Preview](https://share.balsamiq.com/c/uMzGrHVH9KUE9xG8wqz46.png)
Designed with [Balsamiq.com](https://balsamiq.com)

## Approches & Structure

![TDD Cicle](https://marsner.com/wp-content/uploads/test-driven-development-TDD.png)

### Components tree & State map

```
**App**
|
|---MainPage
|   |
|   |---SearchArea
|   |
|   |---MovieList
|   |   |
|   |   |---MovieItem
|   |
|---FavoritesPage
|
|---WatchLaterPage
|
|---MoviDetails(Modal)
|
|---SignInUpPage
|   |
|   |---SignIn
|   |
|   |---Signup
|   |
```

This app uses js debouncing technique so as the user types search functionality runs without need for submit.

### Installing Dependencies

```
npm install
```

```
yarn
```

### Build & Run

```
npm run build
npm start
```

```
yarn build
yarn start
```

#### Test

Do not follow the happy path! be prepared for worst case senario.

- Unit Test
  - Run `yarn test` to execute the unit tests.
- E2E Test
  - Run `cy` to execute the e2e test.

## Help

In case of any issues please contact me at: info@khaledr.ir

## Authors

[Khaled Rakhisi](https://www.linkedin.com/in/khaledrakhisi/)

## Version History

- 0.1
  - Initial Release

## License

This project is licensed under the [Khaled Rakhisi] License - see the LICENSE.md file for details

## Acknowledgments

Inspiration, code snippets, etc.

- [awesome-readme](https://github.com/matiassingers/awesome-readme)
- [PurpleBooth](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)
- [dbader](https://github.com/dbader/readme-template)
- [zenorocha](https://gist.github.com/zenorocha/4526327)
- [fvcproductions](https://gist.github.com/fvcproductions/1bfc2d4aecb01a834b46)
