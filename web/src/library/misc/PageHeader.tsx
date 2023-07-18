import { StyledPageHeader } from './styled';

interface Props {
  title: string;
}
const PageHeader = (props: Props) => {
  const { title } = props;

  return <StyledPageHeader>{title}</StyledPageHeader>;
};

export { PageHeader };
