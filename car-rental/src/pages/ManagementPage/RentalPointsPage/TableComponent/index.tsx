import * as React from 'react'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'

function createData(name: string, coords: string) {
    return { name, coords }
}

const rows = [
    createData('Head Rental Point', '1.213 3.123'),
    createData('RP.Br.Gr.No1', '1.213 3.123'),
    createData('RP.Br.Gr.No2', '1.213 3.123'),
    createData('RP.Ru.Ms.No1', '1.213 3.123'),
    createData('PR.Ps.Ld.No1', '1.213 3.123'),
]

export const RentalPointsTable: React.FC = () => {
    return (
        <Box component="div" sx={{ padding: '10px' }}>
            <TableContainer
                component={Paper}
                sx={{ backgroundColor: '#2d2d2d', height: '100%' }}
            >
                <Table
                    sx={{ minWidth: 500 }}
                    size="small"
                    aria-label="a dense table"
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>Rental Point name</TableCell>
                            <TableCell align="right">Coordinates</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{
                                    '&:last-child td, &:last-child th': {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">
                                    {row.coords}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default RentalPointsTable
