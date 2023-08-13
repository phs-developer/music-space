import { ProdBox, ProdImg, ProdInfo } from "./style";

export default function ProdItem({ option }: { option?: string }) {
  function prodPage() {
    // 페이지 이동
  }

  return (
    <ProdBox onClick={prodPage}>
      <ProdImg src="" alt="prodImg" className={option} />
      <ProdInfo className="prodInfo">
        <p>title</p>
        <p>singer</p>
      </ProdInfo>
    </ProdBox>
  );
}
