import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled, { ThemeProvider } from "styled-components";
import ListInput from "./ListInput";
import ListItem from "./ListItem";
import ListFooter from "./ListFooter";
import ListFilters, { FiltersBox, FilterOption } from "./ListFilters";
import { replaceList, switchTheme } from "../todoSlice";
import iconMoon from "../assets/icon-moon.svg";
import iconSun from "../assets/icon-sun.svg";

export const HintText = styled.p`
  color: ${(props) => props.theme.lightTextClr};
  font-size: 1.025rem;
  font-weight: 400;
`;

export const MobileFiltersBox = styled.div`
  display: none;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${(props) => props.theme.itemBg};
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
  background-color: ${(props) => props.theme.itemBg};
  border-radius: 0.3rem;
  width: 100%;
`;

export const ThemeIcon = styled.img`
  width: 2rem;
  user-select: none;

  &:hover {
    cursor: pointer;
  }
`;

export const Title = styled.h1`
  color: var(--Very-Light-Gray);
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: 0.55ch;
  margin-bottom: 1rem;
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
  gap: 1.5rem;
  width: clamp(10rem, 80vw, 40rem);
`;

const TodoList = ({ className }) => {
  const dispatch = useDispatch();

  const theme = useSelector((state) => state.todo.theme);
  const listItems = useSelector((state) => state.todo.listItems);
  const listFilter = useSelector((state) => state.todo.listFilter);

  let itemId = 1000;

  const themes = {
    light: {
      itemBg: "var(--Very-Light-Gray)",
      lightTextClr: "var(--Dark-Grayish-Blue)",
      heavyTextClr: "var(--Very-Dark-Grayish-Blue-1)",
      checkCircleClr: "var(--Light-Grayish-Blue)",
      checkCircleHoverClr: "var(--Dark-Grayish-Blue)",
    },
    dark: {
      itemBg: "var(--Very-Dark-Desaturated-Blue)",
      lightTextClr: "var(--Dark-Grayish-Blue-Dark)",
      heavyTextClr: "var(--Light-Grayish-Blue-Dark)",
      checkCircleClr: "var(--Very-Dark-Grayish-Blue-2)",
      checkCircleHoverClr: "var(--Dark-Grayish-Blue-Dark)",
    },
  };

  const dragItem = useRef();
  const dragOverItem = useRef();

  const dragStart = (e, position) => {
    dragItem.current = position;
  };

  const dragEnter = (e, position) => {
    dragOverItem.current = position;
  };

  const drop = (e) => {
    const copyListItems = [...listItems];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    dispatch(replaceList(copyListItems));
  };

  return (
    <ThemeProvider theme={theme === "light" ? themes.light : themes.dark}>
      <TodoBox className={className}>
        <HeaderBox>
          <Title>TODO</Title>
          <ThemeIcon
            src={theme === "light" ? iconMoon : iconSun}
            alt={theme === "light" ? "moon-icon" : "sun-icon"}
            onClick={() => dispatch(switchTheme())}
          />
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
                    onDragStart={(e) => dragStart(e, index)}
                    onDragEnter={(e) => dragEnter(e, index)}
                    onDragEnd={drop}
                  />
                );
              else return <></>;
            })}
          </ListItems>
          <ListFooter />
        </ListBox>
        <MobileFiltersBox>
          <ListFilters />
        </MobileFiltersBox>
        <HintText>Drag and drop to reorder list</HintText>
      </TodoBox>
    </ThemeProvider>
  );
};

export default TodoList;
