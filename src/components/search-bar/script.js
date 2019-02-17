import React, { Fragment, Component } from 'react';

const SearchBar = class extends Component {
  state = {
    searchTerm: '',
  };

  handleInputChange = (event) => {
    const { value: searchTerm } = event.target;
    this.setState({ searchTerm });
  };

  handleFormSubmission = (event) => {
    event.preventDefault();
    const { searchTerm } = this.state;
    const { onFormSubmit } = this.props;
    onFormSubmit(searchTerm);
  };

  render() {
    return <Fragment>
      <form onSubmit={ this.handleFormSubmission }>
        <ul className="menu">
          <li>
            <input type="text" placeholder="Search for Images" value={ this.state.searchTerm } onChange={ this.handleInputChange } />
          </li>
          <li>
            <input type="submit" className="button" value="Search" />
          </li>
        </ul>
      </form>
    </Fragment>;
  }
};

export default SearchBar;
