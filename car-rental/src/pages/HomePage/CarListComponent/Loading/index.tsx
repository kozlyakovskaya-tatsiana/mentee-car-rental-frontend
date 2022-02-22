import React from 'react'

import { BallTriangle } from 'react-loader-spinner'

import { carLoaderStyle } from '../styles'

interface LoadingProps {
    loading: boolean
}

export const LoadingComponent: React.FC<LoadingProps> = (props) => {
    const { loading } = props
    console.log('loading', loading)
    return loading ? (
        <div style={carLoaderStyle}>
            <BallTriangle width="100" ariaLabel="loading" color="#ff2172" />
        </div>
    ) : null
}

export default LoadingComponent
