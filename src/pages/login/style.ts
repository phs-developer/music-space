import styled from "styled-components";

const LoginForm = styled.section`
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  font-size: 1.3rem;
  font-weight: bold;
  @media screen and (max-width: 768px) {
    padding: 0px 20px;
    line-height: 2rem;
    text-align: center;
    font-size: 1rem;
  }
`;

const LoginButn = styled.button`
  width: fit-content;
  background: #298141;
  padding: 1rem 1.4rem;
  border-radius: 50px;
  color: white;
`;

export { LoginForm, LoginButn };
