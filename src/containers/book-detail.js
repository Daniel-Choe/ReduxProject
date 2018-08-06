import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    // component state is completely separate from application state, so you can still implement those like below
    // this.state.alsdkafn
    // this.setState({alsdkafn: 'alsdkafn'});

    if (!this.props.book) {
      return <div> Select a book to get started. </div>
    }

    return (
      <div>
        <h3> Details for: </h3>
        <div> Title: {this.props.book.title} </div>
        <div> Pages: {this.props.book.pages} </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
