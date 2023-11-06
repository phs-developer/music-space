import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/reducer/reducer";
import baseImg from "../../assets/user.png";
import { resetToken } from "../../store/reducer/accessToken";
import { useNavigate } from "react-router-dom";
import { ProfileInfo, Section, Ul } from "./style";

export type ProfileType = {
  name: string;
  email: string;
  img: string;
  follower: string;
  id: string;
};

export type ProfileData = {
  displayName: string;
  email: string;
  followers: {
    total: string;
  };
  id: string;
  images: string[];
};

export const MyPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state: RootState) => state.setAccessToken.token);
  const [profile, setProfile] = useState<ProfileType>({
    name: "이름",
    email: "이메일",
    img: "이미지",
    follower: "팔로워 수",
    id: "아이디",
  });

  function tokenReset() {
    // 로그아웃 시 토큰 초기화
    dispatch(resetToken());
    navigate("/");
  }

  useEffect(() => {
    // 프로필 정보 api
    token &&
      (async function () {
        const res = await axios("https://api.spotify.com/v1/me", {
          headers: {
            Authorization: "Bearer " + token.number,
          },
        });

        setProfile({
          name: res.data.display_name,
          email: res.data.email,
          follower: res.data.followers.total,
          id: res.data.id,
          img: res.data.images[0],
        });
      })();
  }, [token]);

  return (
    <Section>
      <h2>프로필</h2>
      <ProfileInfo>
        <div className="imgWrap">
          <img
            src={profile.img === undefined ? baseImg : profile.img}
            alt="프로필 이미지"
          />
        </div>
        <Ul className="infoWrap">
          <li>
            <span>이름</span> {profile.name}
          </li>
          <li>
            <span>이메일</span> {profile.email}
          </li>
          <li>
            <span>팔로워 수</span> {profile.follower}
          </li>
          <li>
            <span onClick={tokenReset}>로그아웃</span>
          </li>
        </Ul>
      </ProfileInfo>
    </Section>
  );
};
