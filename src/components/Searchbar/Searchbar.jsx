import { Component } from 'react';
import { toast } from 'react-toastify';
import { AiOutlineSearch } from 'react-icons/ai';

export class Searchbar extends Component {
  state = {
    value: '',
  };
  onChangeInput = ({ target: { value } }) => {
    this.setState({ value });
  };
  onSubmitForm = e => {
    e.preventDefault();
    if (this.state.value.trim() === '') {
      return toast.error(`Value cannot be empty`);
    }
    this.props.getSearchData(this.state.value);
    this.setState({ value: '' });
  };
  render() {
    return (
      <header className="searchbar">
        <form className="search-form" onSubmit={this.onSubmitForm}>
          <button type="submit" className="search-form-button">
            <span className="button-label">
              <AiOutlineSearch size="24" color="white" />
            </span>
          </button>

          <input
            className="search-form-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.value}
            onChange={this.onChangeInput}
          />
        </form>
      </header>
    );
  }
}
