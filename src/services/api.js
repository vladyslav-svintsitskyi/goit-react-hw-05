import axios from "axios";

const API_KEY = "VIXXOvoFq8egpCdmvVQPBqGknnpZMAVq2ii5fppABmw";
const API_URL = "https://api.unsplash.com/search/photos";

export const fetchImages = async (query, page) => {
  const { data } = await axios.get(API_URL, {
    params: {
      query,
      page,
      per_page: 15,
    },
    headers: {
      Authorization: `Client-ID ${API_KEY}`,
    },
  });
  return data;
};
