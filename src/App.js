import styled from "styled-components";
import TodoList from "./components/TodoList";

const AppContainer = styled.div``;

const App = () => {
  return (
    <AppContainer>
      <TodoList />
    </AppContainer>
  );
};

export default App;
