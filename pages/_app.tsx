import '../styles/globals.css'

import type { AppProps } from 'next/app'
import * as React from 'react'

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />
}
