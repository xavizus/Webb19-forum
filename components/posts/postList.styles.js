import styled from "styled-components";

export const StyledTable = styled.table`
  th, td {
    padding: 15px;
    border-bottom: ${props => props.theme.secondary} 1px solid;
  }
  
  th {
    white-space: nowrap;
    font-weight: bolder;
  }
`;