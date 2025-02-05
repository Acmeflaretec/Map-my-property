import request from "./axiosInstance";
import {
  BannerType,
  BlogType,
  BuilderType,
  ProjectType,
  SectionType,
} from "./interface";

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

const getProjects = async (
  data: any
): Promise<{ data: { docs: ProjectType[] } }> =>
  request({
    endpoint: `/projects?${buildQueryParams(data)}`,
    method: "GET",
  });

const getProjectById = async (
  data: any
): Promise<{ data: { data: ProjectType } }> =>
  request({
    endpoint: `/projects/url/${data}`,
    method: "GET",
  });

const getBuilderById = async (
  data: any
): Promise<{ data: { data: BuilderType } }> =>
  request({
    endpoint: `/builders/url/${data}`,
    method: "GET",
  });

const sendInquiry = async (data: any) =>
  request({ endpoint: `/contact`, method: "POST", data });

const sendProjectInquiry = async (data: any) =>
  request({ endpoint: `/projectEnquiry`, method: "POST", data });

const getBlogs = async (data: any): Promise<{ data: { data: BlogType[] } }> =>
  request({
    endpoint: `/blogs?${buildQueryParams(data)}`,
    method: "GET",
  });

const getBlogsById = async (
  id: string
): Promise<{ data: { data: BlogType } }> =>
  request({
    endpoint: `/blogs/url/${id}`,
    method: "GET",
  });

export {
  getBanner,
  getSections,
  getProjects,
  getProjectById,
  getBuilderById,
  sendInquiry,
  sendProjectInquiry,
  getBlogs,
  getBlogsById,
};
