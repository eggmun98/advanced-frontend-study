import GitHubCalendar from "react-github-calendar";

export default function GithubLibraryPage() {
  //

  // Github Chart 라이브러리
  // <img src="https://ghchart.rshah.org/githubId" />
  // github 차트를 가져올 수 있는 라이브러리이다.
  // <img src="https://ghchart.rshah.org/000000/eggmun98" />
  // githubId 앞에 색상코드를 적으면 색상 변경도 가능하다.

  // GitHub Contributions Calendar 라이브러리
  //  labels 속성을 통해서 왼쪽 하단의 메세지를 적을 수 있다.
  // blockSize 속성을 통해서 칸의 사이즈를 조정할 수 있다.
  // showWeekdayLabels 이 속성을 통해서 왼쪽에 요일을 표시할 수 있다.

  return (
    <>
      <div>Github Chart 라이브러리</div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <img src="https://ghchart.rshah.org/eggmun98" />
        <img src="https://ghchart.rshah.org/000000/eggmun98" />
      </div>
      <div style={{ marginTop: 30 }}>
        GitHub Contributions Calendar 라이브러리
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <GitHubCalendar
          username="eggmun98"
          labels={{
            totalCount: "나만의 Github 차트",
          }}
          blockSize={50}
          showWeekdayLabels
        ></GitHubCalendar>
      </div>
    </>
  );
}
