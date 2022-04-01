import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    containerSize: {
      [key: string]: string;
    };
    deviceType: {
      desktop: string;
      tablet: string;
      phone: string;
    };
  }
}
