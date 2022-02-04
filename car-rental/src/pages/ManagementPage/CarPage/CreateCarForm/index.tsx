/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import { ImageListType } from 'react-images-uploading/dist/typings'

import Grid from '@mui/material/Grid'

import { BrandInputType, ModelInputType } from 'shared/types/CarTypes'
import Fuel from 'shared/enums/Fuel'
import Transmission from 'shared/enums/Transmission'

import { getAllCarBrands } from 'services/car.service'

import { Car } from 'models/Car'
import { CarPhoto } from 'models/Attachment'

import { Button, createFilterOptions, TextField } from '@mui/material'
import Zoom from '@material-ui/core/Zoom'

import CarAutocompleteComponent from './CarAurocompleteComponent'
import CarSelectComponent from './CarSelectComponent'
import UploaderComponent from './UploaderComponent'
import RentalPointSelector from './RentalPointSelector'
import { Brand } from '../../../../models/Brand'

const filter = createFilterOptions<BrandInputType>()

export const CreateCarForm: React.FC = () => {
    const [zoomAnimationChecked, setZoomAnimationChecked] = React.useState<
        boolean | undefined
    >()

    const [brandSelect, setBrandSelect] = React.useState<BrandInputType[]>([])
    const [modelSelect, setModelSelect] = React.useState<ModelInputType[]>([])

    const maxUploadedPhotos = 6

    const [brand, setBrand] = React.useState<BrandInputType | null>(null)
    const [model, setModel] = React.useState<ModelInputType | null>(null)
    const [fuel, setFuel] = React.useState<number>(-1)
    const [transmission, setTransmission] = React.useState<number>(-1)
    const [quantityOfSeats, setQuantityOfSeats] = React.useState<string>('')
    const [fuelConsumption, setFuelConsumption] = React.useState<string>('')
    const [price, setPrice] = React.useState<string>('')
    const [images, setImages] = React.useState<ImageListType>([])
    const [rentalPoint, setRentalPoint] = React.useState<string>('')

    React.useEffect(() => {
        if (brand && model && fuel && transmission && images.length > 0) {
            setZoomAnimationChecked(true)
        } else {
            setZoomAnimationChecked(false)
        }
    }, [brand, model, fuel, transmission, images])
    React.useEffect(() => {
        getAllCarBrands().then((response) => {
            setBrandSelect([...response.data])
        })
    }, [])

    const onImagesChange = (imageList: ImageListType) => {
        setImages(imageList)
    }
    const onPriceChange = (e: any) => {
        if (Number(e.target.value) < 0) {
            e.target.value = 0
        } else {
            setPrice(e.target.value)
        }
    }
    const onQuantityChange = (e: any) => {
        if (Number(e.target.value) < 0) {
            e.target.value = 0
        } else {
            setQuantityOfSeats(e.target.value)
        }
    }
    const onFuelConsumptionChange = (e: any) => {
        if (Number(e.target.value) < 0) {
            e.target.value = 0
        } else {
            setFuelConsumption(e.target.value)
        }
    }
    const onBrandChange = (event: any, newValue: any) => {
        if (typeof newValue === 'string') {
            setBrand({
                name: newValue,
            } as BrandInputType)
        } else if (newValue && newValue.inputValue) {
            setBrand({
                name: newValue.inputValue,
            } as BrandInputType)
        } else {
            setBrand(newValue)
        }
    }
    const onModelChange = (event: any, newValue: any) => {
        if (typeof newValue === 'string') {
            setModel({
                name: newValue,
            } as BrandInputType)
        } else if (newValue && newValue.inputValue) {
            setModel({
                name: newValue.inputValue,
            } as BrandInputType)
        } else {
            setModel(newValue)
        }
    }

    const onSelectFuel = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFuel(Number(event.target.value))
    }
    const onSelectTransmission = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setTransmission(Number(event.target.value))
    }

    const filterOptions = (options: any, params: any) => {
        const filtered = filter(options, params)
        const { inputValue } = params
        const isExisting = options.some(
            (option: any) => inputValue === option.name
        )
        if (inputValue !== '' && !isExisting) {
            filtered.push({
                inputValue,
                name: `Add "${inputValue}"`,
            } as BrandInputType)
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
        return option.name
    }
    const renderOptions = (props: any, option: any) => (
        <li {...props}>{option.name}</li>
    )

    const onSubmit = () => {
        const photos: CarPhoto[] = images.map((image) => ({
            fileFormat: image.file?.type,
            content: image.dataURL!,
        }))
        const convertedBrand: Brand = {
            id: '',
            name: brand!.name,
        }
        /* eslint-disable */
        const car: Car = {
            model: model!.name,
            fuel: Number(fuel),
            fuelConsumption: Number(fuelConsumption),
            transmission: transmission,
            quantityOfSeats: Number(quantityOfSeats),
            pricePerHour: Number(price),
            Photos: photos,
            brand: convertedBrand,
            rentalPointId: 'dsaf',
        }
    }

    return (
        <Grid container spacing={1} rowSpacing={2}>
            <Grid item xs={6}>
                <CarAutocompleteComponent
                    value={brand}
                    onChange={onBrandChange}
                    filterOptions={filterOptions}
                    optionLabel={optionLabel}
                    renderOptions={renderOptions}
                    infoArray={brandSelect}
                    label="Car Brand"
                />
            </Grid>
            <Grid item xs={6}>
                <CarAutocompleteComponent
                    value={model}
                    onChange={onModelChange}
                    filterOptions={filterOptions}
                    optionLabel={optionLabel}
                    renderOptions={renderOptions}
                    infoArray={modelSelect}
                    label="Model"
                />
            </Grid>
            <Grid item xs={6}>
                <CarSelectComponent
                    enumerate={Fuel}
                    label="Fuel Type"
                    onSelect={onSelectFuel}
                    value={fuel.toString()}
                />
            </Grid>
            <Grid item xs={6}>
                <CarSelectComponent
                    enumerate={Transmission}
                    label="Transmission Type"
                    onSelect={onSelectTransmission}
                    value={transmission.toString()}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label="Quantity of seats"
                    color="secondary"
                    type="number"
                    fullWidth
                    onChange={onQuantityChange}
                    value={quantityOfSeats}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label="Fuel consumption"
                    color="secondary"
                    type="number"
                    fullWidth
                    onChange={onFuelConsumptionChange}
                    value={fuelConsumption}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    label="Price per hour"
                    color="secondary"
                    type="number"
                    fullWidth
                    onChange={onPriceChange}
                    value={price}
                />
            </Grid>
            <Grid item xs={12}>
                <UploaderComponent
                    images={images}
                    onImagesChange={onImagesChange}
                    maxUploadedPhotos={maxUploadedPhotos}
                />
            </Grid>
            <Zoom
                in={zoomAnimationChecked}
                style={{
                    transitionDelay: zoomAnimationChecked ? '300ms' : '0ms',
                }}
            >
                <Grid container item component="div" rowSpacing={1}>
                    <Grid item xs={12}>
                        <RentalPointSelector
                            value={rentalPoint}
                            readonly
                            fieldLabel="Rental point"
                            onChange={(e: any) =>
                                setRentalPoint(e.target.value)
                            }
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            onClick={() => console.log('send to back')}
                            fullWidth
                            color="secondary"
                            variant="contained"
                        >
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </Zoom>
        </Grid>
    )
}

export default CreateCarForm
