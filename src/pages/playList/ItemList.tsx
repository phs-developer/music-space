import { Btn, List, ListItem } from "./style";
import play from "../../assets/play.png";
import x from "../../assets/x.png";
import { useDispatch } from "react-redux";
import { deleteList } from "../../store/reducer/myList";

type Props = {
  list: {
    id: string;
    imgURL: string;
    name: string;
  }[];
  onChangeCurrentItem: (id: string) => void;
};

export default function ItemList({ list, onChangeCurrentItem }: Props) {
  const dispatch = useDispatch();
  function deleteItem(id: string) {
    dispatch(deleteList(id));
  }
  return (
    <List>
      {list.length <= 0 && (
        <ListItem>
          <div>리스트 없음</div>
        </ListItem>
      )}
      {list.map((item) => {
        return (
          <ListItem key={item.id}>
            <div>
              <img src={item.imgURL} alt="이미지" />
              <span>{item.name}</span>
            </div>
            <div>
              <Btn
                type="button"
                color="green"
                onClick={() => onChangeCurrentItem(item.id)}
              >
                <img src={play} alt="재생버튼" />
              </Btn>
              <Btn
                type="button"
                color="red"
                onClick={() => deleteItem(item.id)}
              >
                <img src={x} alt="삭제버튼" />
              </Btn>
            </div>
          </ListItem>
        );
      })}
    </List>
  );
}
