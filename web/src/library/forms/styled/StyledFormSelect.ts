import { Select } from '@mui/material';
import styled from 'styled-components';

const StyledFormSelect = styled(Select)`
  min-width: 200px;
  background-color: ${(props) => props.theme.bgColTertiary};

  .select-img {
    height: 25px !important;
    width: 25px !important;
  }

  .tyr-ms-lab {
    color: ${(props) => props.theme.fontColSecondary} !important;
  }
`;

export { StyledFormSelect };
