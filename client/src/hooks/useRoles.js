import { useState } from 'react';

const extractRoles = (accessTokenJwt) => {
    const accessTokenJwtBody = accessTokenJwt.split('.')[1];
    const accessToken = JSON.parse(atob(accessTokenJwtBody));

    return accessToken.resource_access['cafe-management-server'] ?
        accessToken.resource_access['cafe-management-server'].roles : []

}


export const useRoles = (defaultValue) => {
    const [value, setValue] = useState(() => {
        const accessTokenJwt = localStorage.getItem('auth');

        return accessTokenJwt ? extractRoles(accessTokenJwt) : defaultValue;
    });


    const setRolesValue = (newAccessTokenJwt) => {
        setValue(extractRoles(newAccessTokenJwt));
    };


    return [
        value,
        setRolesValue,
    ];
}
