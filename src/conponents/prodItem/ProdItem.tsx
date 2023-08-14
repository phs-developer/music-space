import { ProdBox, ProdImg, ProdInfo } from "./style";

interface Data {
  option?: string;
  imgURL: string;
  name: string;
  description: string;
  id: string;
}

export default function ProdItem({
  option,
  imgURL,
  name,
  description,
  id,
}: Data) {
  function prodPage() {
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
