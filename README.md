# Eventoo
Simple React app for managing events. Technologies used:

- React.js (create-react-app)
- JavaScript ES6
- Firestore
- React Router
- CSS (Mobile first)
- Unit tests (Jest)

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
- [ ] Host app on Netlify


## Installation

clone repository `git clone https://github.com/Verthon/event-app.git`
install depednecies `npm npm install`
run react dev server `npm start`