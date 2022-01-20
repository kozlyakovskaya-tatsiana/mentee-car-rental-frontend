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
    checkbox: {
        color: 'white',
        '&$checked': {
            color: '#ff2172',
        },
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
})

export const boxStyle = {
    backgroundColor: 'primary.main',
    marginTop: 8,
    marginBottom: 1,
    padding: 6,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
} as const

export const errorStyle = {
    fontSize: 10,
    color: '#ff2142',
    textAlign: 'left',
    margin: 0,
    padding: 0,
    textDecoration: 'none',
    marginRight: 'auto',
} as const

export default useStyles
