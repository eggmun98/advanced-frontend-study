import { setupServer } from "msw/node";
import { apis } from "./apis";

export const server = setupServer(...apis); // 서버 세팅 // 원본을 보존하기 위해 안전하게 복사
// 서버 만드는 코드임
