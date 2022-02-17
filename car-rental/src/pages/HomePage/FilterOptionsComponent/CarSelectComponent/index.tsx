import * as React from 'react'

import { FormControl, InputLabel, NativeSelect, useTheme } from '@mui/material'

interface SelectProps {
    label: string
    enumerate: any
    onSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void
    value: string
}

const CarSelectComponent = (props: SelectProps) => {
    const theme = useTheme()
    const { label, enumerate, onSelect, value } = props

    const array = Object.keys(enumerate).filter(
        (key) => !Number.isNaN(Number(enumerate[key]))
    )

    return (
        <div>
            <FormControl fullWidth>
                <InputLabel variant="standard">{label}</InputLabel>
                <NativeSelect onChange={onSelect} value={value}>
                    <option
                        value="None"
                        key="None"
                        style={{
                            backgroundColor: theme.palette.primary.main,
                        }}
                    >
                        None
                    </option>
                    {array.map((element, index) => (
                        <option
                            value={index}
                            key={element}
                            style={{
                                backgroundColor: theme.palette.primary.main,
                            }}
                        >
                            {element}
                        </option>
                    ))}
                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default CarSelectComponent
