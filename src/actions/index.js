// Action Creator is a function that returns an Action
// Action is an plain javascript object that flows through all the different reducers
// Reducers can use the action to produce a different value for its particular piece of state

// selectBook is an Action Creator,
// it needs to return an Action, an object with a type property (always uppercase and separated if multi words) and payload
export function selectBook(book) {
  // console.log('A book has been selected: ', book.title);

  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
