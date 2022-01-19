import { OutlinedTextFieldProps } from '@mui/material'

interface TextFeels {
    variant: OutlinedTextFieldProps
    color: string
    margin: string
    required: boolean
    fullWidth: boolean
    id: string
    label: string
    name: string
    autoFocus: boolean
}
export const TextFieldProps: (fieldName: string) => {
} = (fieldName: string) => {
    return {
        variant: 'outlined',
        color: 'secondary',
        margin: 'normal',
        required: true,
        fullWidth: true,
        id: fieldName,
        label: fieldName,
        name: fieldName,
        autoFocus: true,
    }
}
export const TEDTR = ''
