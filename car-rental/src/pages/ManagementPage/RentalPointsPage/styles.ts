import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({})

export const mainBoxStyles = {
    margin: '0px 10px 0px 10px',
    paddingTop: '10px',
    flexGrow: 1,
    overflow: 'auto',
    width: '100%',
} as const

export const paperStyles = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#1a1a1a',
    width: '100%',
    height: '500px',
} as const
