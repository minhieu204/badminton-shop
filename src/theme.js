import { createTheme } from '@mui/material/styles'

// Create a theme instance.
const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-mui-color-scheme'
  },
  trello: {
    appBarHeight : '58px',
    boardBarHeight : '60px'
  },
  colorSchemes: {
    light: {
      palette: {
        mode: 'light',
        primary: {
          main: '#1565c0',
        },
        background: {
          default: '#1565c0',
          paper: '#1565c0',
        },
        text: {
          primary: '#fff',
          secondary: '#fff'
        },
        customBg: { main: '#1976d2' }
      },
    },
    dark: {
      palette: {
        mode: 'dark',
        primary: {
          main: '#2c3e50',
        },
        secondary: {
          main: '#ce93d8',
        },
        background: {
          default: '#2c3e50',
          paper: '#2c3e50',
        },
        text: {
          primary: '#e0e0e0',
          secondary: '#b0b0b0'
        },
        customBg: { main: '#34495e' }
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
