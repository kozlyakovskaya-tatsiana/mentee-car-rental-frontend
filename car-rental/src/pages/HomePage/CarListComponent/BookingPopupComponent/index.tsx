import React, { useEffect } from 'react'

import { Car } from 'models/Car'
import FilterOptions from 'shared/interfaces/FilterOptions'
import DialogFormComponent from './DialogFormComponent'
import PaymentLoaderComponent from './PaymentLoaderComponent'
import CheckoutComponent from './CheckoutComponent'
import BookCarRequestModel from '../../../../shared/interfaces/BookCarRequestModel'
import { BookCar } from '../../../../services/car.service'
import BookingReport from '../../../../models/BookingReport'

interface BookingPopupComponentProps {
    open: boolean
    submitted: boolean
    approved: boolean
    handleCanceledClose: () => void
    handleSubmitted: () => void
    handleApproved: () => void
    chosenCar: Car | undefined
    filterOptions: FilterOptions
    handleClose: () => void
}

export interface DialogComponentProps {
    open: boolean
    handleCanceledClose: () => void
    handleSubmittedClose: () => void
    chosenCar: Car | undefined
    filterOptions: FilterOptions
    handleClose: () => void
}

export interface CheckoutProps {
    open: boolean
    handleClose: () => void
    checkout: BookingReport
}

const BookingPopupComponent: React.FC<BookingPopupComponentProps> = (props) => {
    const {
        open,
        submitted,
        approved,
        chosenCar,
        filterOptions,
        handleCanceledClose,
        handleSubmitted,
        handleApproved,
        handleClose,
    } = props
    const [checkout, setCheckout] = React.useState<BookingReport>(
        {} as BookingReport
    )
    const pay = async () => {
        const model: BookCarRequestModel = {
            carId: chosenCar?.id,
            userEmail: localStorage.getItem('email')!,
            pickUpDateTime: filterOptions.PickUpDateTime,
            dropOffDateTime: filterOptions.DropOffDateTime,
        }
        await setTimeout(() => {
            BookCar(model).then((res) => {
                setCheckout(res.data)
            })
        }, 2000)
    }

    const changeApprove = async () => {
        handleApproved()
    }

    useEffect(() => {
        if (submitted) pay()
    }, [submitted])

    useEffect(() => {
        if (submitted && checkout) {
            console.log(checkout)
            changeApprove()
        }
    }, [checkout])

    if (open && !submitted && !approved)
        return (
            <DialogFormComponent
                open={open}
                handleCanceledClose={handleCanceledClose}
                handleSubmittedClose={handleSubmitted}
                chosenCar={chosenCar}
                filterOptions={filterOptions}
                handleClose={handleClose}
            />
        )
    if (open && submitted && !approved)
        return (
            <PaymentLoaderComponent
                open={submitted}
                handleCanceledClose={handleCanceledClose}
                handleSubmittedClose={handleSubmitted}
                chosenCar={chosenCar}
                filterOptions={filterOptions}
                handleClose={handleClose}
            />
        )
    return (
        <CheckoutComponent
            open={approved}
            handleClose={handleClose}
            checkout={checkout}
        />
    )
}

export default BookingPopupComponent
