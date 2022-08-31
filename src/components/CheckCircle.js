import styled from "styled-components";

export const CheckIcon = styled.img``;

export const CircleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CheckCircle = ({ className }) => {
  return (
    <CircleBox className={className}>
      <CheckIcon />
    </CircleBox>
  );
};

export default CheckCircle;
