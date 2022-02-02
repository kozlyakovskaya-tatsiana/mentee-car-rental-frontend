import React, {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react'
import { verifyAccessToken } from 'services/tokens.service'

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

export const AuthProvider = ({ children }: any) => {
    const [isAuth, setIsAuth] = useState(false)

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
    }, [token])

    const value = useMemo(() => ({ isUserAuthenticate, changeAuth }), [isAuth])
    return (
        <AuthContext.Provider value={value as contextAuth}>
            {children}
        </AuthContext.Provider>
    )
}
