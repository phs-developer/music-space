import { useNavigate } from "react-router-dom";
import { ProdBox, ProdImg, ProdInfo } from "./style";

interface Data {
  imgURL: string;
  name: string;
  description: string;
  id: string;
}

export default function ProdItem({ imgURL, name, description, id }: Data) {
  let navigate = useNavigate();

  function prodPage() {
    sessionStorage.setItem("id", id);
    navigate("/card");
    // 페이지 이동
  }

  return (
    <ProdBox onClick={prodPage}>
      <ProdImg src={imgURL} alt="prodImg" />
      <ProdInfo className="prodInfo">
        <p className="name">{name}</p>
        <p className="description">{description}</p>
      </ProdInfo>
    </ProdBox>
  );
}
