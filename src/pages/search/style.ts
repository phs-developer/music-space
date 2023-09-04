import styled from "styled-components";

const Section = styled.section`
  width: 85vw;
  padding: 50px 20px 0px 20px;
`;

const Input = styled.input`
  padding: 0.8rem 1.5rem;
  width: 500px;
  border: none;
  border-radius: 50px;
  font-family: "Noto Sans KR";
  font-size: 1rem;
`;

const SearchList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 30px;
  padding: 50px 0px;
`;

export { Section, Input, SearchList };
