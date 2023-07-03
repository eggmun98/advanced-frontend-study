import JestUnitTestPage from "../../pages/jestStudy/03-jest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
it("스냅샷 테스트", () => {
  // 우리가 UI를 하나하나 텍스트를 작성하면서 검사를 할수 없기 때문에 스냅샷 테스트를 사용한다.
  const result = render(<JestUnitTestPage></JestUnitTestPage>);

  expect(result.container).toMatchInlineSnapshot(`
<div>
  <div>
    유닛 테스트 div
  </div>
  input5 값 입력하기: 
  <input
    type="text"
  />
  <button>
    제출하기
  </button>
</div>
`); // result의 전체를 사진을 찍으면서 검사를 한다.

  // 스냅샷을 업데이트 하고 싶으면 yarn test -u 명령어를 입력하면 된다.
});
