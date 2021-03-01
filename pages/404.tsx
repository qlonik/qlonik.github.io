import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Head from 'next/head'
import * as React from 'react'

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
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            borderRight: { xs: 0, sm: 1 },
            borderBottom: { xs: 1, sm: 0 },
            // todo: does not get applied when using border breakpoints.
            //  maybe it is a bug with mui?
            borderColor: (t) => t.palette.text.secondary,
            px: 1,
            py: 0.5,
            mr: { xs: 0, sm: 2 },
            mb: { xs: 2, sm: 0 },
          }}
        >
          {status}
        </Typography>
        <Box clone>
          <Typography variant="subtitle1">{msg}.</Typography>
        </Box>
      </Box>
    </>
  )
}
