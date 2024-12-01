import 'styled-components';

import { getTheme } from '@theme';

declare module '*.scss';
declare module '*.sass';

declare module 'styled-components' {
  export interface DefaultTheme extends ReturnType<typeof getTheme> {}
}
