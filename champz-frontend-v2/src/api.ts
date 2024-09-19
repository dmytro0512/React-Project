import { ApiError } from "@/types/apiError";
import { ExpectedError } from "@/utils/expectedError";
import { UnauthenticatedError } from "@/utils/unauthenticatedError";
import { UnexpectedError } from "@/utils/unexpectedError";
import Axios, { AxiosInstance } from "axios";

const getApi = (): AxiosInstance => {
  const api = Axios.create({
    baseURL: import.meta.env.VITE_API_HOST_NAME,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  api.interceptors.response.use(
    function (response) {
      if (response.data.success === false) {
        return Promise.reject(new ExpectedError(response.data));
      }
      return response;
    },
    function (error) {
      return Promise.reject(new UnexpectedError(error));
    },
  );

  return api;
};

export const getAuthenticatedApi = (
  token: string,
  logoutFn: () => void,
): AxiosInstance => {
  const api = getApi();

  api.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error: ApiError) {
      if (
        error instanceof UnexpectedError &&
        error.error.response?.status == 401
      ) {
        logoutFn();
        return Promise.reject(new UnauthenticatedError(error.error));
      }
      return Promise.reject(error);
    },
  );

  api.defaults.headers.Authorization = `Bearer ${token}`;

  return api;
};

export const defaultApi = getApi();
