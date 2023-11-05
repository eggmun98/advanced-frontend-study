// src/commons/store/store.js
import { combineReducers, createStore } from "redux";

// 액션 - 카운터 예제
const ADD = "ADD";
const MINUS = "MINUS";

// 리듀서 - 카운터 예제
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case ADD:
      return state + 1;
    case MINUS:
      return state - 1;
    default:
      return state;
  }
};

// ====================

// 액션2 - 배열 예제
const PUSH_ITEM = "PUSH_ITEM";
const POP_ITEM = "POP_ITEM";

// 액션 생성 함수 - 배열 예제
export const pushItem = (item) => ({ type: PUSH_ITEM, item });
export const popItem = () => ({ type: POP_ITEM });

// 초기 상태 - 배열 예제
const initialState = {
  array: [],
};

// 리듀서 - 배열 에제
function arrayReducer(state = initialState, action) {
  switch (action.type) {
    case PUSH_ITEM:
      return {
        ...state,
        array: [...state.array, action.item],
      };
    case POP_ITEM:
      return {
        ...state,
        array: state.array.slice(0, -1), // 마지막 항목을 제거합니다.
      }; // slice는 원본 배열을 복사함
    // pop() push() 메소드를 사용하지 않는 이유는 원본 배열을 변경하기 때문
    // 리덕스는 불변성을 유지해야 한다.
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  counter: counterReducer,
  initialState: arrayReducer,
});

// 스토어
const store = createStore(rootReducer);

export default store;

// 메소드 연습
//const qqq = ["1", "2", "3", "4", "5"]
// const ddd = [...qqq, "6"]

// const ccc = qqq.slice(0, -1)
// const aaa = qqq.pop();

// console.log(ddd) // [ '1', '2', '3', '4', '5', '6' ]
// console.log(ccc) // [ '1', '2', '3', '4' ]
