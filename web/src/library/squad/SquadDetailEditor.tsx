import { StyledSquadDetailEditor } from './styled';
import { useSquad } from '../../contexts';
import { CreateSquadEditorConfig } from '../../editors';
import { EditorForm } from '../forms';
import { ISquad } from '../../../../common/interfaces';
import { EditorMode } from '../../enums';
import { SquadHeads } from './SquadHeads';
import { Loading } from '../misc';

const SquadDetailEditor = () => {
  const { SquadState } = useSquad();

  const update = (squad: ISquad) => {};

  return (
    <StyledSquadDetailEditor>
      {SquadState!.squad ? (
        <EditorForm
          object={SquadState!.squad}
          onSave={update}
          items={CreateSquadEditorConfig}
          mode={EditorMode.View}
        />
      ) : (
        <Loading />
      )}

      <hr />

      <SquadHeads />
    </StyledSquadDetailEditor>
  );
};

export { SquadDetailEditor };
