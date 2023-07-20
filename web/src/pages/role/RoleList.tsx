import { StyledRoleList } from './styled';
import {
  BasicCard,
  CardContainer,
  LinkButton,
  PageHeader,
} from '../../library';
import { useRole } from '../../contexts';
import { useEffect } from 'react';

const RoleList = () => {
  const { onList, RoleState } = useRole();

  useEffect(() => {
    onList!();
  }, []);

  return (
    <StyledRoleList>
      <PageHeader title={'Role List'} />
      <LinkButton route={'/role/create'} title={'New Role'} />

      <CardContainer>
        {RoleState &&
          RoleState.roleList &&
          RoleState.roleList.map((role) => {
            return <BasicCard key={role.id} id={role.id} title={role.name} />;
          })}
      </CardContainer>
    </StyledRoleList>
  );
};

export { RoleList };
