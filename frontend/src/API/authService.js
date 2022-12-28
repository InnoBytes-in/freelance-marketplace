import axios from 'axios';

const basePath = "http://localhost:8080/api/1.0/auth";

const register = (firstName, lastName, userName, email, password, role, joinDate) => {
  return axios.post(basePath + "/signup", {
    firstName, lastName, userName, email, password, role, joinDate,
  });
};

const login = (userNameOrEmail, password) => {
  return axios
    .post(basePath+ "/login", {
      userNameOrEmail,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  console.log("gsgsgg");
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;
