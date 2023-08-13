import ProdItem from "../../conponents/prodItem/ProdItem";
import { Section, CoverImg, List } from "./style";

export default function PlayList() {
  return (
    <Section>
      <h2>뮤직 라이브러리</h2>
      <div className="listBox">
        <CoverImg>
          <img src="" alt="" />
        </CoverImg>
        {/* 플레이 리스트 */}
        <List>
          <li>
            <ProdItem option="playlist"></ProdItem>
          </li>
        </List>
      </div>
    </Section>
  );
}
