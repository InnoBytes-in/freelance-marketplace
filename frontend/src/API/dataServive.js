import axios from 'axios';
import authHeader from './authHeader';

const basePath = "http://localhost:8080/api/1.0";

export default {
  getFreelancers: () => {
    return axios.get(basePath + '/freelancers');
  },

  getFreelancer: (id) => {
    return axios.get(basePath + `/freelancer/${id}`)
  },

  getImage: (id) => {
    return axios.get(basePath + `/freelancer/retrieveImage/${id}`);
  },

  getProjects: () => {
    return axios.get(basePath + '/getProjects');
  },

  placeBid: (id, projectID, bidAmount, duration, proposal, bidDate) => {
    return axios.post(basePath + `/placeBid/${id}`, {projectID, bidAmount, duration, proposal, bidDate}, { headers : authHeader() });
  },

  uploadImage: (id, file) => {
    return axios.post(basePath + `/freelancer/uploadImage/${id}`, file, { headers : {'Content-Type': 'multipart/form-data', 'Authorization' : authHeader()}});
  }

  
}