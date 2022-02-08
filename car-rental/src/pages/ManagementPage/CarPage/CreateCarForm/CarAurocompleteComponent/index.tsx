import * as React from 'react'

import { Autocomplete, TextField } from '@mui/material'

interface AutocompleteProps {
    value: any
    onChange: (event: any, newValue: any) => void
    filterOptions: (options: any, params: any) => any[]
    optionLabel: (options: any) => any
    renderOptions: (props: any, option: any) => any
    infoArray: any[]
    label: string
}

const CarAutocompleteComponent = (props: AutocompleteProps) => {
    const {
        value,
        onChange,
        filterOptions,
        optionLabel,
        renderOptions,
        infoArray,
        label,
    } = props
    return (
        <Autocomplete
            value={value}
            onChange={onChange}
            filterOptions={filterOptions}
            selectOnFocus
            clearOnBlur
            handleHomeEndKeys
            id={label}
            options={infoArray}
            getOptionLabel={optionLabel}
            renderOption={renderOptions}
            freeSolo
            renderInput={(params: any) => (
                <TextField {...params} label={label} color="secondary" />
            )}
        />
    )
}

export default CarAutocompleteComponent
