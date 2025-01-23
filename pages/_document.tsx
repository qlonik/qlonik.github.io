import type { DocumentHeadTagsProps } from '@mui/material-nextjs/v15-pagesRouter'
import {
  documentGetInitialProps,
  DocumentHeadTags,
} from '@mui/material-nextjs/v15-pagesRouter'
import NextDocument, { Head, Html, Main, NextScript } from 'next/document'
import * as React from 'react'

import { Theme } from '../src/theme'

export default class Document extends NextDocument<DocumentHeadTagsProps> {
  render(): React.ReactElement {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content={Theme.palette.primary.main} />
          <DocumentHeadTags {...this.props} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

Document.getInitialProps = async (ctx) => {
  return await documentGetInitialProps(ctx)
}
