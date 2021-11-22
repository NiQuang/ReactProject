import instance from "./instance";

export const signup = (user) => {
    const url = '/signup';
    return instance.post(url, user);
}

export const singin = (user) => {
    const url = '/signin';
    return instance.post(url,user); 
}