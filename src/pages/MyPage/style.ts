import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  padding: 50px 5%;
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
  gap: 1rem;
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
  @media screen and (max-width: 768px) {
    flex-direction: column;
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
    .logoutBtn {
      cursor: pointer;
      &:hover {
        color: gray;
      }
    }
  }
`;

export { Section, ProfileInfo, Ul };
