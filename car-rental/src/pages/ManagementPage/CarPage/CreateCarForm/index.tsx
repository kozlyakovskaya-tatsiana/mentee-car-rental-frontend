import * as React from 'react'

import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'

import { InputLabel, Select, SelectChangeEvent, useTheme } from '@mui/material'

import {
    formHandlerStyle,
    inputLabelStyles,
    selectDisplayStyles,
    selectStyles,
    useStyles,
} from './styles'

export const CreateCarForm: React.FC = () => {
    const [age, setAge] = React.useState('')

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value)
    }

    return (
        <Box style={formHandlerStyle}>
            <Typography component="h1" variant="h5" color="text.primary">
                Create new car
            </Typography>
            <Box sx={{ mt: 3 }}>
                <Grid
                    container
                    spacing={2}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <Grid item xs={5}>
                        <InputLabel
                            id="demo-simple-select-helper-label"
                            style={inputLabelStyles}
                        >
                            Age
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={age}
                            label="Age"
                            style={selectStyles}
                            onChange={handleChange}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={5}>
                        <InputLabel
                            id="demo-simple-select-helper-label"
                            style={inputLabelStyles}
                        >
                            Age
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={age}
                            label="Age"
                            style={selectStyles}
                            onChange={handleChange}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </Grid>
                </Grid>
                {/* <Grid item xs={12} sm={6}></Grid> */}
                fuel fuel consumption Transmission Type Quantity of seats Price
                per hour Photos Brand Rental pont
            </Box>
        </Box>
    )
}

export default CreateCarForm
