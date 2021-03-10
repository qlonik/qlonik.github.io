import { flow, identity } from '@effect-ts/core/Function'
import createEmotionServer from '@emotion/server/create-instance'
import { ServerStyleSheets } from '@material-ui/core/styles'
import NextDocument, { Head, Html, Main, NextScript } from 'next/document'
import * as React from 'react'

import { Theme } from '../src/theme'
import { cache } from './_app'

const server = createEmotionServer(cache)

export default class Document extends NextDocument {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content={Theme.palette.primary.main} />
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
  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets()
  const initialProps = await NextDocument.getInitialProps({
    ...ctx,
    renderPage: (opts = {}) =>
      ctx.renderPage({
        enhanceComponent:
          typeof opts === 'function' ? opts : opts.enhanceComponent,
        enhanceApp: flow(
          (typeof opts === 'object' && opts.enhanceApp) || identity,
          (App) => (props) => sheets.collect(<App {...props} />),
        ),
      }),
  })

  const styles = server.extractCritical(initialProps.html)

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
      <style
        key="emotion-style-tag"
        data-emotion={`css ${styles.ids.join(' ')}`}
        dangerouslySetInnerHTML={{ __html: styles.css }}
      />,
    ],
  }
}
