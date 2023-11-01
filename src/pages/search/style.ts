import styled from "styled-components";

const Section = styled.section`
  width: 85vw;
  padding: 50px 20px 0px 20px;
  @media screen and (max-width: 1024px) {
    margin: 0px auto;
  }
`;

const Input = styled.input`
  padding: 0.8rem 1.5rem;
  width: 500px;
  border: none;
  border-radius: 50px;
  font-family: "Noto Sans KR";
  font-size: 1rem;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const SearchList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 3rem;
  padding: 50px 0px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media screen and (max-width: 768px) {
    gap: 2rem;
  }
`;

export { Section, Input, SearchList };
