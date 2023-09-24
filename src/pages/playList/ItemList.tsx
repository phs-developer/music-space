import { Btn, List, ListItem } from "./style";
import play from "../../assets/play.png";

type Props = {
  list: {
    id: string;
    imgURL: string;
    name: string;
  }[];
  onChangeCurrentItem: (id: string) => void;
};

export default function ItemList({ list, onChangeCurrentItem }: Props) {
  return (
    <List>
      {list.length <= 0 && (
        <ListItem>
          <div>리스트 없음</div>
        </ListItem>
      )}
      {list.map((item) => {
        return (
          <ListItem>
            <div>
              <img src={item.imgURL} alt="이미지" />
              <span>{item.name}</span>
            </div>
            <Btn type="button" onClick={() => onChangeCurrentItem(item.id)}>
              <img src={play} alt="재생버튼" />
            </Btn>
          </ListItem>
        );
      })}
    </List>
  );
}
