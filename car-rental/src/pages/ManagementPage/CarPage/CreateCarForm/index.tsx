import * as React from 'react'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

import { createFilterOptions } from '@mui/material'
import CarAutocompleteComponent from './CarAurocompleteComponent'

interface FilmOptionType {
    inputValue?: string
    title: string
    year?: number
}

const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
]

const filter = createFilterOptions<FilmOptionType>()

export const CreateCarForm: React.FC = () => {
    const [brand, setBrand] = React.useState<FilmOptionType | null>(null)

    const onChangeBrand = (event: any, newValue: any) => {
        if (typeof newValue === 'string') {
            setBrand({
                title: newValue,
            })
        } else if (newValue && newValue.inputValue) {
            setBrand({
                title: newValue.inputValue,
            })
        } else {
            setBrand(newValue)
        }
    }

    const filterOptions = (options: any, params: any) => {
        const filtered = filter(options, params)
        const { inputValue } = params
        const isExisting = options.some(
            (option: any) => inputValue === option.title
        )
        if (inputValue !== '' && !isExisting) {
            filtered.push({
                inputValue,
                title: `Add "${inputValue}"`,
            })
        }
        return filtered
    }

    const optionLabel = (option: any) => {
        if (typeof option === 'string') {
            return option
        }
        if (option.inputValue) {
            return option.inputValue
        }
        return option.title
    }

    const renderOptions = (props: any, option: any) => (
        <li {...props}>{option.title}</li>
    )

    return (
        <Grid container spacing={1}>
            <Grid item xs={6}>
                <CarAutocompleteComponent
                    value={brand}
                    onChange={onChangeBrand}
                    filterOptions={filterOptions}
                    optionLabel={optionLabel}
                    renderOptions={renderOptions}
                    infoArray={top100Films}
                    label="Car Brand"
                />
            </Grid>
            <Grid item xs={6}>
                <CarAutocompleteComponent
                    value={brand}
                    onChange={onChangeBrand}
                    filterOptions={filterOptions}
                    optionLabel={optionLabel}
                    renderOptions={renderOptions}
                    infoArray={top100Films}
                    label="Model"
                />
            </Grid>
        </Grid>
    )
}

export default CreateCarForm
