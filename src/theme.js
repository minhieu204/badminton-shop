import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'
import { BorderColor, Height } from '@mui/icons-material'

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
          main: '#1976d2',
        },
        secondary: {
          main: '#9c27b0',
        },
        background: {
          default: '#f9f9fb',
          paper: '#ffffff',
        },
        text: {
          primary: '#1e1e2f',
          secondary: '#5f6368'
        },
        error: {
          main: red.A400,
        },
      },
    },
    dark: {
      palette: {
        mode: 'dark',
        primary: {
          main: '#90caf9',
        },
        secondary: {
          main: '#ce93d8',
        },
        background: {
          default: '#121212',
          paper: '#1e1e1e',
        },
        text: {
          primary: '#e0e0e0',
          secondary: '#b0b0b0'
        },
        error: {
          main: red.A400,
        },
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
            backgroundColor: '#bdc3c7',
            borderRadius: '8px'
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#1976d2',
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
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          fontSize: '0.875rem'
        })
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        // Name of the slot
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          fontSize: '0.875rem',
          '.MuiOutlinedInput-notchedOutline': {
            BorderColor: theme.palette.primary.light
          },
          '&:hover': {
            '.MuiOutlinedInput-notchedOutline': {
              BorderColor: theme.palette.primary.main
            },
          },
          '& fieldest': {
            borderWidth: '1px !important'
          }
        })
      }
    }
  }
})

export default theme
