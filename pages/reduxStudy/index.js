// 어딘가의 React 컴포넌트 파일
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ReduxStudyPage = () => {
  // 디스패치
  const dispatch = useDispatch();
  // 스테이트
  const count = useSelector((state) => state);

  return (
    <>
      <h1>Redux Study</h1>
      <div>Count: {count}</div>
      <button onClick={() => dispatch({ type: "ADD" })}>Add</button>
      <button onClick={() => dispatch({ type: "MINUS" })}>Minus</button>
    </>
  );
};

export default ReduxStudyPage;
