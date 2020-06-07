import Head from "next/head";
import Layout from "../layout";
import { Date } from "../date";
import * as Styled from "./style";

type Props = {
  postData: { id: string; title: string; date: string; content: string };
};
export const Post: React.FC<Props> = ({ postData }) => {
  return (
    <Layout home={false}>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Styled.H1Heading>{postData.title}</Styled.H1Heading>
      <Styled.DivLightColor>
        <Date dateString={postData.date} />
      </Styled.DivLightColor>
      <div dangerouslySetInnerHTML={{ __html: postData.content }} />
    </Layout>
  );
};
