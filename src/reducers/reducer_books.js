// Reducer is a function that returns a piece of the application state
// Application can have many pieces of states, so there can be many combineReducers

// Application state is created by reducers
export default function() {
  return [
    { title: 'Javascript: The Good Parts', pages: 101 },
    { title: '1984', pages: 400 },
    { title: 'Ready Player One', pages: 500 },
    { title: 'Book 4', pages: 1 }
  ]
}
