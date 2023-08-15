// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import axios from "axios";
import { latestUniversity, user } from "../store";

export const universityService = {
	baseUrl: "http://localhost:3000",
  

	async login(email, password) {
		try {
			const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, { email, password });
			axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
			if (response.data.success) {
        const loggedInUser = await universityService.getUserByEmail(email);
        user.set({
          email: email,
          token: response.data.token,
          firstName: loggedInUser.firstName,
          lastName: loggedInUser.lastName
        })
        localStorage.university = JSON.stringify({email: email, token: response.data.token, 
          firstName: loggedInUser.firstName, lastName: loggedInUser.lastName})
				return true;
			}
			return false;
		} catch (error) {
			console.log(error);
			return false;
		}
	},

  async getUserByEmail(email) {
    try {
      const response = await axios.get(`${this.baseUrl}/api/users/email/${email}`);
      return response.data;
    } catch (error) {
      return [];
    }
  },

  async getCounty(id) {
    const res = await axios.get(`${this.baseUrl}/api/counties/${id}`);
    return res.data;
  },


  async getAllCounties() {
		try {
			const response = await axios.get(`${this.baseUrl}/api/counties`);
			return response.data;
		} catch (error) {
			return [];
		}
	},

  async getUserCounties(userId) {
		try {
			const response = await axios.get(`${this.baseUrl}/api/users/${userId}/counties`);
			return response.data;
		} catch (error) {
			return [];
		}
	},

  async createCounty(county, userId) {
		try {
			const response = await axios.post(`${this.baseUrl}/api/users/${userId}/counties`, county);
			return response.data;
		} catch (error) {
			return [];
		}
	},

  async deleteCounty(id) {
    await axios.delete(`${this.baseUrl}/api/counties/${id}`);
    return "success";
  },

  async createUniversity(university,id) {
    try {
      const res = await axios.post(`${this.baseUrl}/api/counties/${id}/universities`, university);
      // latestUniversity.set(university);
      return res.data;
    } catch (error) {
      return false;
    }
  },

  async deleteUniversity(id) {
    await axios.delete(`${this.baseUrl}/api/universities/${id}`);
    return "success";
  },


  async getAllUniversities() {
		try {
			const response = await axios.get(this.baseUrl + "/api/universities");
			return response.data;
		} catch (error) {
			return [];
		}
	},



	async logout() {
		axios.defaults.headers.common["Authorization"] = "";
		localStorage.removeItem("university");
    user.set({
      email: "",
      token: "",
    })
	},

	async signup(firstName, lastName, email, password) {
		try {
			const userDetails = {
				firstName: firstName,
				lastName: lastName,
				email: email,
				password: password
			};
			await axios.post(this.baseUrl + "/api/users", userDetails);
			return true;
		} catch (error) {
			return false;
		}
	},

  async uploadImage(image,countyId) {
    try {
      
      await axios.post(`${this.baseUrl}/api/county/${countyId}/uploadImage`, image);
      return true;
    } catch (error) {
      return false;
    }
  },

  async deleteImage(countyId) {
    try {
      await axios.get(`${this.baseUrl}/api/county/${countyId}/deleteImage`);
      return true;
    } catch (error) {
      return false;
    }
  },

  reload() {
		const universityCredentials = localStorage.university;
		if (universityCredentials) {
			const savedUser = JSON.parse(universityCredentials);
			user.set({
				email: savedUser.email,
				token: savedUser.token,
        firstName: savedUser.firstName,
        lastName: savedUser.lastName
			});
			axios.defaults.headers.common["Authorization"] = "Bearer " + savedUser.token;
		}
	}
};