import JestUnitTestPage from "../../pages/jestStudy/02-jest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // render만 이용하는게 아니라 jest-dom을 이용하여 dom을 만들어야 함

it("유닛 테스트", () => {
  render(<JestUnitTestPage></JestUnitTestPage>); // render를 이용하면 render 안에 그려줌

  const myText = screen.getByText("유닛 테스트 div"); // "유닛 테스트 div"라는 text를 가져옴
  expect(myText).toBeInTheDocument(); // myText가 dom안에 그려졌는지 확인해준다.

  const myText2 = screen.getByText("input 값 입력하기:");
  expect(myText2).toBeInTheDocument();

  const myText3 = screen.getByText("제출하기");
  expect(myText3).toBeInTheDocument();
});

// 테스트는 완벽할 수가 없다.
// 완벽도는 프로그래머가 정하는 거
// 완벽하게 테스트 할 것인가?
// 그러면 기능 하나 만들고 테스트 코드를 작성해야하는데 시간이 너무 오래 걸리게 된다.
// 즉 핵심 기능만 테스트 코드를 작성한다.
// 그러다가 특정 기능이 버그가 발생하면 그때 그 테스트 코드를 추가적으로 작성한다.
