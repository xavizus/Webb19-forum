import styled from "styled-components";

export const StyledForm = styled.form`
  h1 {
    text-align: center;
    margin-bottom: 2rem;
  }
  .inputGroup {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    input, select {
      flex:3;
    }
    label {
      flex: 1;
    }
    
  }
  
  label {
    padding-top: 20px;
    font-size: 1.25rem;
  }
  
  input {
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border-radius: 4px;
    font-size: 1rem;
  }
  
  select {
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border-radius: 4px;
    font-size: 1rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 100%;
    background: url("data:image/svg+xml;utf8,<svg fill='${props => props.theme.font.replace('#', '%23')}' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>") 96% / 15% no-repeat #FFF;
    &:hover {
      background: url("data:image/svg+xml;utf8,<svg fill='${props => props.theme.hover.replace('#', '%23')}' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>") 96% / 15% no-repeat #FFF;
    }
  }
`