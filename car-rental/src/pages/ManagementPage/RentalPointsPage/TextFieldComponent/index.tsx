import React, { Props, ReactNode } from 'react'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import { Autocomplete } from '@mui/material'

import { City, Country } from 'shared/types/Locations'

import { useStyles } from './styles'

interface fieldProps {
    readonly: boolean
    fieldLabel: String
}

export const TextFieldComponent: React.FC<fieldProps> = ({
    readonly,
    fieldLabel,
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
                    classes: {
                        root: styles.label,
                    },
                }}
            />
        </Box>
    )
}

export default TextFieldComponent
