const express = require("express");
const cors = require('cors');
const session = require('express-session');
const memoryStore = new session.MemoryStore();
const keycloak = require('./config/keycloak-config.js').initKeycloak(memoryStore);
const router = require('./router');

const app = express();
const PORT = process.env.PORT || 4000;


app.use(session({
    secret: '266da629-3f58-48bb-ba74-751ed6be8743',
    store: memoryStore
}));
app.use(cors({
  origin: 'http://localhost:3000'
}))
app.use(express.json());
app.use(keycloak.middleware());
app.use(router);


app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});