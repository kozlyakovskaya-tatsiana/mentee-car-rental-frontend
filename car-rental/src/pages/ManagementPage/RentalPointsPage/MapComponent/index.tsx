import React, { useEffect, useState } from 'react'
import { GoogleMap, withGoogleMap, Marker } from 'react-google-maps'
import { Wrapper, Status } from '@googlemaps/react-wrapper'

import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import LocationOnIcon from '@mui/icons-material/LocationOn'

const render = (status: Status) => {
    return <h1>{status}</h1>
}

const initialMarkerStatement = {
    id: '',
    name: '',
    position: { lat: 0, lng: 0 },
}

export const MapComponent: React.FC = () => {
    const markers = [
        {
            id: '1',
            name: 'Wow',
            position: {
                lat: -34.397,
                lng: 150.644,
            },
        },
    ]

    const [selectedMarker, setSelectedMarker] = useState(initialMarkerStatement)

    const MyGoogleComponent = withGoogleMap((props) => {
        return (
            <GoogleMap zoom={1} center={{ lat: -34.397, lng: 150.644 }}>
                {markers.map((marker) => (
                    <Marker
                        {...marker}
                        key={marker.id}
                        position={marker.position}
                        // icon ={{url: "<LocationOnIcon>"}}  <LocationOnIcon />
                    />
                ))}
            </GoogleMap>
        )
    })

    return (
        <div>
            <Wrapper
                apiKey="AIzaSyCINCh281ew_tJhTcIqKh7G0w9QUIi-skg"
                render={render}
            >
                <MyGoogleComponent
                    containerElement={
                        <Box
                            component="div"
                            sx={{
                                padding: '10px',
                                height: '400px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Paper
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: 'white',
                                    color: 'black',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            />
                        </Box>
                    }
                    mapElement={
                        <div style={{ height: '100%', width: '100%' }} />
                    }
                />
            </Wrapper>
        </div>
    )
}

export default MapComponent
