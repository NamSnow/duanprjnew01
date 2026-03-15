import axios from "../utils/axiosCustomize";

const getDataUsers = () => {
  return axios.get("");
};

const postDataUser = async (username, email, password, image, role) => {
  if (!username || !email || !password) return;

  const formData = new FormData();
  formData.append("image", image);
  formData.append("email", email);
  formData.append("username", username);
  formData.append("password", password);
  formData.append("role", role);

  return await axios.post("", formData);
};

const deleteDataUsers = (userId) => {
  return axios.delete(`${userId}`);
};

const putDataUser = async (id, username, image, role) => {
  const formData = new FormData();
  formData.append("image", image);
  formData.append("username", username);
  formData.append("role", role);

  return await axios.put(`${id}`, formData);
};

export { getDataUsers, postDataUser, deleteDataUsers, putDataUser };
