import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import TodoList from "./components/TodoList";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
`;

const App = () => {
  return (
    <AppContainer>
      <GlobalStyle />
      <TodoList />
    </AppContainer>
  );
};

export default App;
