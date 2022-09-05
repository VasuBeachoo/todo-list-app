import { createGlobalStyle, css } from "styled-components";

const styled = { createGlobalStyle };

const GlobalStyle = styled.createGlobalStyle`
  :root {
    --Bright-Blue: hsl(220, 98%, 61%);
    --Check-Bg-Cyan: hsl(192, 100%, 67%);
    --Check-Bg-Violet: hsl(280, 87%, 65%);

    --Very-Light-Gray: hsl(0, 0%, 98%);
    --Very-Light-Grayish-Blue: hsl(236, 33%, 92%);
    --Light-Grayish-Blue: hsl(233, 11%, 84%);
    --Dark-Grayish-Blue: hsl(236, 9%, 61%);
    --Very-Dark-Grayish-Blue-1: hsl(235, 19%, 35%);

    --Very-Dark-Blue: hsl(235, 21%, 11%);
    --Very-Dark-Desaturated-Blue: hsl(235, 24%, 19%);
    --Light-Grayish-Blue-Dark: hsl(234, 39%, 85%);
    --Light-Grayish-Blue-Hover: hsl(236, 33%, 92%);
    --Dark-Grayish-Blue-Dark: hsl(234, 11%, 52%);
    --Very-Dark-Grayish-Blue-2: hsl(233, 14%, 35%);
    --Very-Dark-Grayish-Blue-3: hsl(237, 14%, 26%);
  }

  * {
    box-sizing: border-box;
    font-family: "Josefin Sans", sans-serif;
  }

  body {
    margin: 0;
  }
`;

export const mixinListItem = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 1.25rem;
  width: 100%;
  padding: 1.25rem 1.75rem 1.25rem 1.5rem;
`;

export const mixinItemText = css`
  color: ${(props) => props.theme.heavyTextClr};
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 2.25ch;
  margin: 0;
`;

export default GlobalStyle;
