import { useSelector, useDispatch } from "react-redux";
import { switchFilter } from "../todoSlice";
import styled from "styled-components";

export const FilterOption = styled.p`
  user-select: none;
  color: ${(props) =>
    props.active ? "var(--Bright-Blue)" : "var(--Dark-Grayish-Blue)"};
  font-weight: 700;

  &:hover {
    cursor: pointer;
  }
`;

export const FiltersBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ListFilters = ({ className }) => {
  const filterOptions = ["All", "Active", "Completed"];

  const dispatch = useDispatch();
  const selected = useSelector((state) => state.todo.listFilter);

  return (
    <FiltersBox className={className}>
      {filterOptions.map((option) => (
        <FilterOption
          active={selected === option}
          onClick={() => dispatch(switchFilter(option))}
        >
          {option}
        </FilterOption>
      ))}
    </FiltersBox>
  );
};

export default ListFilters;
