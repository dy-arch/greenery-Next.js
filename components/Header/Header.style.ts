import styled from "@emotion/styled";

export const GreeneryHeader = styled.header`
  width: ${(props) => props.theme.containerSize.large};
  height: 4.5rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 3.85rem;

  .mainLogo {
    width: 7.5rem;
  }
`;

export const PassLink = styled.a`
  display: block;
  line-height: 1.6rem;
  height: 1.6rem;
`;

export const HeaderNav = styled.nav`
  ul {
    display: flex;
    gap: 1.6rem;
    align-items: flex-end;
    height: 1.6rem;
  }

  a {
    font-size: 0.9rem;
    font-weight: bold;
    transition: color 0.3s;
  }
  a:hover {
    color: #45ba66;
  }
`;
