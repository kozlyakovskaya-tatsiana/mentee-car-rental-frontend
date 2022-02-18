import React from 'react'

import { BallTriangle } from 'react-loader-spinner'

import { carLoaderStyle } from '../styles'

export const LoadingComponent: React.FC = () => {
    return (
        <div style={carLoaderStyle}>
            <BallTriangle width="100" ariaLabel="loading" color="#ff2172" />
        </div>
    )
}

export default LoadingComponent
