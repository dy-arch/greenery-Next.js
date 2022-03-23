import styled from "@emotion/styled";

interface mainProps {
  size: string;
}

export const Main = styled.main<mainProps>`
  width: ${({ size }) => size};
  margin: 0 auto;
`;
