import React from "react";
import { Main } from "./MainContainer.style";
import { useTheme } from "@emotion/react";

interface mainProps {
  size: string;
  children: React.ReactNode;
}

export function MainContainer({ size, children }: mainProps) {
  const theme = useTheme();

  return <Main size={theme.containerSize[size]}>{children}</Main>;
}

MainContainer.defaultProps = {
  size: "large",
};
