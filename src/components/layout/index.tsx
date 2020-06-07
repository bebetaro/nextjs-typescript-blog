import Head from "next/head";
import { BackHome } from "./back-home";
import { Header } from "./header";
import { HeaderContent } from "./header-content";
import { NAME, TITLE } from "./constants";
import * as Styled from "./style";

type Props = {
  home: boolean;
};

const Layout: React.FC<Props> = (props) => {
  return (
    <Styled.DivContainer>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            TITLE
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={TITLE} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header>
        <HeaderContent home={props.home} name={NAME} />
      </Header>
      <main>{props.children}</main>
      {!props.home && <BackHome />}
    </Styled.DivContainer>
  );
};

export default Layout;
