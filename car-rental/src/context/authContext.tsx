import React, {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react'
import { verifyAccessToken } from 'services/tokens.service'

export const AuthContext = createContext({
    isAuth: false,
    changeAuth: () => {},
})

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }: any) => {
    const [isAuth, setIsAuth] = useState(false)

    const changeAuth = () => {
        setIsAuth((auth) => !isAuth)
    }

    useEffect(() => {
        const token = localStorage.getItem('accessToken')
        if (token)
            verifyAccessToken().then((res) => {
                if (res) {
                    changeAuth()
                }
            })
    }, [])

    const value = useMemo(() => ({ isAuth, changeAuth }), [isAuth])
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
