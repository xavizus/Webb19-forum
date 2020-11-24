import styled from 'styled-components';


export const StyledNavbar = styled.div`
  display: flex;
  justify-content: center;
  line-height: 1.25rem;
  list-style-type: none;
  margin: auto;
  padding: 0;
  width: 50%;
  overflow: hidden;
  .item {
    margin-left: 1rem;
    a, p {
      font-family: Montserrat;
      text-transform: uppercase;
      letter-spacing: .2rem;
      font-weight: bolder;
      display: block;
      color: ${props => props.theme.link};
      padding: 14px 16px;
      text-decoration: none;
      &:hover {
        color: ${props => props.theme.hover};
        background-color: ${props => props.theme.font};
      }
    }
  }
  .start {
    align-self: flex-start;
  }
  .arrowDown {
    content: '';
    position: relative;
    border: 10px solid #000;
    top: 0.75rem;
    margin-left: 5px;
    border-color: ${props => props.theme.link} transparent transparent transparent;
  }
  .user {
    align-self: flex-end;
  }
  
`;
