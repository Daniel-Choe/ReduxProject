// Application state is formed by reducers
// Reducers are in charge of changing our application state over time through the use of actions
// All reducers get 2 arguments, the current state and action
// Reducer is only ever called when an action occurs
// State argument is not application state, only the state this reducer is responsible for
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
      // Do not do
      // state.title = book.title
      // State always need to be fresh/clean on refresh
  }

  // Reducer would return undefined and error on boot up because there is no initial selection
  // So we have to set state to null in the argument
  // However, we need a reasonable default state otherwise we will get an error for BookDetail
  // So we add an if to BookDetail
  return state;
}
