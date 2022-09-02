import styled from "styled-components";
import ListFilters from "./ListFilters";
import { useSelector, useDispatch } from "react-redux";
import { clearCompleted } from "../todoSlice";

export const ClearBtn = styled.p`
  user-select: none;
  color: var(--Dark-Grayish-Blue);
  font-weight: 400;

  &:hover {
    cursor: pointer;
  }
`;

export const ItemsLeft = styled.p`
  color: var(--Dark-Grayish-Blue);
  font-weight: 400;
`;

export const FooterBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  border-radius: 0.3rem;
  padding: 1rem;
`;

const ListFooter = ({ className }) => {
  const dispatch = useDispatch();

  const listItems = useSelector((state) => state.todo.listItems);

  const countActive = (listItems) => {
    let count = 0;
    listItems.forEach((item) => {
      if (!item.checked) {
        count++;
      }
    });
    return count;
  };

  return (
    <FooterBox className={className}>
      <ItemsLeft>{countActive(listItems)} items left</ItemsLeft>
      <ListFilters />
      <ClearBtn onClick={() => dispatch(clearCompleted())}>
        Clear Completed
      </ClearBtn>
    </FooterBox>
  );
};

export default ListFooter;
