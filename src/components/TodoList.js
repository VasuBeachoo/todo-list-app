import styled from "styled-components";

export const HintText = styled.p``;

export const FooterBox = styled.div``;

export const ListItems = styled.div``;

export const ThemeIcon = styled.img``;

export const Title = styled.h1``;

export const HeaderBox = styled.div``;

export const ListBox = styled.div``;

const TodoList = ({ className }) => {
  return (
    <ListBox className={className}>
      <HeaderBox>
        <Title>TODO</Title>
        <ThemeIcon />
      </HeaderBox>
      <ListItems></ListItems>
      <FooterBox></FooterBox>
      <HintText>Drag and drop to reorder list</HintText>
    </ListBox>
  );
};

export default TodoList;
