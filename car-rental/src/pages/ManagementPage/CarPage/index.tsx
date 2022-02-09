import * as React from 'react'

import Box from '@mui/material/Box'
import Slide from '@mui/material/Slide'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import { Typography, useTheme } from '@mui/material'

import CreateCarForm from './CreateCarForm'

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

    const handleChange = () => {
        setChecked((prev) => !prev)
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
                            <Button
                                onClick={handleChange}
                                color="secondary"
                                variant="outlined"
                            >
                                Create new car
                            </Button>
                        )}
                        <Box>
                            <Typography variant="body1">
                                dvasd vov asdv as dvasd vo
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    )
}

export default ManagementCarPage
