import React, { Component } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { animateScroll as scroll } from 'react-scroll';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { getImages } from './services/api';

export class App extends Component {
  state = {
    searchText: '',
    page: 1,
    images: [],
    loading: false,
    totalPages: 0,
    isDuplicate: false,
  };

  async componentDidUpdate(_, prevState) {
    const { page, searchText } = this.state;

    if (page !== prevState.page || searchText !== prevState.searchText) {
      try {
        this.setState({ loading: true });

        const data = await getImages(searchText, page);
        if (data.hits.length === 0) {
          toast.error(
            'Sorry, there are no images matching your search query. Please try again.'
          );
          return;
        }
        this.setState(prevState => ({
          images:
            searchText === prevState.searchText
              ? [...prevState.images, ...data.hits]
              : [...data.hits],
          totalPages: Math.floor(data.totalHits / 12),
        }));
      } catch (error) {
        toast.error(`Something was wrong. Try to refresh the page`);
      } finally {
        this.setState({ loading: false });
      }
    }
  }
  getRequest = searchText => {
    this.setState(prevState => {
      if (searchText === prevState.searchText) {
        this.duplicate();
      }
    });
    this.setState({
      searchText,
      images: [],
      page: 1,
      isDuplicate: true,
    });
  };
  duplicate = () => {
    toast.error('You have already searched for these images');
  };
  chengePage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
    scroll.scrollMore(570);
  };
  render() {
    const { loading, images, totalPages, page } = this.state;

    return (
      <>
        <Searchbar getSearchData={this.getRequest} />

        <ImageGallery images={images} />
        {loading && <Loader />}
        {images.length > 0 && page <= totalPages && (
          <Button onClick={this.chengePage} />
        )}
        <ToastContainer />
      </>
    );
  }
}
