import { makeStyles } from '@material-ui/core/styles'

export const PageHandlerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
} as const

export const papersHandlerStyle = {
    paddingTop: '15px',
    width: '800px',
} as const

export const lotPaperStyle = {
    p: 2,
    margin: 'auto',
    marginTop: '10px',
    backgroundColor: '#1a1a1a',
}

export const useStyles = makeStyles({
    text: {
        color: 'white',
        textDecoration: 'none',
    },
    paper: {
        backgroundColor: '#1a1a1a',
        border: 'solid 1px white',
    },
    field: {
        color: 'white',
        '& .MuiInput-underline:before': {
            borderBottomColor: 'white',
        },
        '&:hover .MuiInput-underline': {
            borderBottomColor: 'white',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#ff2172',
        },
    },
    input: {
        color: '#ffffff',
    },
    label: {
        color: 'white',
        '&.Mui-focused': {
            color: '#ff2172',
        },
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

    stack: {},
})
