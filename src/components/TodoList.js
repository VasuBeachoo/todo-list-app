import { useSelector } from "react-redux";
import styled from "styled-components";
import ListInput from "./ListInput";
import ListItem from "./ListItem";
import ListFooter from "./ListFooter";
import ListFilters, { FiltersBox, FilterOption } from "./ListFilters";

export const HintText = styled.p`
  color: var(--Dark-Grayish-Blue);
  font-size: 1.025rem;
  font-weight: 400;
`;

export const MobileFiltersBox = styled.div`
  display: none;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: var(--Very-Light-Gray);
  border-radius: 0.3rem;
  padding: 0.3rem;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;

  ${FilterOption} {
    font-size: clamp(1.05rem, 3vw, 1.125rem);
  }

  ${FiltersBox} {
    gap: clamp(1rem, 5.5vw, 2.5rem);
  }

  @media (max-width: 700px) {
    display: flex;
  }
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
  width: 100%;
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
  width: clamp(10rem, 80vw, 40rem);
`;

const TodoList = ({ className }) => {
  const listItems = useSelector((state) => state.todo.listItems);
  const listFilter = useSelector((state) => state.todo.listFilter);

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
          {listItems.map((item, index) => {
            if (
              listFilter === "All" ||
              (listFilter === "Active" && !item.checked) ||
              (listFilter === "Completed" && item.checked)
            )
              return (
                <ListItem
                  key={itemId++}
                  id={index}
                  itemText={item.text}
                  checked={item.checked}
                  filter={listFilter}
                />
              );
          })}
        </ListItems>
        <ListFooter />
      </ListBox>
      <MobileFiltersBox>
        <ListFilters />
      </MobileFiltersBox>
      <HintText>Drag and drop to reorder list</HintText>
    </TodoBox>
  );
};

export default TodoList;
