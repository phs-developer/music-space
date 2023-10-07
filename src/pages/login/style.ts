import styled from "styled-components";

const LoginForm = styled.div`
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  font-size: 1.3rem;
  font-weight: bold;
`;

const LoginButn = styled.button`
  width: fit-content;
  background: #298141;
  padding: 1rem 1.4rem;
  border-radius: 50px;
  color: white;
`;

export { LoginForm, LoginButn };
