import { ProdBox, ProdImg, ProdInfo, AddBtn } from "./style";
import plusImg from "../../assets/plus.png";

interface Data {
  imgURL: string;
  name: string;
  id: string;
  trackName?: string;
  addPlaylist: (id: string, imgURL: string, name: string) => void;
}

// 매개변수 id는 트랙의 id로 받아와야 함.
export default function ProdItem({
  imgURL,
  name,
  trackName,
  id,
  addPlaylist,
}: Data) {
  return (
    <ProdBox onClick={() => addPlaylist(id, imgURL, name)}>
      <ProdImg src={imgURL} alt="prodImg" />
      <ProdInfo>
        <p className="trackName">{trackName}</p>
        <p className="name">{name}</p>
      </ProdInfo>
      <AddBtn className="hoverAction">
        <img src={plusImg} alt="plusIcon" />
      </AddBtn>
    </ProdBox>
  );
}
