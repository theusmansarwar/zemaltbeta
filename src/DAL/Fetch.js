import { invokeApi } from "../utils/InvokeApi";

export const fetchallBloglist = async (
  activeCategory,
  page,
  rowsPerPages,
  search
) => {
  const reqObj = {
    path: `/blog/list?categoryId=${activeCategory}&page=${page}&limit=${rowsPerPages}&search=${search}`,
    method: "GET",
    headers: {},
    body: {},
  };
  return invokeApi(reqObj);
};
export const fetchPopularBlogs = async (rowsPerPages) => {
  const reqObj = {
    path: `/blog/popular?limit=${rowsPerPages}`,
    method: "GET",
    headers: {},
    body: {},
  };
  return invokeApi(reqObj);
};

export const fetchBlogCategories = async () => {
  const reqObj = {
    path: `/category/live`,
    method: "GET",
    headers: {},

    body: {},
  };
  return invokeApi(reqObj);
};

export const fetchBlogBySlug = async (id) => {
  const reqObj = {
    path: `/blog/view/${id}`,
    method: "GET",
    headers: {},

    body: {},
  };
  return invokeApi(reqObj);
};
export const fetchFeaturedBlog = async () => {
  const reqObj = {
    path: `/blog/featured`,
    method: "GET",
    headers: {},

    body: {},
  };
  return invokeApi(reqObj);
};
export const getblogSlugs = async () => {
  const reqObj = {
    path: `/blog/sluglist`,
    method: "GET",
    headers: {},

    body: {},
  };
  return invokeApi(reqObj);
};

export const fetchAllServices = async (page, rowsPerPages, search) => {
  const reqObj = {
    path: `/service/list?${page}&limit=${rowsPerPages}&search=${search}`,
    method: "GET",
    headers: {},
    body: {},
  };
  return invokeApi(reqObj);
};
export const fetchServiceBySlug = async (slug) => {
  const reqObj = {
    path: `/service/view/${slug}`,
    method: "GET",
    headers: {},
    body: {},
  };
  return invokeApi(reqObj);
};
export const fetchServicesSlugs = async () => {
  const reqObj = {
    path: `/service/slugs`,
    method: "GET",
    headers: {},
    body: {},
  };
  return invokeApi(reqObj);
};

export const fetchAllTeam= async () => {
  const reqObj = {
    path: `/team/live`,
    method: "GET",
    headers: {
    
    },

    postData: {},
  };
  return invokeApi(reqObj);
};