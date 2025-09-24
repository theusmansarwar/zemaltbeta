import { invokeApi } from "../utils/InvokeApi";
export const CreateLeads = async (data) => {
  const reqObj = {
    path: "/CreateLeads",
    method: "POST",
    headers: {},
    postData: data,
  };
  return invokeApi(reqObj);
};
export const CreateApplication = async (data) => {
  const reqObj = {
    path: "/applications/CreateApplication",
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    postData: data,
  };
  return invokeApi(reqObj);
};
export const countView = async () => {
  const reqObj = {
    path: "/views/count",
    method: "POST",
    headers: {},
    postData: {},
  };
  return invokeApi(reqObj);
};
export const commentAdd = async (data) => {
  const reqObj = {
    path: "/comment/add",
    method: "POST",
    headers: {},
    postData: data,
  };
  return invokeApi(reqObj);
};
export const Subscribe = async (data) => {
  const reqObj = {
    path: "/newsletter/add",
    method: "POST",
    headers: {},
    postData: data,
  };
  return invokeApi(reqObj);
};