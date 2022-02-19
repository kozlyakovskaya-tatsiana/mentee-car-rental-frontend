/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react'

import Box from '@mui/material/Box'

import { Car } from 'models/Car'
import FilterOptions from 'shared/interfaces/FilterOptions'
import { useAuth } from 'contextes/authContext'

import CarList from './CarsList'

import LoadingComponent from './Loading'
import NotFound from './NotFound'
import BookingPopupComponent from './BookingPopupComponent'

import { papersHandlerStyle } from './styles'
import { lockCar, unlockCar } from '../../../services/car.service'
import BookCarRequestModel from '../../../shared/interfaces/BookCarRequestModel'

interface CarListComponentProps {
    cars: Car[]
    filterOptions: FilterOptions
    updateCars: () => void
}

const CarListComponent: React.FC<CarListComponentProps> = (
    props: CarListComponentProps
) => {
    const { isUserAuthenticate } = useAuth()

    const { cars, filterOptions, updateCars } = props
    const [loading, setLoading] = React.useState<boolean>(true)
    const [updated, setUpdated] = React.useState<boolean>(true)
    const [isFirstLoad, setIsFirstLoad] = React.useState<boolean>(true)

    const [chosenCar, setChosenCar] = React.useState<Car | undefined>()

    const [open, setOpen] = React.useState(false)

    const [submitted, setSubmitted] = React.useState(false)
    const [approved, setApproved] = React.useState(false)

    const handleClickOpen = (carId: string) => {
        const carForBooking = cars.find((car, index, array) => {
            return car.id === carId
        })
        if (carForBooking) lockCar(carForBooking.id!)
        setChosenCar(carForBooking)
        setOpen(true)
    }

    const handleCanceledClose = () => {
        if (chosenCar) unlockCar(chosenCar.id!)
        setOpen(false)
        setChosenCar(undefined)
    }
    const handleSubmitted = async () => {
        setSubmitted(true)
    }
    const handleApproved = () => {
        setApproved(true)
    }
    const handleClose = () => {
        setOpen(false)
        setSubmitted(false)
        setApproved(false)
        setChosenCar(undefined)
        updateCars()
    }

    const loader = async () => {
        await setLoading(true)
        await setUpdated(false)
        await setTimeout(() => {
            if (cars.length < 1) setUpdated(false)
            else setUpdated(true)
            setLoading(false)
        }, 1500)
    }

    useEffect(() => {
        if (!isFirstLoad) loader()
        else setIsFirstLoad(false)
    }, [cars])

    if (updated)
        return (
            <div>
                <Box component="main" style={papersHandlerStyle}>
                    <BookingPopupComponent
                        open={open}
                        submitted={submitted}
                        approved={approved}
                        handleCanceledClose={handleCanceledClose}
                        handleSubmitted={handleSubmitted}
                        handleApproved={handleApproved}
                        chosenCar={chosenCar}
                        filterOptions={filterOptions}
                        handleClose={handleClose}
                    />
                    <CarList
                        cars={cars}
                        handleClickOpen={handleClickOpen}
                        isUserAuthenticate={isUserAuthenticate}
                    />
                </Box>
            </div>
        )
    if (loading) return <LoadingComponent />
    return <NotFound />
}

export default CarListComponent
