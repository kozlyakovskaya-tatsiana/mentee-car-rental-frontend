import React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

import { useStyles } from './styles'

interface FieldProps {
    value: string
    readonly?: boolean
    fieldLabel: String
    onChange: any
}

export const TextFieldComponent: React.FC<FieldProps> = ({
    value,
    readonly,
    fieldLabel,
    onChange,
}) => {
    const styles = useStyles()

    return (
        <Box>
            <TextField
                className={styles.field}
                label={fieldLabel}
                margin="normal"
                variant="outlined"
                InputProps={{
                    readOnly: readonly,
                    classes: {
                        root: styles.input,
                    },
                }}
                InputLabelProps={{
                    shrink: true,
                    focused: true,
                    classes: {
                        root: styles.label,
                    },
                }}
                value={value}
                onChange={onChange}
            />
        </Box>
    )
}

TextFieldComponent.defaultProps = {
    readonly: false,
}

export default TextFieldComponent
