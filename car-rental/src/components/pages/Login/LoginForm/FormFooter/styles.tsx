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
})

export default useStyles
