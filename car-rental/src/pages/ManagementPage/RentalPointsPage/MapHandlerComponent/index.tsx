/* eslint-disable no-undef, @typescript-eslint/no-unused-vars,
no-unused-vars, @typescript-eslint/no-use-before-define */
import * as React from 'react'

import { Wrapper, Status } from '@googlemaps/react-wrapper'

import Box from '@mui/material/Box'

import Map from './MapComponent'
import Marker from './MarkerComponent'

import { mapHandlerStyles, mapStyles } from './styles'

const render = (status: Status) => {
    return <h1>{status}</h1>
}

interface Markers {
    points: Array<google.maps.LatLng>
    setClicks: React.Dispatch<React.SetStateAction<google.maps.LatLng[]>>
    onMapClick: (e: google.maps.MapMouseEvent) => void
}

const MapHandlerComponent: React.VFC<Markers> = ({
    points,
    setClicks,
    onMapClick,
}: Markers) => {
    const [zoom, setZoom] = React.useState(6) // initial zoom
    const [center, setCenter] = React.useState<google.maps.LatLngLiteral>({
        lat: 53.86090537506149,
        lng: 27.590797188788514,
    })

    const onIdle = (m: google.maps.Map) => {
        setZoom(m.getZoom()!)
        setCenter(m.getCenter()!.toJSON())
    }
    return (
        <Box component="div" style={mapHandlerStyles}>
            <Wrapper
                apiKey="AIzaSyBvynRbDYDXAlAZkk7s5lr0d7sO4aprDzc"
                render={render}
            >
                <Map
                    center={center}
                    onClick={onMapClick}
                    onIdle={onIdle}
                    zoom={zoom}
                    style={mapStyles}
                >
                    {points?.map((latLng, i) => (
                        <Marker key={i.toString()} position={latLng} />
                    ))}
                </Map>
            </Wrapper>
        </Box>
    )
}

export default MapHandlerComponent
