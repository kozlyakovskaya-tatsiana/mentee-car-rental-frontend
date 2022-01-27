import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'

function createData(name: string, coords: string, cars: number, books: number) {
    return { name, coords, cars, books }
}

const rows = [
    createData('Head Rental Point', '1.213 3.123', 159, 6.0),
    createData('RP.Br.Gr.No1', '1.213 3.123', 237, 9.0),
    createData('RP.Br.Gr.No2', '1.213 3.123', 262, 16.0),
    createData('RP.Ru.Ms.No1', '1.213 3.123', 305, 3),
    createData('PR.Ps.Ld.No1', '1.213 3.123', 356, 16.0),
]

export default function DenseTable() {
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
                            <TableCell align="right">Cars</TableCell>
                            <TableCell align="right">Books</TableCell>
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
                                <TableCell align="right">{row.cars}</TableCell>
                                <TableCell align="right">{row.books}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}
