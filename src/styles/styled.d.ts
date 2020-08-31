import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      PRIMARY: string;
      SECONDARY: string;
      POINT: string;
      BLACK: string;
      WHITE: string;
    };
  }
}
