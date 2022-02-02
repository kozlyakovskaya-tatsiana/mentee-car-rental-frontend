import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
    text: {
        color: 'white',
        textDecoration: 'none',
    },
    paper: {
        backgroundColor: '#1a1a1a',
    },
})

export const mainBoxStyles = {
    margin: '0px 10px 0px 10px',
    paddingTop: '10px',
    flexGrow: 1,
    overflow: 'auto',
} as const

export const paperStyles = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#1a1a1a',
} as const
