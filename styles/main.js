import styled, {css} from 'styled-components'

export const colorPalette = {
    primary: "#162447",
    secondary: "#1F4068",
    something: "#1B1B2F",
    font: "#E43F5A",
    hover: "#ab172f",
    link: "#bf1a35",
    alerts: {
        /**
         * These alerts colors are from Bootstrap: https://getbootstrap.com/docs/4.0/components/alerts/
         */
        primary: {
            color: "#004085",
            backgroundColor: "#cce5ff",
            borderColor: "#b8daff",
        },
        success: {
            color: "#155724",
            backgroundColor: "#d4edda",
            borderColor: "#c3e6cb",
        },
        danger: {
            color: "#721c24",
            backgroundColor: "#f8d7da",
            borderColor: "#f5c6cb",
        },
        warning: {
            color: "#856404",
            backgroundColor: "#fff3cd",
            borderColor: "#ffeeba",
        },
        info: {
            color: "#0c5460",
            backgroundColor: "#d1ecf1",
            borderColor: "#bee5eb",
        }
    }
}


export const StyledBackground = styled.div`
  background-color: ${props => props.theme.primary};
  height: 100vh;
  color: ${props => props.theme.font};

   a:link {
     color: ${props => props.theme.link}; 
     text-decoration: none;
     &:hover {
        color: ${props => props.theme.hover};
     }
   }
   
   h1, h2, h3, h4 {
    font-weight: bolder;
   }
   h1 {
      font-size: 2rem;
    }
    h2 {
      font-size: 1.5rem;
    }
    h3 {
      font-size: 1.17rem;
    }
    h4 {
      font-size: 1rem;
    }
    .right {
      float:right;
    }
    .left {
      float: left;
    }
`;

export const InfoBox = styled.div`
padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border-radius: 2px;
    border-style: solid;
    border-width: 2px;
    ${props => {
    const alertColors = props.theme.alerts[props.type];
    return css`
        color: ${alertColors.color};
        background-color: ${alertColors.backgroundColor};
        border-color: ${alertColors.borderColor};
        `
}};
    b, strong {
      font-weight: bolder;
    }
`

export const Button = styled.button`
    margin: 0.25rem;
    background-color: ${props => props.theme.secondary};
    color: ${props => props.theme.font};
    border: none;
    padding: 1rem 2rem;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 3px;
    cursor: pointer;
    &:hover {
      background-color: ${props => props.theme.something};
      color: ${props => props.theme.hover};
    }
`