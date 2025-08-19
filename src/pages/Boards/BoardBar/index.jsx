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
    color: 'white',
    bgcolor: 'transparent',
    border: 'none',
    px: '5px',
    borderRadius: '4px',
    '.MuiSvgIcon-root': {
      color: 'white'
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
      borderBottom: '1px solid #fff',
      px: 2,
      bgcolor: 'customBg.main'
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
        <Button
          variant="outlined"
          startIcon={<PersonAddIcon />}
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover': { borderColor: 'white' }
          }}
        >
          Invite
        </Button>
        <AvatarGroup
          max={4}
          sx={{
            gap: '10px',
            '& .MuiAvatar-root': {
              width: '34px',
              height: '34px',
              fontSize: '16px',
              border: 'none'
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

