import styled from "styled-components";
import ListFilters, { FiltersBox } from "./ListFilters";
import { useSelector, useDispatch } from "react-redux";
import { clearCompleted } from "../todoSlice";

export const ClearBtn = styled.p`
  user-select: none;
  color: var(--Dark-Grayish-Blue);
  font-size: 1.05rem;
  font-weight: 400;
  transition: 0.25s;

  &:hover {
    cursor: pointer;
    color: var(--Very-Dark-Grayish-Blue);
  }
`;

export const ItemsLeft = styled.p`
  color: var(--Dark-Grayish-Blue);
  font-size: 1.05rem;
  font-weight: 400;
`;

export const FooterBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  text-align: center;
  width: 100%;
  border-radius: 0.3rem;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  padding: 0.5rem 1.5rem;

  @media (max-width: 700px) {
    ${FiltersBox} {
      display: none;
    }
  }
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
      <ItemsLeft>
        {countActive(listItems)}{" "}
        {countActive(listItems) === 1 ? "item" : "items"} left
      </ItemsLeft>
      <ListFilters />
      <ClearBtn onClick={() => dispatch(clearCompleted())}>
        Clear Completed
      </ClearBtn>
    </FooterBox>
  );
};

export default ListFooter;
