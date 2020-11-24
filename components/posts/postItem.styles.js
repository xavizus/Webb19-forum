import styled from 'styled-components';

export const Body = styled.div`
  display: grid;
  grid-template-columns: 1fr 6fr;
  grid-template-rows: auto;
  grid-template-areas: 
  "userProfile header"
  "userProfile content"
  "postInfo postInfo"
  ;
  width: 600px;
  background-color: ${props => props.theme.secondary};
  border-radius: 4px;
  margin-top: 5px;
  .userProfile {
    grid-area: userProfile;
    .profilePicture {
      color: ${props => props.theme.link};
      font-family: Calibri;
      font-weight: lighter;
      font-size: 2rem;
      margin: 5px;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${props => props.theme.something};
      border-radius: 10px;
      width: 4rem;
      height: 4rem;
      vertical-align: middle;
    }
  }
  .header {
    margin: 5px;
    grid-area: header;
    .title {
      font-weight: bold;
      font-size: 1.25rem;
    }
    .postDetails {
      margin: 5px 0px;
      font-size: 1rem;
      .important {
        font-weight: bold;
        text-decoration: underline;
      }
    }
  }
  
  .content {
    border-radius: 5px;
    background-color: ${props => props.theme.something};
    grid-area: content;
    margin: 5px;
    padding: 1rem;
  }
  
  .postInfo {
    grid-area: postInfo;
    background-color: ${props => props.theme.something};
    border-radius: 4px;
    padding: 9px 5px 2px 5px;
    height: 100%;
  }
  .category {
    border-radius: 4px;
    background-color: ${props => props.theme.primary};
    padding: 8px;
  }
`;