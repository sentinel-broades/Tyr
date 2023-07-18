import { StyledCardContainer } from './styled';

interface Props {
  children: any;
}

const CardContainer = (props: Props) => {
  return <StyledCardContainer>{props.children}</StyledCardContainer>;
};

export { CardContainer };
