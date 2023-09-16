import { useDispatch, useSelector } from "react-redux";
import { LoginForm } from "./style";
import { decreseCount, increseCount } from "../../store/reducer/counter";
import { RootState } from "../../store/reducer/reducer";

export default function Login() {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increseCount());
  };
  const onDecrease = () => {
    dispatch(decreseCount());
  };

  // return <LoginForm onClick={increse}>로그인 화면 {count}</LoginForm>;
  return (
    <>
      <h1> {count} </h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </>
  );
}
