// 재생 목록 이름 변경
import { ChangeEvent, FormEvent, useState } from "react";
import writing from "../../../assets/writing.png";
import axios from "axios";
import { itemsType } from "../PlayList";
import { tokenObj } from "../../../store/reducer/accessToken";

type ChangeTitleProps = {
  listID: itemsType;
  token: tokenObj;
  updateMyList: (id: string, changedTitle: string) => void;
};

export const ChangeTitle = ({
  listID,
  token,
  updateMyList,
}: ChangeTitleProps) => {
  const [isForm, setIsForm] = useState(false);
  const [formValue, setFormValue] = useState("");

  function onChangeTitle(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    axios({
      method: "post",
      url: "http://localhost:8080/changeTitle",
      data: {
        headers: {
          Authorization: "Bearer " + token.number,
          "Content-Type": "application/json",
        },
        body: {
          name: formValue,
          url: `https://api.spotify.com/v1/playlists/${listID.id}`,
        },
      },
    })
      .then(() => {
        alert("제목이 변경되었습니다.");
        setIsForm(!isForm);
        updateMyList(listID.id, formValue);
      })
      .catch((err) => console.log("제목 변경 실패" + err));
  }

  function onChangeFormValue(e: ChangeEvent<HTMLInputElement>) {
    setFormValue(e.target.value);
  }

  return (
    <>
      <img src={writing} alt="제목 변경" onClick={() => setIsForm(!isForm)} />
      {isForm && (
        <form onSubmit={onChangeTitle}>
          <input type="text" onChange={onChangeFormValue}></input>
          <button type="submit">변경</button>
        </form>
      )}
    </>
  );
};
