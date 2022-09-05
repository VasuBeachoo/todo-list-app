import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { changeInput, addItem } from "../todoSlice";
import CheckCircle from "./CheckCircle";
import iconAdd from "../assets/icon-cross.svg";
import { mixinListItem, mixinItemText } from "../GlobalStyle";

export const AddIcon = styled.img.attrs({ src: iconAdd, alt: "add-icon" })`
  transform: rotate(45deg);
  filter: brightness(1.5);
  margin-left: auto;

  &:hover {
    cursor: pointer;
  }
`;

export const TodoInput = styled.input.attrs({
  type: "text",
  placeholder: "Create a new todo...",
})`
  ${mixinItemText}
  width: 80%;
  border: none;
  outline: none;
  background-color: ${(props) => props.theme.itemBg};

  &::placeholder {
    opacity: 0.6;
  }
`;

export const InputCircle = styled(CheckCircle)`
  &:hover {
    cursor: auto;
    border-color: ${(props) => props.theme.checkCircleClr};
  }
`;

export const InputBox = styled.div`
  ${mixinListItem}
  background-color: ${(props) => props.theme.itemBg};
  border-radius: 0.3rem;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
`;

const ListInput = ({ className }) => {
  const dispatch = useDispatch();

  const input = useSelector((state) => state.todo.listInput);

  return (
    <InputBox className={className}>
      <InputCircle />
      <TodoInput
        value={input}
        onChange={(e) => dispatch(changeInput(e.target.value))}
      />
      <AddIcon onClick={() => dispatch(addItem())} />
    </InputBox>
  );
};

export default ListInput;
