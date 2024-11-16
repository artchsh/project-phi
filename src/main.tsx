// React
import React from 'react'
import ReactDOM from 'react-dom/client'

// Styles for the app
import './index.css'
import { ThemeProvider, createTheme, ThemeOptions } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

// Router configuration
import { BrowserRouter } from "react-router-dom"
import Routes from './routes'

// Font configuration
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

// MUI Theme configuration
const theme: ThemeOptions = createTheme({
  palette: {
    mode: 'dark',
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
