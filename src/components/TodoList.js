import { useSelector } from "react-redux";
import styled from "styled-components";
import ListInput from "./ListInput";
import ListItem from "./ListItem";
import ListFooter from "./ListFooter";

export const HintText = styled.p`
  color: var(--Dark-Grayish-Blue);
  font-weight: 400;
`;

export const ListItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

export const ListBox = styled.div`
  background-color: var(--Very-Light-Gray);
  border-radius: 0.3rem;
`;

export const ThemeIcon = styled.img``;

export const Title = styled.h1`
  color: var(--Very-Light-Gray);
  font-weight: 700;
`;

export const HeaderBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const TodoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;

const TodoList = ({ className }) => {
  const listItems = useSelector((state) => state.todo.listItems);

  let itemId = 1000;

  return (
    <TodoBox className={className}>
      <HeaderBox>
        <Title>TODO</Title>
        <ThemeIcon />
      </HeaderBox>
      <ListInput />
      <ListBox>
        <ListItems>
          {listItems.map((item, index) => (
            <ListItem
              key={itemId++}
              id={index}
              itemText={item.text}
              checked={item.checked}
            />
          ))}
        </ListItems>
        <ListFooter />
      </ListBox>
      <HintText>Drag and drop to reorder list</HintText>
    </TodoBox>
  );
};

export default TodoList;
