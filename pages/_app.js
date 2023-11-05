import { Provider } from "react-redux";
import countStore from "../src/commons/store/store";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={countStore}>
      <Component {...pageProps} />
    </Provider>
  );
}
