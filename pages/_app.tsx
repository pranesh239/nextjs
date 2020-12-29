/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { ThemeProvider } from 'theme-ui';
import theme from '../utils/themeColors';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <div sx={{ maxWidth: 'container', mx: 'auto', px: 3 }}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
