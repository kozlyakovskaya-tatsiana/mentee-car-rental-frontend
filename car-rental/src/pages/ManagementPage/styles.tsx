import { makeStyles } from '@material-ui/core/styles'
import { styled } from '@mui/material/styles'
import MuiDrawer from '@mui/material/Drawer'

export const useStyles = makeStyles({
    text: {
        color: 'white',
        textDecoration: 'none',
    },
    controlLabel: {
        color: 'white',
        fontSize: 12,
    },
    field: {
        color: 'white',
    },
    input: {
        color: 'white',
    },
    label: {
        color: 'white',
    },
    paper: {
        backgroundColor: '#1a1a1a',
    },
    icon: {
        color: 'white',
    },
})

export const toolBarStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#1a1a1a',
} as const

export const mainBoxStyles = {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
} as const

export const linkStyle = {
    textDecoration: 'none',
} as const

const drawerWidth: number = 300

export const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    '& .MuiDrawer-paper': {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: 'border-box',
        ...(!open && {
            overflowX: 'hidden',
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            width: theme.spacing(7),
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(7),
            },
        }),
    },
}))

export default useStyles
