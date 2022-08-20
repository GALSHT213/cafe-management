var express = require('express');
var router = express.Router();
const crypto = require("crypto");
const keycloakAdmin = require("../config/keycloakAdmin");
const keycloak = require('../config/keycloak-config').getKeycloak();


router.get('/', keycloak.protect('app-owner'), async function (req, res) {
    res.send({ success: 'User has access to tenants'});
});

router.post('/register', async function(req, res) {
    const { ownerUsername, ownerPassword, waiterUsername, waiterPassword } = req.body;

    if (!ownerUsername || !ownerPassword || !waiterUsername || !waiterPassword) {
        // Throw error
    }

    await keycloakAdmin.authAdmin();
    await keycloakAdmin.useRealm('cafe-management');


    // Create tenantId and save in Mongo
    const tenantId = crypto.randomBytes(16).toString("hex");

    // console.log(await keycloakAdmin.findUsers());
    await keycloakAdmin.createUser({username: ownerUsername, password: ownerPassword, tenantId: tenantId});
    await keycloakAdmin.createUser({username: waiterUsername, password: waiterPassword, tenantId: tenantId});
       
    // Create user

    res.send("Hello from register tenant");

});

module.exports = router;