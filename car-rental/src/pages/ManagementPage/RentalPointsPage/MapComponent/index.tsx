/* eslint-disable no-undef, @typescript-eslint/no-unused-vars,
no-unused-vars, @typescript-eslint/no-use-before-define */
import * as React from 'react'

import { Wrapper, Status } from '@googlemaps/react-wrapper'
import { createCustomEqual } from 'fast-equals'
import { isLatLngLiteral } from '@googlemaps/typescript-guards'

const render = (status: Status) => {
    return <h1>{status}</h1>
}

const deepCompareEqualsForMaps = createCustomEqual(
    (deepEqual) => (a: any, b: any) => {
        if (
            isLatLngLiteral(a) ||
            a instanceof google.maps.LatLng ||
            isLatLngLiteral(b) ||
            b instanceof google.maps.LatLng
        ) {
            return new google.maps.LatLng(a).equals(new google.maps.LatLng(b))
        }
        return deepEqual(a, b)
    }
)

function useDeepCompareMemoize(value: any) {
    const ref = React.useRef()
    if (!deepCompareEqualsForMaps(value, ref.current)) {
        ref.current = value
    }

    return ref.current
}

const useDeepCompareEffectForMaps = (
    callback: React.EffectCallback,
    dependencies: any[]
) => {
    React.useEffect(callback, dependencies.map(useDeepCompareMemoize))
}

interface temp {
    clicks: Array<google.maps.LatLng>
    setClicks: React.Dispatch<React.SetStateAction<google.maps.LatLng[]>>
    onMapClick: (e: google.maps.MapMouseEvent) => void
}

const MapComponent: React.VFC<temp> = ({
    clicks,
    setClicks,
    onMapClick,
}: temp) => {
    const result = clicks.map((latLng) => {
        return JSON.stringify(latLng.toJSON(), null, 2)
    })
    console.log(result)
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
        <div
            style={{
                display: 'flex',
                height: '400px',
                padding: '5px',
                borderRadius: '40px',
            }}
        >
            <Wrapper
                apiKey="AIzaSyBvynRbDYDXAlAZkk7s5lr0d7sO4aprDzc"
                render={render}
            >
                <Map
                    center={center}
                    onClick={onMapClick}
                    onIdle={onIdle}
                    zoom={zoom}
                    style={{ flexGrow: '1', height: '100%' }}
                >
                    {clicks.map((latLng, i) => (
                        <Marker key={i.toString()} position={latLng} />
                    ))}
                </Map>
            </Wrapper>
        </div>
    )
}
interface MapProps extends google.maps.MapOptions {
    style: { [key: string]: string }
    onClick: (e: google.maps.MapMouseEvent) => void
    onIdle: (map: google.maps.Map) => void
}

const Map: React.FC<MapProps> = ({
    onClick,
    onIdle,
    children,
    style,
    ...options
}) => {
    const ref = React.useRef<HTMLDivElement>(null)
    const [map, setMap] = React.useState<google.maps.Map>()

    React.useEffect(() => {
        if (ref.current && !map) {
            setMap(new window.google.maps.Map(ref.current, {}))
        }
    }, [ref, map])

    useDeepCompareEffectForMaps(() => {
        if (map) {
            map.setOptions(options)
        }
    }, [map, options])

    React.useEffect(() => {
        if (map) {
            ;['click', 'idle'].forEach((eventName) =>
                google.maps.event.clearListeners(map, eventName)
            )

            if (onClick) {
                map.addListener('click', onClick)
            }

            if (onIdle) {
                map.addListener('idle', () => onIdle(map))
            }
        }
    }, [map, onClick, onIdle])

    return (
        <>
            <div ref={ref} style={style} />
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, { map })
                }
                return null
            })}
        </>
    )
}

const Marker: React.FC<google.maps.MarkerOptions> = (options) => {
    const [marker, setMarker] = React.useState<google.maps.Marker>()

    React.useEffect(() => {
        if (!marker) {
            setMarker(new google.maps.Marker())
        }

        // remove marker from map on unmount
        return () => {
            if (marker) {
                marker.setMap(null)
            }
        }
    }, [marker])

    React.useEffect(() => {
        if (marker) {
            marker.setOptions(options)
        }
    }, [marker, options])

    return null
}

export default MapComponent
