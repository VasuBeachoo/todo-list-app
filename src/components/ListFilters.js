import styled from "styled-components";

export const FilterOption = styled.p``;

export const FiltersBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ListFilters = ({ className }) => {
  return (
    <FiltersBox className={className}>
      <FilterOption>All</FilterOption>
      <FilterOption>Active</FilterOption>
      <FilterOption>Completed</FilterOption>
    </FiltersBox>
  );
};

export default ListFilters;
