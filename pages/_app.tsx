import { AppProps } from "next/app";
import { GlobalStyle } from "../src/styles/global";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default App;
