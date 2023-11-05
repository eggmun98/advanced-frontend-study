// src/commons/store/store.js
import { createStore } from "redux";

// 액션
const ADD = "ADD";
const MINUS = "MINUS";

// 리듀서
const countModifier = (state = 0, action) => {
  switch (action.type) {
    case ADD:
      return state + 1;
    case MINUS:
      return state - 1;
    default:
      return state;
  }
};

// 스토어
const countStore = createStore(countModifier);

export default countStore;
