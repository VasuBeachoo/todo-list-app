import styled from "styled-components";
import CheckCircle from "./CheckCircle";

export const TodoInput = styled.input.attrs({ type: "text" })``;

export const InputBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

const ListInput = ({ className }) => {
  return (
    <InputBox className={className}>
      <CheckCircle />
      <TodoInput />
    </InputBox>
  );
};

export default ListInput;
