import axios from 'axios';

const base_url = 'https://e5a3-112-208-66-166.ngrok-free.app/';

const login = async (user) => {
    try {
        const response = await axios.post(`${base_url}api/users/login`, {
            username: user.username,
            password: user.password,
        });

        // If response status is between 200 and 299, return the response object
        if (response.status >= 200 && response.status < 300) {
            return response.data; // Assuming the token is in the response data
        }else if(response.status >= 400){
            return 1;
        }
        else {
            return null;
        }
    } catch (error) {
        console.error('Error:', error);
        return null; // Return null if an error occurs
    }
}

const register = async (user) => {
    try {
        const response = await axios.post(`${base_url}api/users/register`, {
            username: user.username,
            password: user.password,
        });

        // If response status is between 200 and 299, return the response object
        if (response.ok) {
            return response;
        } else {
            return null;
        }
    } catch (error) {
        return null; // Return null if an error occurs
    }
}

export { login, register };
