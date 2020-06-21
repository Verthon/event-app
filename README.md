# Eventoo
<<<<<<< HEAD
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[Live version on Netlify](https://eventooo.netlify.app "Live version on Netlify") 
Mobile application to build, manage and grow your events in a easy way. 

=======
[Live version on Netlify](https://eventooo.netlify.com/ "Live version on Netlify")
Simple React app for creating and managing events. So far user can:
- login with Google/Facbook
- add or remove events
<<<<<<< HEAD

## Table of contents
* [Setup](#setup)
* [Technologies](#technologies)
* [Used packages and tools](#used-packages-and-tools)
* [Work in progress](#work-in-progress)

## Setup

1. clone repository `git clone https://github.com/Verthon/event-app.git`
2. install dependencies `npm install`
3. run react dev server `npm start`

=======

## Table of contents
* [Setup](#setup)
* [Technologies](#technologies)
* [Used packages and tools](#used-packages-and-tools)
* [Work in progress](#work-in-progress)

## Setup

1. clone repository `git clone https://github.com/Verthon/event-app.git`
2. install dependencies `npm install`
3. run react dev server `npm start`

>>>>>>> f62fd07db655cc7cce62a70aa81fb978fe12bae4
## Technologies
- React.js (create-react-app)
- JavaScript ES6
- Firestore
- React Router
- Redux
- CSS (Mobile first)
- Unit tests (Jest)
- Wonderful illustrations created by [Katerina Limpitsouni](https://twitter.com/ninalimpi) from [undraw.co/](https://undraw.co/) 
- Trello for basic project managment


## Functionality

1. Creating new event, information required:
  * event name
  * event description
  * localization
  * date(date-picker)
  * photo (no upload, only links https://source.unsplash.com/)
  * category 
2. Displaying all events
3. Search function
4. Authorization
5. Editing, deleting created event
6. Saving app state to Firebase
7. Search, filtering and sorting events
>>>>>>> Started rewriting app to react native one. Added basic react native setup using expo


<<<<<<< HEAD
## Table of contents
* [Technologies](#technologies)
* [Setup](#setup)
* [Work in progress](#work-in-progress)


## Technologies and
- Ionic 4
- React.js
- Redux Toolkit
- Typescript
- Styled Components
- Firestore


## Setup

1. clone repository `git clone https://github.com/Verthon/event-app.git`
2. install dependencies `npm install`
3. run react dev server `ionic serve`


## Work in progress
- [ ] Refactor styled components
- [ ] Get rid of the dreadful any - type
- [ ] Add Unit tests
- [ ] Consider deploy on the Android
=======
- [x] Event creation
- [x] Firebase implemented (fetching data, adding data)
- [x] Added React Router
- [x] Added PropTypes
- [x] Authentication
- [x] Context API/Redux/MobX
- [x] Host app on Netlify
- [x] Upgrade search component
- [x] Add basic sorting and filters
- [ ] Add delete, editing functions for created events
<<<<<<< HEAD
- [x] Handle better css(Sass/StyledComponents)
>>>>>>> Started rewriting app to react native one. Added basic react native setup using expo
=======
- [x] Handle better css(Sass/StyledComponents)
>>>>>>> f62fd07db655cc7cce62a70aa81fb978fe12bae4
