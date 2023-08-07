import { ProdBox, ProdImg } from "./style";

export default function ProdCard({ size }: { size?: string }) {
  return (
    <ProdBox>
      <ProdImg src="" alt="prodImg" className={size} />
      <span>title</span>
      <span>singer</span>
    </ProdBox>
  );
}
