import styled from "styled-components";
import CheckCircle from "./CheckCircle";
import iconCross from "../assets/icon-cross.svg";

export const CloseIcon = styled.img.attrs({
  src: iconCross,
  alt: "icon-cross",
})``;

export const ItemText = styled.p``;

export const ItemBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

const ListItem = ({ className }) => {
  return (
    <ItemBox className={className}>
      <CheckCircle />
      <ItemText></ItemText>
      <CloseIcon />
    </ItemBox>
  );
};

export default ListItem;
