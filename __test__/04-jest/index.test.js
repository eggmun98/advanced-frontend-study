import JestUnitTestPage from "../../pages/jestStudy/04-jest";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
it("스냅샷 테스트", () => {
  render(<JestUnitTestPage></JestUnitTestPage>); // 먼저 컴포넌트를 그린다

  // screen.getByRole("count-button");
  fireEvent.click(screen.getByRole("count-button"));
  // 대신 클릭해주는 기능 화면에서 태그의 롤이 count-button 을 클릭해준다.

  expect(screen.getByRole("count")).toHaveTextContent("1");
  //스크린에서 태그의 count의 결과값이 1이 맞는지
});
