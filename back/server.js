const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = 8080;
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

app.use(cors());
app.listen(PORT, () => console.log(CLIENT_ID));

let authOptions = {
  method: "post",
  url: "https://accounts.spotify.com/api/token",
  headers: {
    Authorization:
      "Basic " +
      new Buffer.from(CLIENT_ID + ":" + CLIENT_SECRET).toString("base64"),
    "Content-Type": "application/x-www-form-urlencoded",
  },
  params: {
    grant_type: "client_credentials",
  },
  json: true,
};

app.get("/", async function (req, res) {
  const result = await axios(authOptions)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
  res.send(result);
});
