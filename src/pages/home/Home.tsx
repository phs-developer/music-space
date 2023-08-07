import { Section, Top3, Best } from "./style";
import ProdCard from "../../conponents/prodCard/ProdCard";

export default function Home() {
  return (
    <Section>
      <Top3>
        <h2>TOP3</h2>
        <div>
          <ProdCard />
          <ProdCard />
          <ProdCard />
        </div>
      </Top3>
      <Best>
        <h2>Best</h2>
        <div className="hiddenContainer">
          <ProdCard />
          <ProdCard />
          <ProdCard />
          <ProdCard />
          <ProdCard />
          <ProdCard />
          <ProdCard />
        </div>
      </Best>
    </Section>
  );
}
