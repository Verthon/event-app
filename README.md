# Eventoo
[Live version on Netlify](https://eventooo.netlify.com/ "Live version on Netlify")
Simple React app for creating and managing events. In project I have used:

- React.js (create-react-app)
- JavaScript ES6
- Firestore
- React Router
- CSS (Mobile first)
- Unit tests (Jest)
- Wonderful illustrations created by Katerina Limpitsouni(https://twitter.com/ninalimpi) from undraw.co/(https://undraw.co/) 


## Functionality

1. Creating new event, information required:
  * event name
  * event description
  * localization
  * date(date-picker)
  * photo (no upload, only links)
  * category 
2. Displaying all events
3. Search function
4. Authorization
5. Editing, deleting created event
6. Saving app state to Firebase
7. Search, filtering and sorting events

## Work in progress

- [x] Event creation
- [x] Firebase implemented (fetching data, adding data)
- [x] Added React Router
- [x] Added PropTypes
- [ ] Authentication
- [ ] Context API/Redux/MobX
- [x] Host app on Netlify
- [ ] Upgrade search component

## Installation

1. clone repository `git clone https://github.com/Verthon/event-app.git`
2. install dependencies `npm install`
3. run react dev server `npm start`