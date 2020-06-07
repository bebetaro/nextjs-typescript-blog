import Link from "next/link";
import * as Styled from "./style";

export const BackHome = () => {
  return (
    <Styled.DivContainer>
      <Link href="/">
        <a>← Back to home</a>
      </Link>
    </Styled.DivContainer>
  );
};
