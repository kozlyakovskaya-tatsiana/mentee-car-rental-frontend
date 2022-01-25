import { makeStyles } from '@material-ui/core/styles'

export const papersHandlerStyle = {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '15px',
    width: '100%',
} as const

export const lotPaperStyle = {
    p: 2,
    margin: 'auto',
    marginTop: '10px',
    backgroundColor: '#1a1a1a',
    width: '60%',
    height: '400px',
}

export const useStyles = makeStyles({
    text: {
        color: 'white',
        textDecoration: 'none',
    },
    field: {
        color: 'white',
    },
    input: {
        color: 'white',
    },
    label: {
        color: '#ff2172',
        '&.Mui-focused': {
            color: 'white',
        },
    },
    labelFocused: {
        color: '#ff2172',
    },
    autoComplete: {
        '& .MuiInputLabel-outlined:not(.MuiInputLabel-shrink)': {
            transform: 'translate(34px, 20px) scale(1);',
        },
        color: '#ff2172',
        '& .MuiOutlinedInput-notchedOutline': {
            color: 'white',
            borderColor: 'white',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white',
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#ff2172',
        },
    },
})