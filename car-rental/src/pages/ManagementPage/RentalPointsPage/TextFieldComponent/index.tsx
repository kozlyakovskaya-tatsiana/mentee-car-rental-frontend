import React, { Props, ReactNode } from 'react'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import { Autocomplete } from '@mui/material'

import { City, Country } from 'shared/types/Locations'

import { useStyles } from './styles'

interface fieldProps {
    ocChangeFunction: (a: string) => void
    // TODO Need to explicitly define the type of the array
    chooseOptionsArray: Array<any>
    fieldLabel: String
}

export const TextFieldComponent: React.FC<fieldProps> = ({
    ocChangeFunction,
    fieldLabel,
    chooseOptionsArray,
}) => {
    const styles = useStyles()

    return (
        <Box>
            <Autocomplete
                classes={{
                    inputRoot: styles.autoComplete,
                    paper: styles.paper,
                }}
                id={`${fieldLabel}-select`}
                options={chooseOptionsArray.map(
                    (option: Country) => option.name
                )}
                forcePopupIcon={false}
                onChange={(event, value) => {
                    if (value) {
                        ocChangeFunction(value)
                    }
                }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        className={styles.field}
                        label={fieldLabel}
                        margin="normal"
                        variant="outlined"
                        InputProps={{
                            ...params.InputProps,
                            // readOnly: true,
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
                )}
            />
        </Box>
    )
}

export default TextFieldComponent
