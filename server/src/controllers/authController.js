var express = require('express');
var router = express.Router();
const keycloakAdmin = require("../config/keycloakAdmin");

router.post('/login', async function (req, res) {
  
    const { username, password } = req.body;

    if (!username || !password) {
        // Error
    }

    await keycloakAdmin.authApp({ username, password });
    const accessToken = await keycloakAdmin.getAccessToken();
    
    res.send({ accessToken });
})

router.get('/token', async function (req, res) {
    res.send({accessToken: await keycloakAdmin.getAccessToken()});
})
/*
    1. Call login with username / password
    2. Get access token from keycloak -> 
            curl --location --request POST 'http://localhost:8080/auth/realms/cafe-management/protocol/openid-connect/token' \
                 --header 'Content-Type: application/x-www-form-urlencoded' \
                 --header 'Cookie: AUTH_SESSION_ID=3ddfd5e0-52f0-4aeb-a7fb-d091291ba24e.a253f4c88ec3; connect.sid=s%3AJEKS86o-NPrFaA7r3FHz1KsyVp1R0Wio.4hG2XROvFmd6o%2F5XGUwe%2BbviTWzzX7GZEmLlNrpKQEE' \
                 --data-urlencode 'grant_type=password' \
                 --data-urlencode 'username=owner4' \
                 --data-urlencode 'password=owner4' \
                 --data-urlencode 'client_id=cafe-management-server'
    3. WIN?
*/



module.exports = router;