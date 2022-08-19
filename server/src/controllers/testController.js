var express = require('express');
var router = express.Router();
const keycloak = require('../config/keycloak-config').getKeycloak();

router.get('/anonymous', function(req, res){
    keycloak.redirectToLogin();
    res.send("Hello Anonymous");
});
router.get('/user', keycloak.protect('cafe-owner'), function(req, res){
    res.send("Hello User");
});

router.get('/admin', keycloak.enforcer('user:test', {response_mode: 'token'}), function(req, res) {
    console.log(req);
    res.send("Hello Admin");
});

router.get('/all-user', function(req, res){
    res.send("Hello All User");
});

module.exports = router;