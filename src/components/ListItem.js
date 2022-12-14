import { useDispatch } from "react-redux";
import styled, { css } from "styled-components";
import CheckCircle from "./CheckCircle";
import { checkItem, deleteItem } from "../todoSlice";
import iconCross from "../assets/icon-cross.svg";
import { mixinListItem, mixinItemText } from "../GlobalStyle";

export const CloseIcon = styled.img.attrs({
  src: iconCross,
  alt: "icon-cross",
})`
  display: none;
  user-select: none;
  filter: brightness(1.5);
  margin-left: auto;

  &:hover {
    cursor: pointer;
  }
`;

export const ItemText = styled.p`
  ${mixinItemText}
  hyphens: auto;
  ${(props) =>
    props.checked &&
    css`
      opacity: 0.2;
      text-decoration: line-through;
    `}
`;

export const ItemBox = styled.div`
  ${mixinListItem}
  border-bottom: 0.05rem solid var(--Dark-Grayish-Blue);

  &:hover {
    cursor: grab;

    ${CloseIcon} {
      display: block;
    }
  }

  &:active {
    cursor: grabbing;
  }
`;

const ListItem = ({
  className,
  id,
  itemText,
  checked,
  onDragStart,
  onDragEnter,
  onDragEnd,
}) => {
  const dispatch = useDispatch();

  return (
    <ItemBox
      className={className}
      onDragStart={onDragStart}
      onDragEnter={onDragEnter}
      onDragEnd={onDragEnd}
      draggable
    >
      <CheckCircle checked={checked} onClick={() => dispatch(checkItem(id))} />
      <ItemText checked={checked}>{itemText}</ItemText>
      <CloseIcon onClick={() => dispatch(deleteItem(id))} />
    </ItemBox>
  );
};

export default ListItem;
