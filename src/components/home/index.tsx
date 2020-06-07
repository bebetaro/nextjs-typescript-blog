import Head from "next/head";
import Layout from "../layout";
import { TITLE } from "../layout/constants";
import * as Styled from "./style";
import Link from "next/link";
import { Date } from "../date";

type Props = {
  allPostsData: Array<{
    id: string;
    title: string;
    date: string;
  }>;
};

export const Home: React.FC<Props> = ({ allPostsData }) => {
  return (
    <Layout home>
      <Head>
        <title>{TITLE}</title>
      </Head>
      <Styled.SectionHeading>
        <p>This is Bebetaro's Next.js Learning Page</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn"> Next.js tutorial</a>.)
        </p>
      </Styled.SectionHeading>
      <Styled.SectionHeading>
        <Styled.UlList>
          {allPostsData.map(({ id, date, title }) => (
            <Styled.LiListItem key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <Styled.SmallLightText>
                <Date dateString={date} />
              </Styled.SmallLightText>
            </Styled.LiListItem>
          ))}
        </Styled.UlList>
      </Styled.SectionHeading>
    </Layout>
  );
};
