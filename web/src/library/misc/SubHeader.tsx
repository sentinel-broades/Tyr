import { StyledSubHeader } from './styled';

interface Props {
  title: string;
}
const SubHeader = (props: Props) => {
  const { title } = props;

  return <StyledSubHeader>{title}</StyledSubHeader>;
};

export { SubHeader };
