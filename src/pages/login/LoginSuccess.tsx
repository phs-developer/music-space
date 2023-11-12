import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { setToken, tokenObj } from "../../store/reducer/accessToken";
import { LoginForm } from "./style";

export function LoginSuccess() {
  const [searchParams, setSearchParams] = useSearchParams();
  const code = searchParams.get("code");
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const tokenUpdate = (token: tokenObj) => {
    dispatch(setToken(token));
  };

  useEffect(() => {
    (async function () {
      const res = await axios({
        method: "post",
        url: "https://music-space-spotify-cb3294763381.herokuapp.com/loginSuccess",
        data: {
          headers: {
            "Content-Type": "application/json",
          },
          body: {
            code: code,
          },
        },
      });
      const token = {
        number: res.data.access_token,
        name: "personal",
        time: new Date().getTime(),
      };
      tokenUpdate(token);
      navigate("/");
    })();
  }, [code]);

  return <LoginForm>로그인 중...</LoginForm>;
}
