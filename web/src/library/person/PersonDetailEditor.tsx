import { StyledPersonDetailEditor } from './styled';
import { usePerson } from '../../contexts';
import { IPerson } from 'tyr-common';
import { Loading } from '../misc';
import { EditorForm } from '../forms';
import { EditPersonEditorConfig } from '../../editors';
import { EditorMode } from '../../enums';

const PersonDetailEditor = () => {
  const { PersonState } = usePerson();

  const update = (person: IPerson) => {};

  return (
    <StyledPersonDetailEditor>
      {PersonState!.person ? (
        <EditorForm
          object={PersonState!.person}
          onSave={update}
          items={EditPersonEditorConfig}
          mode={EditorMode.View}
        />
      ) : (
        <Loading />
      )}
    </StyledPersonDetailEditor>
  );
};

export { PersonDetailEditor };
