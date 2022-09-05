import { useSelector, useDispatch } from "react-redux";
import { switchFilter } from "../todoSlice";
import styled from "styled-components";

export const FilterOption = styled.p`
  user-select: none;
  color: ${(props) =>
    props.active ? "var(--Bright-Blue)" : props.theme.lightTextClr};
  font-size: 1.05rem;
  font-weight: 700;
  transition: 0.25s;

  &:hover {
    cursor: pointer;
    ${(props) => !props.active && `color: ${props.theme.heavyTextClr}`}
  }
`;

export const FiltersBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1.25rem;
`;

const ListFilters = ({ className }) => {
  const filterOptions = ["All", "Active", "Completed"];

  const dispatch = useDispatch();
  const selected = useSelector((state) => state.todo.listFilter);

  let key = 5000;

  return (
    <FiltersBox className={className}>
      {filterOptions.map((option) => (
        <FilterOption
          key={key++}
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
