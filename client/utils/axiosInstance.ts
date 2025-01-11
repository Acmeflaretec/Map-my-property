import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/`,
  withCredentials: false,
});

interface RequestOptions {
  endpoint: string;
  method: AxiosRequestConfig["method"];
  data?: any;
}

const request = async <T>({
  endpoint,
  method,
  data,
}: RequestOptions): Promise<AxiosResponse<T>> => {
  try {    
    const options: AxiosRequestConfig = {
      method,
      url: endpoint,
      data,
    };
    const res: AxiosResponse<T> = await axiosInstance.request<T>(options);
    console.log(res);
    return res;
  } catch (error: any) {
    if (!error?.response) {
      throw error;
    } else {
      throw error?.response?.data;
    }
  }
};

export default request;
