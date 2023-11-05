import { useDispatch, useSelector } from "react-redux";
import { popItem, pushItem } from "../../src/commons/store/store";
import { useState } from "react";

const ReduxStudyPage = () => {
  const [item, setItem] = useState("");

  const onChangeItem = (e) => {
    setItem(e.target.value);
  };

  // 디스패치
  const dispatch = useDispatch();
  // 스테이트
  const count = useSelector((state) => state.counter);
  const array = useSelector((state) => state.initialState.array);

  console.log("카운터 :", count);
  console.log(array);

  return (
    <>
      <h1>Redux Study</h1>
      <div>Count: {count}</div>
      <button onClick={() => dispatch({ type: "ADD" })}>Add</button>
      <button onClick={() => dispatch({ type: "MINUS" })}>Minus</button>
      <input onChange={onChangeItem}></input>
      <div>
        <button onClick={() => dispatch(pushItem(item))}>항목 추가</button>
        <button onClick={() => dispatch(popItem())}>마지막 항목 제거</button>
        <ul>
          {array.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ReduxStudyPage;
