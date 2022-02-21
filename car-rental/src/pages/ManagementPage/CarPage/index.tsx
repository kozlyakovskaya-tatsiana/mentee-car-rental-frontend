import React, { useEffect } from 'react'

import Box from '@mui/material/Box'
import Slide from '@mui/material/Slide'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import { useTheme } from '@mui/material'

import { deleteRentalPoint } from 'services/rentalPoint.service'
import { getAllCars } from 'services/car.service'
import { Car } from 'models/Car'

import CreateCarForm from './CreateCarForm'
import CarsTable from './TableComponent'

import {
    gridAnimationStyles,
    mainBoxStyles,
    paperStyles,
    useStyles,
} from './styles'

export const ManagementCarPage: React.FC = () => {
    const theme = useTheme()
    const styles = useStyles()

    const [checked, setChecked] = React.useState(false)
    const containerRef = React.useRef(null)
    const [cars, setCars] = React.useState<Car[]>([])
    const handleChange = () => {
        setChecked((prev) => !prev)
    }

    useEffect(() => {
        getAllCars().then((response) => {
            setCars(response.data)
            console.log(response.data)
        })
    }, [])

    const deleteCar = async (id: string) => {
        await deleteRentalPoint(id)
        getAllCars().then((response) => setCars(response.data))
    }
    return (
        <Box component="main" sx={mainBoxStyles}>
            <Paper
                style={paperStyles}
                className={styles.paper}
                id="tes"
                ref={containerRef}
            >
                <Grid
                    container
                    spacing={1}
                    display="flex"
                    rowSpacing={1}
                    style={{ padding: 2 }}
                >
                    {checked && (
                        <Grid
                            display="flex"
                            item
                            xs={checked ? 6 : 0}
                            style={gridAnimationStyles(checked, theme)}
                        >
                            <Slide
                                direction="right"
                                in={checked}
                                container={containerRef.current}
                            >
                                <Box display="flex">
                                    <CreateCarForm />
                                    <Box sx={{ marginLeft: 1 }}>
                                        <Button
                                            onClick={handleChange}
                                            color="secondary"
                                            variant="outlined"
                                        >
                                            x
                                        </Button>
                                    </Box>
                                </Box>
                            </Slide>
                        </Grid>
                    )}

                    <Grid item xs={checked ? 6 : 12} display="flex">
                        {!checked && (
                            <Box>
                                <Button
                                    onClick={handleChange}
                                    color="secondary"
                                    variant="outlined"
                                >
                                    Create new car
                                </Button>
                            </Box>
                        )}
                        <Box style={{ width: '100%' }}>
                            <CarsTable cars={cars} deleteAction={deleteCar} />
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    )
}

export default ManagementCarPage
