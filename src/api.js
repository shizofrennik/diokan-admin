import axios from 'axios';
export const API_URL = 'http://ec2-34-211-129-250.us-west-2.compute.amazonaws.com:3000/api/v1/graphql';

export function fetchSignIn(auth0UserUrl, data) {
    return axios.post("https://" + auth0UserUrl + "/oauth/token", data).then(resp => resp.data)
}

export function fetchSignUp(auth0UserUrl, data) {
    return axios.post("https://" + auth0UserUrl + "/dbconnections/signup", data, {validateStatus: (status) => {
        return status < 500;
    }})
}