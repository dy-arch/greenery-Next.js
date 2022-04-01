import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    containerSize: {
      [key: string]: string;
    };
    deviceType: {
      tablet: string;
      phone: string;
    };
  }
}
