import { useNavigate } from "react-router-dom";
import { ProdBox, ProdImg, ProdInfo, AddBtn } from "./style";
import plusImg from "../../assets/plus.png";

interface Data {
  imgURL: string;
  name: string;
  description: string;
  id: string;
}

export default function ProdItem({ imgURL, name, description, id }: Data) {
  function prodPage() {
    sessionStorage.setItem("id", id);
  }

  return (
    <ProdBox onClick={prodPage}>
      <ProdImg src={imgURL} alt="prodImg" />
      <ProdInfo>
        <p className="name">{name}</p>
        <p className="description">{description}</p>
      </ProdInfo>
      <AddBtn className="hoverAction">
        <img src={plusImg} alt="plusIcon" />
      </AddBtn>
    </ProdBox>
  );
}
