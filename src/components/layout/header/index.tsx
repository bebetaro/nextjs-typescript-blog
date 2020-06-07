import * as Styled from "./style";

export const Header: React.FC = (props) => {
  return <Styled.HeaderContainer>{props.children}</Styled.HeaderContainer>;
};
