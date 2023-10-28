// import './globals.css'
import { Inter } from 'next/font/google'

import { Container, CssBaseline } from '@mui/material'
import Theme from './utils/theme'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme>
          <CssBaseline />
          <Container maxWidth="md">
            {children}
          </Container>
        </Theme>
      </body>
    </html>
  )
}
