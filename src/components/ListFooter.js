import styled from "styled-components";
import ListFilters from "./ListFilters";

export const ClearBtn = styled.p`
  color: var(--Dark-Grayish-Blue);
  font-weight: 400;
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
  return (
    <FooterBox className={className}>
      <ItemsLeft>5 items left</ItemsLeft>
      <ListFilters />
      <ClearBtn>Clear Completed</ClearBtn>
    </FooterBox>
  );
};

export default ListFooter;
