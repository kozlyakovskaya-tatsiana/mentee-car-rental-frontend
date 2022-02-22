import * as React from 'react'
import { useEffect } from 'react'

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

import { Car } from 'models/Car'

interface TableProps {
    cars: Car[]
    deleteAction: (name: string) => {}
}

export const CarsTable: React.FC<TableProps> = ({
    cars,
    deleteAction,
}: TableProps) => {
    return (
        <Box component="div" sx={{ padding: '10px' }}>
            <TableContainer
                component={Paper}
                sx={{ backgroundColor: '#2d2d2d', height: '100%' }}
            >
                <Table
                    sx={{ minWidth: 400 }}
                    size="small"
                    aria-label="a dense table"
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>Car</TableCell>
                            <TableCell align="right">Delete?</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cars.map((row, iterator) => (
                            <TableRow
                                key={row.id}
                                sx={{
                                    '&:last-child td, &:last-child th': {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    {`${row.brand.name} ${row.model}`}
                                </TableCell>
                                <TableCell align="right">
                                    <Button
                                        onClick={() => deleteAction(row.id!)}
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

export default CarsTable
