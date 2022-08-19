import * as request from "./requester";

const baseUrl = 'http://localhost:4000/api/auth';

export const login = (username, password) => 
    request.post(`${baseUrl}/login`, { username, password });


export const logout = async (accessToken) => {
    try {
        const response = await fetch(`${baseUrl}/logout`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });

        return response;
    } catch (error) {
        console.log(error);
    }
};
