import { Component } from 'react';
import { Modal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = { isOpenModal: false };

  toggleModal = () => {
    this.setState(({ isOpenModal }) => ({ isOpenModal: !isOpenModal }));
  };

  render() {
    const { modalImg, src, alt } = this.props;
    const { isOpenModal } = this.state;

    return (
      <li
        className="gallery-item"
        onClick={() => {
          this.toggleModal();
        }}
      >
        <img src={src} alt={alt} loading="lazy" className="item-image" />
        {isOpenModal && (
          <Modal img={modalImg} alt={alt} onToggle={this.toggleModal} />
        )}
      </li>
    );
  }
}
