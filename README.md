# event-app
Projects is using

1. React
2. JavaScript ES6
3. create-react-app
4. Header svg from [svgbagrounds.com](https://www.svgbackgrounds.com/)
5. React router

## app functionality

1. creating new event, information required
  * event name
  * event description
  * localization
  * date(date-picker)
  * photo (no upload, only links)
  * category
2. displaying all events
3. search function
4. sorting events(not implemented)
5. deleting event(not implemented)
6. editing created event(not implemented)
7. saving app state to database(not implemented)
8. Clean UI and animations(not implemented)

## State of project
  
- Not finished yet
- Need database implementation(firebase)
- Unit testing need to be implemented

## Installation

1. clone repository `git clone https://github.com/Verthon/event-app.git`
2. install dependencies `npm install`
3. run react dev server `npm start`

## Learning new stuff through this project

- differences about stateful and stateless components,
- basics about ComponentDidMount and componentWillMount [where to fetch data](https://daveceddia.com/where-fetch-data-componentwillmount-vs-componentdidmount/)
- conditional render for components (EventCreator 'modal')
- how to host create-react-app in gh-pages