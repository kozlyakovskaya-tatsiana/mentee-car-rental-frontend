import React, {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react'
import { verifyAccessToken } from 'services/tokens.service'
import { MutatingDots } from 'react-loader-spinner'

interface contextAuth {
    isUserAuthenticate: () => boolean
    changeAuth: (value: boolean) => {}
}

export const AuthContext = createContext<contextAuth>({
    isUserAuthenticate: () => {},
    changeAuth: (value: boolean) => {},
} as contextAuth)

export const useAuth = () => {
    return useContext(AuthContext)
}

const loaderHandlerStyles = {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

export const AuthProvider = ({ children }: any) => {
    const [isAuth, setIsAuth] = useState<boolean>(false)
    const [loader, setLoader] = useState<boolean>(true)

    const isUserAuthenticate = () => {
        return isAuth
    }

    const changeAuth = (value: boolean) => {
        setIsAuth(value)
    }

    const token = localStorage.getItem('accessToken')
    useEffect(() => {
        if (token)
            verifyAccessToken().then((res) => {
                if (res) {
                    changeAuth(true)
                }
            })
        setTimeout(() => setLoader(false), 500)
    }, [token])

    const value = useMemo(() => ({ isUserAuthenticate, changeAuth }), [isAuth])
    if (loader) {
        return (
            <div style={loaderHandlerStyles}>
                <MutatingDots
                    width="100"
                    ariaLabel="loading"
                    color="#ff2172"
                    secondaryColor="#1a1a1a"
                />
            </div>
        )
    }
    return (
        <AuthContext.Provider value={value as contextAuth}>
            {children}
        </AuthContext.Provider>
    )
}
