import { List, ListItem } from "./style";
import { ListProps } from "./PlayList";
import PlayBtn from "../../conponents/PlayBtn";

export default function ItemList({ items }: { items: Array<ListProps> }) {
  return (
    <List>
      {items.map((item) => {
        return (
          <ListItem>
            <div>
              <img src={item.imgUrl} alt="이미지" />
              <span>{item.title}</span>
            </div>
          </ListItem>
        );
      })}
    </List>
  );
}
