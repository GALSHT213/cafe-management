const KcAdminClient = require('keycloak-admin').default;

var kcAdminClient;

function initKeycloakAdmin() {
    kcAdminClient = new KcAdminClient({
        baseUrl: 'http://localhost:8080/auth',
        realmName: 'master'
    });
    return kcAdminClient;
}

function getKeycloakAdminClient() {
    if (kcAdminClient) {
        return kcAdminClient;
    }
    return initKeycloakAdmin();
}

async function authAdmin() {
    await getKeycloakAdminClient().auth({
        username: 'admin',
        password: 'admin',
        grantType: 'password',
        clientId: 'admin-cli'
    });
}

async function authApp({ username, password }) {
    useRealm('cafe-management');
    await getKeycloakAdminClient().auth({
        username,
        password,
        grantType: 'password',
        clientId: 'cafe-management-server'
    });
}


function useRealm(realm) {
    getKeycloakAdminClient().setConfig({
        realmName: realm
    });
}

async function findUsers() {
    return await getKeycloakAdminClient().users.find();
}

async function createUser({ username, password, tenantId }) {
    await getKeycloakAdminClient().users.create({
        realm: 'cafe-management',
        username: username,
        enabled: true,
        credentials: [{
            type: "password",
            value: password,
            temporary: false
        }],
        attributes: {
            tenant_id: tenantId,
          }
    });
}

async function getAccessToken() {
    return await getKeycloakAdminClient().getAccessToken();
}



module.exports = {
    authAdmin,
    authApp,
    useRealm,
    findUsers,
    createUser,
    getAccessToken
}