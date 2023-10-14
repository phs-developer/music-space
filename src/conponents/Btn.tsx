import { styled } from "styled-components";
import play from "../assets/play.png";

export default function PlayBtn(color: string) {
  return (
    <Btn type="button" bgColor={color}>
      <img src={play} alt="재생버튼" />
    </Btn>
  );
}

const Btn = styled.button<{ bgColor: string }>`
  background-color: ${(props) => props.bgColor};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  align-self: center;
  img {
    padding: 10px;
    width: 30px;
    height: 30px;
  }
`;
