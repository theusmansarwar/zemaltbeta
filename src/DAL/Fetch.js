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

export const fetchDropDownServices = async () => {
  const reqObj = {
    path: `/service/menu`,
    method: "GET",
    headers: {},
    body: {},
  };
  return invokeApi(reqObj);
};
export const fetchAllServices = async (page, rowsPerPages) => {
  const reqObj = {
    path: `/service/list?${page}&limit=${rowsPerPages}`,
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
export const fetchSubServiceBySlug = async (slug) => {
  const reqObj = {
    path: `/sub-service/view/${slug}`,
    method: "GET",
    headers: {},
    body: {},
  };
  return invokeApi(reqObj);
};

export const fetchAllTeam = async () => {
  const reqObj = {
    path: `/team/live`,
    method: "GET",
    headers: {},

    postData: {},
  };
  return invokeApi(reqObj);
};
export const fetchFeaturedTeam = async () => {
  const reqObj = {
    path: `/team/featured`,
    method: "GET",
    headers: {},

    postData: {},
  };
  return invokeApi(reqObj);
};
export const fetchTestimonial = async () => {
  const reqObj = {
    path: `/testimonial/live`,
    method: "GET",
    headers: {},

    postData: {},
  };
  return invokeApi(reqObj);
};
export const fetchIndustries = async () => {
  const reqObj = {
    path: `/industry/live`,
    method: "GET",
    headers: {},

    postData: {},
  };
  return invokeApi(reqObj);
};
export const fetchCaseStudies = async () => {
  const reqObj = {
    path: `/casestudy/live`,
    method: "GET",
    headers: {},

    postData: {},
  };
  return invokeApi(reqObj);
};
export const fetchProducts = async () => {
  const reqObj = {
    path: `/product/live`,
    method: "GET",
    headers: {},

    postData: {},
  };
  return invokeApi(reqObj);
};
export const fetchJobs = async () => {
  const reqObj = {
    path: `/jobs/live`,
    method: "GET",
    headers: {},

    postData: {},
  };
  return invokeApi(reqObj);
};
export const fetchJobById = async (id) => {
  const reqObj = {
    path: `/jobs/get/${id}`,
    method: "GET",
    headers: {},

    postData: {},
  };
  return invokeApi(reqObj);
};
export const getComments = async (data) => {
  const reqObj = {
    path: `/comment/approved-comment`,
    method: "GET",
    headers: {
    
    },

    postData: {data},
  };
  return invokeApi(reqObj);
};