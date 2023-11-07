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

//--------------------------------

const redirect_uri = "http://localhost:3000/loginSeuccess";
const querystring = require("querystring");

app.get("/login", function (req, res) {
  // var state = generateRandomString(16);
  // var scope = 'user-read-private user-read-email';
  const scopeList =
    "user-follow-modify user-follow-read user-read-email user-read-playback-state playlist-read-private playlist-modify-private playlist-modify-public";

  return res.json(
    "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id: CLIENT_ID,
        redirect_uri: redirect_uri,
        scope: scopeList,
        // state: state
      })
  );
});

//-------------------------------
app.use(express.json()); // for parsing application/json
// app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post("/loginSuccess", async function (req, res) {
  const code = req.body.body.code;
  const authOptions2 = {
    method: "post",
    url: "https://accounts.spotify.com/api/token",
    headers: {
      Authorization:
        "Basic " +
        new Buffer.from(CLIENT_ID + ":" + CLIENT_SECRET).toString("base64"),
    },
    params: {
      code: code,
      redirect_uri: redirect_uri,
      grant_type: "authorization_code",
    },
    json: true,
  };

  const result = await axios(authOptions2)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
  res.send(result);
});

//------------------
// 재생 목록 제목 변경
app.post("/changeTitle", async function (req, res) {
  const headers = req.body.headers;
  const body = req.body.body;
  const result = axios({
    method: "put",
    url: body.url,
    headers: headers,
    data: {
      name: body.name,
    },
  })
    .then(() => {
      return { state: "ok" };
    })
    .catch((err) => {
      return { state: err };
    });
  res.send(result);
});
