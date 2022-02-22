import React from 'react'

import { BallTriangle } from 'react-loader-spinner'

import { carLoaderStyle } from '../styles'

interface LoadingProps {
    changeIsNotFound: () => void
}

export const LoadingComponent: React.FC<LoadingProps> = (props) => {
    const { changeIsNotFound } = props
    React.useEffect(() => {
        setTimeout(() => changeIsNotFound(), 3000)
    }, [])

    return (
        <div style={carLoaderStyle}>
            <BallTriangle width="100" ariaLabel="loading" color="#ff2172" />
        </div>
    )
}

export default LoadingComponent
