import { Link } from "react-router-dom";
import { styled } from "styled-components";

export default function SpotifyBtn({ uri }: { uri: string }) {
  return <Button to={uri}>SPOTIFY</Button>;
}
const Button = styled(Link)`
  padding: 0.5rem 1rem;
  background: #560957;
  border-radius: 100px;
  font-weight: bold;
  letter-spacing: 1px;
  color: white;
`;
