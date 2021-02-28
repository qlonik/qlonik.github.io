import Head from 'next/head'
import * as React from 'react'

const styles: { [k: string]: React.CSSProperties } = {
  error: {
    color: '#000',
    background: '#fff',
    fontFamily:
      '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
    height: '100vh',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  desc: {
    display: 'inline-block',
    textAlign: 'left',
    lineHeight: '49px',
    height: '49px',
    verticalAlign: 'middle',
  },

  h1: {
    display: 'inline-block',
    borderRight: '1px solid rgba(0, 0, 0,.3)',
    margin: 0,
    marginRight: '20px',
    padding: '10px 23px 10px 0',
    fontSize: '24px',
    fontWeight: 500,
    verticalAlign: 'top',
  },

  h2: {
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: 'inherit',
    margin: 0,
    padding: 0,
  },
}

export default function Custom404(): JSX.Element {
  const status = 404
  const msg = 'This page could not be found'
  return (
    <>
      <Head>
        <title>
          {status}: {msg}
        </title>
      </Head>
      <style dangerouslySetInnerHTML={{ __html: 'body { margin: 0 }' }} />
      <div style={styles.error}>
        <h1 style={styles.h1}>{status}</h1>
        <div style={styles.desc}>
          <h2 style={styles.h2}>{msg}.</h2>
        </div>
      </div>
    </>
  )
}
