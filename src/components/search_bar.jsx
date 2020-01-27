import React, { Component } from 'react';

class SearchBar extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { focus: false };
  // }

  handleUpdate = (event) => {
    this.props.searchFunction(event.target.value);
  }

  // handleFocus = () => {
  //   this.setState({ focus: !this.state.focus });
  // }

  // classNames() {
  //   let classes = 'form-control form-search';
  //   if (this.state.focus) {
  //     classes += ' on-focus';
  //   }
  //   return classes;
  // }

  render() {
    return (
      <input
        type="text"
        className='form-control form-search'
        onChange={this.handleUpdate}
        // onClick={this.handleFocus}
      />
    );
  }
}

export default SearchBar;
