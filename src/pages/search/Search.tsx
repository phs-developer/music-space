import ProdCard from "../../conponents/prodCard/ProdCard";
import { Section, Input, SearchList } from "./style";

export default function Search() {
  return (
    <Section>
      <Input type="text" placeholder="가수명 입력" />
      <SearchList>
        <ProdCard size="small" />
        <ProdCard size="small" />
        <ProdCard size="small" />
        <ProdCard size="small" />
        <ProdCard size="small" />
        <ProdCard size="small" />
        <ProdCard size="small" />
        <ProdCard size="small" />
      </SearchList>
    </Section>
  );
}
