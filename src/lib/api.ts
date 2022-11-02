import axios from "axios";
import { SigninPropertyTypes } from "src/components/forms/signinForm";
import { SignUpPropertyTypes } from "src/components/forms/signupForm";
import LOCALSTORAGE from "src/constants/localstorageConst";
import { HashTag, User } from "src/pages/home";
import { SavedSearch } from "src/pages/savedSearchs";

type getDataFromInstaApiResponse = {
  users: { user: User }[];
  hashtags: { hashtag: HashTag }[];
};

const axiosInst = axios.create({
  baseURL: "http://localhost:5000/",
});

export const signup = async (data: SignUpPropertyTypes) => {
  await axiosInst.post("auth/signup", data);
};

export const signin = async (data: SigninPropertyTypes) => {
  return await axiosInst.post<{ token: string }>("auth/signin", data);
};

export const getSavedSearchs = async () => {
  return await axiosInst.get<{ items: SavedSearch[] }>("/instaItem");
};

export const saveSearchItem = async (data: Omit<SavedSearch, "_id">) => {
  return await axiosInst.post("/instaItem", data);
};

export const updateSavedSearch = async (
  itemId: string,
  updatedItem: SavedSearch
) => {
  return await axiosInst.put(`/instaItem/${itemId}`, updatedItem);
};

export const deleteSavedSearchs = async (itemId: string) => {
  return await axiosInst.delete(`/instaItem/${itemId}`);
};

const getApiUrl = (searchQuery: string) => {
  return `https://www.instagram.com/web/search/topsearch/?context=blended&query=${encodeURIComponent(
    searchQuery
  )}&rank_token=0.590185081828652&include_reel=true`;
};

export const getDataFromInstaApi = async (searchQuery: string) => {
  const response = await axios.get<getDataFromInstaApiResponse>(
    getApiUrl(searchQuery)
  );
  return response.data;
};

axiosInst.interceptors.request.use(
  async (config) => {
    config.headers = {
      Authorization: `Bearer ${localStorage.getItem(LOCALSTORAGE.TOKEN)}`,
      Accept: "application/json",
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
