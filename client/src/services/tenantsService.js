import * as request from "./requester";

const baseUrl = 'http://localhost:4000/api/tenants';

export const getAll = () => 
    request.get(`${baseUrl}`);
