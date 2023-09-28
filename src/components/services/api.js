import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const API_KEY = '38967351-7f81fcf5656e7dea2c65ce073';

const params = new URLSearchParams({
  image_type: 'photo;',
  orientation: 'horizontal',
  per_page: 12,
});

export const getImages = async (searchText, page) => {
  const response = await axios.get(
    `?key=${API_KEY}&q=${searchText}&page=${page}&${params}`
  );
  return response.data;
};
