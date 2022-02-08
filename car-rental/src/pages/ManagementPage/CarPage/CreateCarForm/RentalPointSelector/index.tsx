import React, { SyntheticEvent } from 'react'

import { Autocomplete, Box, CircularProgress, TextField } from '@mui/material'

import { getRentalPoints } from 'services/rentalPoint.service'
import { RentalPointType } from 'shared/types/RentalPoint'

interface FieldProps {
    value: RentalPointType | null
    readonly?: boolean
    fieldLabel: string
    onChange: any
}

const topFilms: any[] = []
export const RentalPointSelector: React.FC<FieldProps> = ({
    value,
    readonly,
    fieldLabel,
    onChange,
}) => {
    const [open, setOpen] = React.useState(false)
    const [options, setOptions] = React.useState<RentalPointType[]>([])
    const loading = open && options.length === 0

    React.useEffect(() => {
        let active = true

        if (!loading) {
            return undefined
        }
        ;(async () => {
            if (active) {
                getRentalPoints().then((response) => {
                    setOptions([...response.data])
                })
            }
        })()

        return () => {
            active = false
        }
    }, [loading])

    React.useEffect(() => {
        if (!open) {
            setOptions([])
        }
    }, [open])

    return (
        <Autocomplete
            id="asynchronous-demo"
            open={open}
            onOpen={() => {
                setOpen(true)
            }}
            onClose={() => {
                setOpen(false)
            }}
            isOptionEqualToValue={(option, optValue) =>
                option.name === optValue.name
            }
            getOptionLabel={(option) => option.name}
            options={options}
            loading={loading}
            onChange={onChange}
            fullWidth
            /* eslint-disable react/jsx-fragments */
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={fieldLabel}
                    color="secondary"
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <React.Fragment>
                                {loading ? (
                                    <CircularProgress
                                        color="secondary"
                                        size={20}
                                    />
                                ) : null}
                                {params.InputProps.endAdornment}
                            </React.Fragment>
                        ),
                    }}
                />
            )}
        />
    )
}
RentalPointSelector.defaultProps = {
    readonly: false,
}

export default RentalPointSelector
