import { ProdBox, ProdImg, ProdInfo, AddBtn } from "./style";
import plusImg from "../../assets/plus.png";
import { useDispatch } from "react-redux";
import { addList, dispatchType } from "../../store/reducer/myList";

interface Data {
  imgURL: string;
  name: string;
  id: string;
  trackName?: string;
  uri: string;
}

// 매개변수의 id는 트랙의 id로 받아와야 함.
export default function ProdItem({ imgURL, name, trackName, id, uri }: Data) {
  const dispatch = useDispatch();
  const addItem = (item: dispatchType) => {
    dispatch(addList(item));
  };
  const itemInfo = {
    id: id,
    imgURL: imgURL,
    name: name,
    uri: uri,
  };

  return (
    <ProdBox onClick={() => addItem(itemInfo)}>
      <ProdImg src={imgURL} alt="prodImg" />
      <ProdInfo>
        <p className="trackName">{trackName}</p>
        <p className="name">{name}</p>
      </ProdInfo>
      <AddBtn className="hoverAction">
        <img src={plusImg} alt="plusIcon" />
      </AddBtn>
    </ProdBox>
  );
}
