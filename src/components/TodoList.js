import styled from "styled-components";
import ListInput from "./ListInput";
import ListFooter from "./ListFooter";

export const HintText = styled.p``;

export const ListItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

export const ThemeIcon = styled.img``;

export const Title = styled.h1``;

export const HeaderBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const TodoList = ({ className }) => {
  return (
    <ListBox className={className}>
      <HeaderBox>
        <Title>TODO</Title>
        <ThemeIcon />
      </HeaderBox>
      <ListInput />
      <ListItems></ListItems>
      <ListFooter />
      <HintText>Drag and drop to reorder list</HintText>
    </ListBox>
  );
};

export default TodoList;
