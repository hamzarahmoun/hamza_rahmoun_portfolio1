import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Script id="theme-switche" strategy="beforeInteractive">
          {`
  if (localStorage.theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
 `}
        </Script>

        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
