import { Box, Button, Tooltip } from '@mui/material'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

function BoardBar() {

  const MENU_STYLES = {
    color: 'primary.main',
    bgcolor: 'white',
    border: 'none',
    px: '5px',
    borderRadius: '4px',
    '& .MuiSvgIcon-root': {
      color: 'primary.main'
    },
    '&:hover': {
      bgcolor: 'primary.50'
    }
  }

  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      overflowX: 'auto',
      borderTop: '1px solid #1976d2',
      px: 2,
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx={ MENU_STYLES }
          icon={<DashboardIcon />}
          label="Trello web"
          clickable
        />
        <Chip
          sx={ MENU_STYLES }
          icon={<VpnLockIcon />}
          label="Public/Private workspace"
          clickable
        />
        <Chip
          sx={ MENU_STYLES }
          icon={<AddToDriveIcon />}
          label="Add To Google Drive"
          clickable
        />
        <Chip
          sx={ MENU_STYLES }
          icon={<BoltIcon />}
          label="Automation"
          clickable
        />
        <Chip
          sx={ MENU_STYLES }
          icon={<FilterListIcon />}
          label="Filters"
          clickable
        />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button variant="outlined" startIcon={<PersonAddIcon />}>Invite</Button>
        <AvatarGroup
          max={4}
          sx={{
            '& .MuiAvatar-root': {
              width: '34px',
              height: '34px',
              fontSize: '16px'
            }
          }}
        >
          <Tooltip title="minhhieu">
            <Avatar
              alt="minhhieu"
              src="https://minhieu204.github.io/my-portfolio/assets/me-CWFdOyeC.jpg"
            />
          </Tooltip>
          <Tooltip title="minhhieu">
            <Avatar
              alt="minhhieu"
              src="https://minhieu204.github.io/my-portfolio/assets/me-CWFdOyeC.jpg"
            />
          </Tooltip>
          <Tooltip title="minhhieu">
            <Avatar
              alt="minhhieu"
              src="https://minhieu204.github.io/my-portfolio/assets/me-CWFdOyeC.jpg"
            />
          </Tooltip>
          <Tooltip title="minhhieu">
            <Avatar
              alt="minhhieu"
              src="https://minhieu204.github.io/my-portfolio/assets/me-CWFdOyeC.jpg"
            />
          </Tooltip>
          <Tooltip title="minhhieu">
            <Avatar
              alt="minhhieu"
              src="https://minhieu204.github.io/my-portfolio/assets/me-CWFdOyeC.jpg"
            />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar

