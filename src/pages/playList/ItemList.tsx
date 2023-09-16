import { Btn, List, ListItem } from "./style";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducer/reducer";
import play from "../../assets/play.png";

type Props = {
  onChangeCurrentItem: (id: string) => void;
};

export default function ItemList({ onChangeCurrentItem }: Props) {
  const list = useSelector((state: RootState) => state.setList.list);
  console.log(list);

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
