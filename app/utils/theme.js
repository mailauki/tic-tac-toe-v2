'use client'

import { grey } from '@mui/material/colors'
import { ThemeProvider, createTheme } from '@mui/material/styles'

export default function Theme({ children }) {
  const theme = createTheme({
    palette: {
      tile: {
        main: '#fff',
        dark: grey[200]
      },
      action: {
        disabledBackground: grey[100]
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  )
}