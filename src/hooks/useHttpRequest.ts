import { useState } from "react";

import { IAPIResult } from "../types/api";

interface IHttpResponse {
  isLoading: boolean;
  errorMessage: string;
  sendRequest: (s_query: string) => Promise<IAPIResult | null>;
  clearError: () => void;
}

const API_KEY = "0711939789d03a8c0a723db295e9f198";
const API_LANGUAGE = "en-US";
const pageNumber = "1";

const useHttpRequest = (): IHttpResponse => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const sendRequest = async (queryString: string) => {
    try {
      setIsLoading(true);

      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=${API_LANGUAGE}&query=${queryString}&page=${pageNumber}&include_adult=true`
      );
      const data = await response.json();
      return {
        state: response.status,
        data: data,
      };
    } catch (err) {
      console.error(err);
      setIsLoading(false);
      setErrorMessage(
        "An error happend on fetch data. Please check the console log."
      );
      return {
        state: 404,
        error: "An error happend on fetch data. Please check the console log.",
      };
    }
  };

  const clearError = () => {
    setErrorMessage("");
  };

  return { isLoading, errorMessage, sendRequest, clearError };
};

export default useHttpRequest;
