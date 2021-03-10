import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import { createMuiTheme } from '@material-ui/core'

export type Theme = typeof Theme
export const Theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0070f3',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
      'sans-serif',
    ].join(', '),
    code: {
      fontFamily: [
        'Menlo',
        'Monaco',
        'Lucida Console',
        'Liberation Mono',
        'DejaVu Sans Mono',
        'Bitstream Vera Sans Mono',
        'Courier New',
        'monospace',
      ].join(', '),
      fontSize: '1.1rem',
      borderRadius: '5px',
      padding: '0.75rem',
    },
  },
})

declare module '@material-ui/core/styles' {
  interface TypographyVariants {
    code: React.CSSProperties
  }

  interface TypographyVariantsOptions {
    code?: React.CSSProperties
  }
}

declare module '@material-ui/core/Typography' {
  interface TypographyPropsVariantOverrides {
    code: true
  }
}
