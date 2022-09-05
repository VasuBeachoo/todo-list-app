import { useSelector } from "react-redux";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import TodoList from "./components/TodoList";
import bgDesktopLight from "./assets/bg-desktop-light.jpg";
import bgDesktopDark from "./assets/bg-desktop-dark.jpg";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
  background: no-repeat;
  background-image: ${(props) =>
    props.theme === "light"
      ? `url(${bgDesktopLight})`
      : `url(${bgDesktopDark})`};
  background-color: ${(props) =>
    props.theme === "light"
      ? "var(--Very-Light-Grayish-Blue)"
      : "var(--Very-Dark-Blue)"};
  padding: 4rem;
`;

const App = () => {
  const theme = useSelector((state) => state.todo.theme);

  return (
    <AppContainer theme={theme}>
      <GlobalStyle />
      <TodoList />
    </AppContainer>
  );
};

export default App;
