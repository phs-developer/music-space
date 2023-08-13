import ProdCard from "../../conponents/prodItem/ProdItem";
import { Section, Input, SearchList } from "./style";

export default function Search() {
  return (
    <Section>
      <Input type="text" placeholder="가수명 입력" />
      <SearchList>
        <ProdCard option="small" />
        <ProdCard option="small" />
        <ProdCard option="small" />
        <ProdCard option="small" />
        <ProdCard option="small" />
        <ProdCard option="small" />
        <ProdCard option="small" />
        <ProdCard option="small" />
      </SearchList>
    </Section>
  );
}
