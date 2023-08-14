require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = 8080;
const CLIENT_ID = "c14325bfbb0c4bcb832cea408f902098";
const CLIENT_SECRET = "2b5b06efb1b342eb821eac8b4fb35ced";

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
