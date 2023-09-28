import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <ul className="gallery">
      {images.map(img => (
        <ImageGalleryItem
          key={img.id}
          src={img.webformatURL}
          alt={img.tags}
          modalImg={img.largeImageURL}
        />
      ))}
    </ul>
  );
};
