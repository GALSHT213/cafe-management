const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT = 5000;

app.use(cors());
app.use(express.json());


app.get("/auth/status", (req, res) => {
	
	res.json({test: "Hello World"});
});

app.listen(port, () => {
    console.log('Server is running on port: ' + port);
});