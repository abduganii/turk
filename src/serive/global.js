import api from "./api";

export const GetAllData = async (url) => {
  try {
    const response = await api.get(url);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};

export const GetByIdData = async (url, id) => {
  try {
    const response = await api.get(`/${url}/${id}`);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};

export const AddData = async (url, data) => {
    const response = await api.post(`/${url}`, data);
    return response;
 
};


export const UpdateData = async (url, data, id) => {
  const response = await api.patch(`/${url}/${id}`, data);
  return response;
};


export const GetMe = async () => {
  try {
    const res = await api.get('/user/info/me')
  return res
  } catch (error) {
    console.log(error);
  }
 
}

export const LogOut = async () => {
  const res = await api.post('/auth/logout')
  return res
}


