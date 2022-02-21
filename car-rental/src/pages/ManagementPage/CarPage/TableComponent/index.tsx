import * as React from 'react'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import Button from '@mui/material/Button'

import { RentalPointType } from 'shared/types/RentalPoint'

function createData(name: string, coords: string) {
    return { name, coords }
}

interface TableProps {
    rentalPoints: Array<RentalPointType>
    deleteAction: (name: string) => {}
}

export const RentalPointsTable: React.FC<TableProps> = ({
    rentalPoints,
    deleteAction,
}: TableProps) => {
    return (
        <Box component="div" sx={{ padding: '10px' }}>
            <TableContainer
                component={Paper}
                sx={{ backgroundColor: '#2d2d2d', height: '100%' }}
            >
                <Table
                    sx={{ minWidth: 300 }}
                    size="small"
                    aria-label="a dense table"
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>Rental Point name</TableCell>
                            <TableCell align="right">Delete?</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rentalPoints.map((row) => (
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
                                    <Button
                                        onClick={() => deleteAction(row.id)}
                                        style={{ margin: 0, padding: 0 }}
                                    >
                                        <DeleteOutlineOutlinedIcon
                                            fontSize="small"
                                            color="info"
                                        />
                                    </Button>
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
