import styled, { css } from "styled-components";
import iconCheck from "../assets/icon-check.svg";

export const CheckIcon = styled.img.attrs({
  src: iconCheck,
  alt: "icon-check",
})``;

export const CircleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 1.85rem;
  height: 1.85rem;
  user-select: none;
  border: 0.1rem solid var(--Very-Light-Grayish-Blue);
  border-radius: 100%;
  transition: 0.25s;
  ${(props) =>
    props.checked &&
    css`
      background: linear-gradient(
        135deg,
        var(--Check-Bg-Cyan),
        var(--Check-Bg-Violet)
      );
    `}

  &:hover {
    cursor: pointer;
    border-color: var(--Check-Bg-Violet);
  }
`;

const CheckCircle = ({ className, checked, onClick }) => {
  return (
    <CircleBox className={className} checked={checked} onClick={onClick}>
      {checked && <CheckIcon />}
    </CircleBox>
  );
};

export default CheckCircle;
