import request from "./axiosInstance";
import { BannerType, SectionType } from "./interface";

const buildQueryParams = (data: Record<string, number | string>) =>
  new URLSearchParams(
    Object.entries(data).reduce((acc, [key, value]) => {
      acc[key] = value.toString();
      return acc;
    }, {} as Record<string, string>)
  ).toString();

const getBanner = async (
  data: any
): Promise<{ data: { data: BannerType[] } }> =>
  request({
    endpoint: `/banners/store?${buildQueryParams(data)}`,
    method: "GET",
  });

const getSections = async (
  data: any
): Promise<{ data: { data: SectionType[] } }> =>
  request({
    endpoint: `/section/store?${buildQueryParams(data)}`,
    method: "GET",
  });

export { getBanner, getSections };
