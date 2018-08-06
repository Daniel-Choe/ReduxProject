import React, { Component } from 'react';

// Redux is a separate library from react
// ReactRedux is another separate library
import { connect } from 'react-redux';

// Import the action creator
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

// Redux is in charge of managing our application state and the state is a single plain javascript object

// In general, we want the most parent component that cares about a particular piece of state to be a Container to be the one connected to Redux
// App doesnt care when state changes, BookList cares about when the list of books changes, BookDetail cares about when the active book changes
// So BookList and BookDetail should be containers, and BookDetail is a child of BookList, so BookList will be a contianer (a component that connects to redux)
// App can also be a container if we re-render the props and state every time

// A container (used in Redux) is a react component that has a direct connection to the state managed by Redux (the link)
// Container is also known as smart component, below is a dumb component (because it has no direct connection to Redux)
class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

// state contains the array of books and the active book
// argument is state, and if it ever changes, the container will automatically re render
function mapStateToProps(state) {
  // Whatever object is returned will be available as props inside of BookList component above
  return {
    books: state.books
  };
  // value needs to be list of books off of state
  // this is the glue for react and redux
}

// Anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result should be passed to all of our reducers (done with dispatch)
  // Purpose of bindActionCreators and dispatch is to specifically take what gets returned from selectBook and make sure it flows through the reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}
// selectBook key when called will point to selectBook value (object) here, which is the one we imported from the top

// Connect takes a function and a component and produces a container, and a container is a component that is aware of the state that is contained by redux
// Promote BookList from a component to a container - it needs to know about this new dispatch method, selectBook.
// Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
