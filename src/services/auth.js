import axios from "axios";

class AuthService {
  async registerUser({ username, email, password }) {
    try {
      const user = await axios.post("/api/users/register-user", {
        username,
        email,
        password,
      });

      return user?.data?.data;
    } catch (error) {
      throw error;
    }
  }

  async loginUser({ email, password }) {
    try {
      const user = await axios.post("/api/users/login-user", {
        email,
        password,
      });

      if (user) {
        return user?.data?.data;
      }
    } catch (error) {
      throw error;
    }
  }

  async logoutUser() {
    try {
      const user = await axios.post("/api/users/logout-user");
      if (user) {
        return user?.data?.data;
      }
    } catch (error) {
      throw error;
    }
  }

  async getUser() {
    try {
      const user = await axios.get("/api/users/current-user");
      if (user) {
        return user?.data?.data;
      }
    } catch (error) {
      throw error;
    }
  }

  async refreshToken() {
    try {
      const res = await axios.post("/api/users/refresh-access-token");
      if(res) {
        return res?.data?.data;
      }
    } catch (error) {
      throw error;
    }
  }
}

const authService = new AuthService();
export default authService;
