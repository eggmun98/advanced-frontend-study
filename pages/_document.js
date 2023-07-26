import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/png" href="/logo.png" />
        {/* 위 코드는 파비콘을 적용하는 코드이다.
        파비콘이랑 주소창 위에 나타나는 아이콘을 파비콘이라고 부른다.
        */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
