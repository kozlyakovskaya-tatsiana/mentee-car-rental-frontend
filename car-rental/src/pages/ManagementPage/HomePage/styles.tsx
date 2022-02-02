import { makeStyles } from '@material-ui/core/styles'

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

export const paperStyles = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#1a1a1a',
} as const

export const mainBoxStyles = {
    flexGrow: 1,
    height: '100%',
    overflow: 'auto',
} as const

export const linkStyle = {
    textDecoration: 'none',
} as const

export default useStyles
