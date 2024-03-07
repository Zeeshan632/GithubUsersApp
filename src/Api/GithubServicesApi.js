import axios from "axios";
import Toast from "react-native-toast-message";
const token = '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'

 export const fetchUserByName = async (username) => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `https://api.github.com/users/${username}`,
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
    
    try {
     const response = await axios.request(config);
     return response.data;
   } catch (error) {
     console.log(error.message)
   }
  }

  export const fetchGithubUsers = async() => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://api.github.com/users',
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
    
    return axios.request(config)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      Toast.show({
        type: 'error',
        text1: error.message
      })
    });
  }
