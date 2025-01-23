import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { AppCacheProvider } from '@mui/material-nextjs/v15-pagesRouter'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import * as React from 'react'

import { Theme } from '../src/theme'

export default function App(props: AppProps): React.ReactElement {
  return (
    <AppCacheProvider {...props}>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <props.Component {...props.pageProps} />
      </ThemeProvider>
    </AppCacheProvider>
  )
}
