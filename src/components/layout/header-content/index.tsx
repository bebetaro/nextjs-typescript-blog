import Link from "next/link";
import * as Styled from "./style";

type Props = {
  name: string;
  home: boolean;
};

export const HeaderContent: React.FC<Props> = (props) => {
  return (
    <>
      {props.home ? (
        <>
          <Styled.ImgContainer src={"/images/bebe.jpg"} alt={props.name} />
          <Styled.H1Heading>{props.name}</Styled.H1Heading>
        </>
      ) : (
        <>
          <Link href="/">
            <a>
              <Styled.ImgContainer src={"/images/bebe.jpg"} alt={props.name} />
            </a>
          </Link>
          <Styled.H2Heading>
            <Link href={"/"}>
              <Styled.ALinkColorInherit>{props.name}</Styled.ALinkColorInherit>
            </Link>
          </Styled.H2Heading>
        </>
      )}
    </>
  );
};
