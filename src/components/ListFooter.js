import styled from "styled-components";
import ListFilters from "./ListFilters";

export const ClearBtn = styled.p``;

export const ItemsLeft = styled.p``;

export const FooterBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
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
