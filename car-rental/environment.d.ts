declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: 'development' | 'production'
            REACT_APP_GOOGLE_MAP_API_KEY: string
            REACT_APP_GOOGLE_GEOCODE_API_KEY: string
        }
    }
}

export {}
