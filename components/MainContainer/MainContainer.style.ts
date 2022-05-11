import styled from "@emotion/styled";

interface mainProps {
  size: string;
}

export const Main = styled.main<mainProps>`
  width: ${({ size }) => size};
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.deviceType.desktop}) {
    width: 100%;
  }
`;
