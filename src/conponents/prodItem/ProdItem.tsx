import { ProdBox, ProdImg, ProdInfo, AddBtn } from "./style";
import plusImg from "../../assets/plus.png";
import { useDispatch } from "react-redux";
import { CurrentItemType, addList } from "../../store/reducer/myList";

export type ProdItemType = {
  imgURL: string;
  artistsName: string;
  id: string;
  trackName: string;
  uri: string;
  releaseDate: string;
  maxwidth: string;
};

// 매개변수의 id는 track_id !!
export default function ProdItem({
  imgURL,
  artistsName,
  trackName,
  id,
  uri,
  releaseDate,
  maxwidth,
}: ProdItemType) {
  const dispatch = useDispatch();
  const addItem = (item: CurrentItemType) => {
    dispatch(addList(item));
  };
  const itemInfo: CurrentItemType = {
    track: {
      album: {
        images: [
          {
            url: imgURL,
          },
        ],
        release_date: releaseDate,
      },
      artists: [
        {
          name: artistsName,
        },
      ],
      id: id,
      name: trackName,
      uri: uri,
    },
  };

  return (
    <ProdBox onClick={() => addItem(itemInfo)} maxwidth={maxwidth}>
      <ProdImg src={imgURL} alt="prodImg" />
      <ProdInfo>
        <p className="trackName">{trackName}</p>
        <p className="name">{artistsName}</p>
      </ProdInfo>
      <AddBtn className="hoverAction">
        <img src={plusImg} alt="plusIcon" />
      </AddBtn>
    </ProdBox>
  );
}
