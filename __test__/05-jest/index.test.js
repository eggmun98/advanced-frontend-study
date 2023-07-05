// 1. 먼저 화면을 그리고 즉 렌더링을 한다.
// 2. 작성자, 제목, 내용 인풋창에 값 입력
// 3. 등록하기 버튼 클릭
// 4. API 요청하기 즉 뮤테이션 요청하기
// 5. 등록된 페이지로 이동

import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import JestUnitTestPage05 from "../../pages/jestStudy/05-jest";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import fetch from "cross-fetch";
import mockRouter from "next-router-mock";

jest.mock("next/router", () => require("next-router-mock"));
// jest에서는 next/router를 못씀 왜? next/router는 브라우저에서만 쓸수 있음
// 그러므로 next/router 라이브러리를 다른 라이브러리로 교체

// import { server } from "../../src/commons/components/commons/mocks/index";
// 이건 테스트 할때마다 계속 적어줘야해서 불편함 => 그래서 jest.setup.js에 이것을 잘라내기해서 붙여넣으면 여러곳에서 쓸수 있을거임
// beforeAll(() => server.listen()); // 모든 테스트가 시작하기 전에 서버를 킵니다
// afterAll(() => server.close()); // 모든 테스트가 끝나면 서버 종료

it("게시글 등록 테스트", async () => {
  const client = new ApolloClient({
    link: new HttpLink({
      uri: "http://mock.com.graphql",
      // 가짜 api를 만들어야함 왜? 우리 api를 이용하면 실제로 등록이 되고 한번에 몇백개 테스트하기가 어려우니까 msw를 깔아서 가짜 api 만들거임
      fetch: fetch,
      // graphQL docs에서는 fetch를 쓰라고 함 근데 여기서는 fetch를 써야 하는데 자바스크립트에 내장된
      // fetch를 여기서는 못씀 그래서 cross-fetch 라이브러리를 이용해야 함
    }),
    cache: new InMemoryCache(),
  });
  render(
    <ApolloProvider client={client}>
      <JestUnitTestPage05></JestUnitTestPage05>
    </ApolloProvider>
  );
  // 먼저 화면을 그린다.

  fireEvent.change(screen.getByRole("input-writer"), {
    target: { value: "성진" },
    // 이벤트 타겟에 벨류에 이름을 넣는다.
  });

  fireEvent.change(screen.getByRole("input-title"), {
    target: { value: "제목 대신 입력해줘" },
  });

  fireEvent.change(screen.getByRole("input-contents"), {
    target: { value: "내용 대신 입력해줘" },
  });

  fireEvent.click(screen.getByRole("submit-button"));
  // 대신 버튼을 눌러주는 코드를 작성

  await waitFor(() => {
    // 버튼 클릭 후 이 함수가 작동하기 위해 waitFor 함수 사용 그러면 기다려 줄수 있음
    expect(mockRouter.asPath).toEqual("/");
    // 페이지 이동 후 "/" 이 주소가 맞는지
  });
});
