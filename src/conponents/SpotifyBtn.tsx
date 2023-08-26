import { Link } from "react-router-dom";
import { styled } from "styled-components";

export default function SpotifyBtn({ uri }: { uri: string }) {
  return <Button to={uri}>SPOTIFY</Button>;
}
const Button = styled(Link)`
  padding: 7px;
  background: #1ed760;
  border-radius: 100px;
  font-weight: bold;
  letter-spacing: 1px;
  color: white;
`;
