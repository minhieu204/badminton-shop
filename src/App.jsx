import { FormControl, InputLabel, MenuItem, Select, Typography, useColorScheme } from '@mui/material'
import Button from '@mui/material/Button'
import Icon from '@mui/material/Icon'
import { green } from '@mui/material/colors'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import Box from '@mui/material/Box'

function ToggleModeButton() {
  const { mode, setMode } = useColorScheme()

  if (!mode) return null

  return (
    <Button
      variant="contained"
      onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
    >
      {mode === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
    </Button>
  )
}

function SelectSmall() {
  const { mode, setMode } = useColorScheme()

  if (!mode) return null

  const handleChange = (event) => {
    setMode(event.target.value)
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="label-select-mode">Mode</InputLabel>
      <Select
        labelId="label-select-mode"
        id="select-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value="light">
          <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
            <LightModeIcon fontSize="small"/> Light
          </div>
        </MenuItem>
        <MenuItem value="system">
          <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
            <SettingsBrightnessIcon fontSize="small"/> System
          </Box>
        </MenuItem>
        <MenuItem value="dark">
          <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
            <DarkModeIcon fontSize="small"/> Dark
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}

function App() {

  return (
    <>
      <SelectSmall />
      <div>Nguyen Minh Hieu</div>
      <Typography variant='body2' color='text.secondary'>Lorem, ipsum dolor.</Typography>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Icon>add_circle</Icon>
      <Icon color="primary">add_circle</Icon>
      <Icon sx={{ color: green[500] }}>add_circle</Icon>
      <Icon fontSize="small">add_circle</Icon>
      <Icon sx={{ fontSize: 30 }}>add_circle</Icon>
      <br />
      <ToggleModeButton />
    </>
  )
}

export default App
