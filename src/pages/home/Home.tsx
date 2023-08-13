import { useEffect } from "react";
import ProdItem from "../../conponents/prodItem/ProdItem";
import { Section, Top3, Best } from "./style";
import axios from "axios";

export default function Home() {
  useEffect(() => {
    async function connect() {
      const res = await axios.get("http://localhost:8080");
      console.log(res.data);
    }
    connect();
  }, []);

  return (
    <Section>
      <Top3>
        <h2>TOP3</h2>
        <div>
          <ProdItem />
          <ProdItem />
          <ProdItem />
        </div>
      </Top3>
      <Best>
        <h2>Best</h2>
        <div className="hiddenContainer">
          <ProdItem />
          <ProdItem />
          <ProdItem />
          <ProdItem />
          <ProdItem />
          <ProdItem />
        </div>
      </Best>
    </Section>
  );
}
