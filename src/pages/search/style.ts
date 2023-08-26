import styled from "styled-components";

const Section = styled.section`
  width: 85vw;
  padding: 50px 20px 0px 20px;
`;

const Input = styled.input`
  padding: 8px;
  padding-left: 15px;
  width: 500px;
  border: 1px solid #86e57f;
  border-radius: 50px;
`;

const SearchList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 30px;
  padding: 50px 0px;
`;

export { Section, Input, SearchList };
