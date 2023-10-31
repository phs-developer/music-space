import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/reducer/reducer";
import styled from "styled-components";
import baseImg from "../../assets/user.png";
import { resetToken } from "../../store/reducer/accessToken";
import { useNavigate } from "react-router-dom";
import { Playlist } from "./Playlist";

type ProfileType = {
  name: string;
  email: string;
  img: string;
  follower: string;
  id: string;
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
        console.log(res.data.id);
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
      <Playlist id={profile.id} />
    </Section>
  );
};

const Section = styled.section`
  width: 85vw;
  padding: 50px 20px;
  font-family: "Noto Sans KR";
  h2 {
    font-size: 2rem;
    font-weight: 800;
    padding: 10px;
    margin-bottom: 1.5rem;
  }
`;

const ProfileInfo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 300px;
  min-width: 300px;
  padding: 2rem;
  margin-bottom: 2rem;
  .imgWrap {
    > img {
      border-radius: 50%;
      width: 200px;
      height: 200px;
      background-color: white;
      padding: 2rem;
    }
  }
  .infoWrap {
    min-width: 50%;
  }
`;

const Ul = styled.ul`
  li {
    line-height: 2.5rem;
    span {
      display: inline-block;
      font-weight: bold;
      width: 200px;
    }
  }
`;
