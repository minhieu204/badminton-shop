import { createTheme } from '@mui/material/styles'

const APP_BAR_HEIGHT = '58px'
const BOARD_BAR_HEIGHT = '60px'
const BOARD_CONTENT_HEIGHT = `calc(100vh - ${APP_BAR_HEIGHT} - ${BOARD_BAR_HEIGHT})`
// Create a theme instance.
const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-mui-color-scheme'
  },
  trello: {
    appBarHeight: APP_BAR_HEIGHT,
    boardBarHeight: BOARD_BAR_HEIGHT,
    boardContentHeight: BOARD_CONTENT_HEIGHT
  },
  colorSchemes: {
    light: {
      palette: {
        mode: 'light',
        primary: {
          main: '#1976d2',
        },
        background: {
          default: '#1565c0',
          paper: '#1565c0',
        },
        customBg: {
          main: '#1976d2',
          column: '#ebecf0',
          card: 'white'
        },
      },
    },
    dark: {
      palette: {
        mode: 'dark',
        primary: {
          main: '#1976d2',
        },
        secondary: {
          main: '#ce93d8',
        },
        background: {
          default: '#2c3e50',
          paper: '#2c3e50',
        },
        customBg: {
          main: '#34495e',
          column: '#333643',
          card: 'black'
        }
      },
    },
  },
  components: {
    // Name of the component
    MuiCssBaseline: {
      styleOverrides: {
        // Name of the slot
        body: {
          '*::-webkit-scrollbar': {
            width: '8px',
            height: '8px'
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#dcdde1',
            borderRadius: '8px'
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: 'white',
            borderRadius: '8px'
          }
        }
      },
    },
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          textTransform: 'none'
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        // Name of the slot
        root: {
          fontSize: '0.875rem'
        }
      },
    },
    MuiTypography: {
      styleOverrides: {
        // Name of the slot
        root: {
          '&.MuiTypography-body1': { fontSize: '0.875rem' }
        }
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        // Name of the slot
        root: {
          fontSize: '0.875rem',
          '& fieldset': {
            borderWidth: '1px !important'
          },
          '&:hover fieldset': {
            borderWidth: '2px !important'
          },
          '&.Mui-focused fieldset': {
            borderWidth: '2px !important'
          }
        }
      }
    }
  }
})

export default theme
