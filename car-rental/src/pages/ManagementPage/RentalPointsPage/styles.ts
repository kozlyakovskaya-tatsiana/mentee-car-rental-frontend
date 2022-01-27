import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
    text: {
        color: 'white',
        textDecoration: 'none',
    },
    field: {
        width: '100%',
        color: 'white',
        borderColor: 'white',
        '& .MuiOutlinedInput-notchedOutline': {
            color: 'white',
            borderColor: 'white',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#ff2172',
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#ff2172',
        },
    },
    input: {
        color: 'white',
    },
    label: {
        color: 'white',
        '&.Mui-focused': {
            color: '#ff2172',
        },
    },
})

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
} as const

export const fieldsHandler = {
    padding: '10px',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
} as const
