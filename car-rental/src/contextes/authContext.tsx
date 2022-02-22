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
    checkRole: () => string
    clearRoles: () => void
}

export const AuthContext = createContext<contextAuth>({
    isUserAuthenticate: () => {},
    changeAuth: (value: boolean) => {},
    checkRole: () => {},
    clearRoles: () => {},
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
    const [role, setRole] = useState<string | null>(null)

    const isUserAuthenticate = () => {
        return isAuth
    }

    const checkRole = () => {
        return role
    }

    const changeAuth = (value: boolean) => {
        setIsAuth(value)
    }

    const clearRoles = () => {
        setRole(null)
    }

    const token = localStorage.getItem('accessToken')
    const roles = localStorage.getItem('roles')

    useEffect(() => {
        if (token)
            verifyAccessToken().then((data) => {
                if (data) {
                    changeAuth(true)
                    // setRole(data.role)
                    setRole(roles)
                }
            })
        setTimeout(() => setLoader(false), 500)
    }, [token])

    const value = useMemo(
        () => ({ isUserAuthenticate, changeAuth, checkRole, clearRoles }),
        [isAuth]
    )
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
