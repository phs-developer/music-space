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
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

const redirect_uri = "http://localhost:3000/loginSeuccess";

app.post("/loginSuccess", async function (req, res) {
  const code = req.body.body.code;
  console.log(req.body);
  const authOptions2 = {
    method: "post",
    url: "https://accounts.spotify.com/api/token",
    params: {
      code: code,
      redirect_uri: redirect_uri,
      grant_type: "authorization_code",
    },
    headers: {
      Authorization:
        "Basic " +
        new Buffer.from(CLIENT_ID + ":" + CLIENT_SECRET).toString("base64"),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    json: true,
  };

  // const result = await axios(authOptions2);
  // console.log(result);
  // .then((response) => {
  //   return response.data;
  // })
  // .catch((error) => {
  //   return error;
  // });
  // res.send(result);
});
