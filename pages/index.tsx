import { getStoredPostsData } from "../lib/posts";

export { Home as default } from "../src/components/home";

export const getStaticProps = async () => {
  const allPostsData = getStoredPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
