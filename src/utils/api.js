import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL,
  GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY,
  GOOGLE_CS_KEY = import.meta.env.VITE_GOOGLE_CS_KEY;

const params = {
  key: GOOGLE_API_KEY,
  cx: GOOGLE_CS_KEY,
};

export const fetchDataFromApi = async (payload) => {
  const { data } = await axios.get(BASE_URL, {
    params: { ...params, ...payload },
  });
  return data;
};
